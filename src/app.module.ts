import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeModule } from './type/type.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { dataSourceOptions } from '../database/data-source';
import { ServiceModule } from './service/service.module';
import { ClientModule } from './client/client.module';
import { EmployeeModule } from './employee/employee.module';
import { OrderModule } from './order/order.module';
import { InvoiceModule } from './invoice/invoice.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(dataSourceOptions),
    TypeModule,
    ServiceModule,
    ClientModule,
    EmployeeModule,
    OrderModule,
    InvoiceModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
