import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { catchError, Observable, throwError, TimeoutError } from 'rxjs';
import { tap, timeout } from 'rxjs/operators';
import { DataSource } from 'typeorm';
import * as process from 'node:process';

export const ENTITY_MANAGER_KEY = 'ENTITY_MANAGER';

@Injectable()
export class TransactionInterceptor implements NestInterceptor {
  constructor(private dataSource: DataSource) {}
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const httpContext = context.switchToHttp();
    const request: Request = httpContext.getRequest<Request>();
    const timeoutValue = parseInt(
      request.headers['set-timeout'] ||
        process.env.APP_REQUEST_TIMEOUT_INTERCEPT,
      10,
    );

    return new Observable((observer) => {
      const queryRunner = this.dataSource.createQueryRunner();
      queryRunner.connect();
      queryRunner.startTransaction();

      request[ENTITY_MANAGER_KEY] = queryRunner;

      return next
        .handle()
        .pipe(
          tap(() => queryRunner.commitTransaction()),
          timeout(timeoutValue),
        )
        .subscribe({
          next: (data) => observer.next(data),
          error: (error) => {
            queryRunner.rollbackTransaction();
            observer.error(error);
          },
          complete: () => observer.complete(),
        });
    }).pipe(
      timeout(timeoutValue),
      catchError((error) => {
        if (error instanceof TimeoutError) {
          throw new HttpException(
            'Request Timeout',
            HttpStatus.REQUEST_TIMEOUT,
          );
        }
        return throwError(error);
      }),
    );
  }
}
