import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { LoggerInterceptor } from '../common/src/interceptors/logger.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Service Station')
    .setDescription('The Service Station API review')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // app.setGlobalPrefix('api', { exclude: ['app'] });
  app.useGlobalInterceptors(new LoggerInterceptor());
  app.enableCors();

  await app.listen(5000);
}
bootstrap();
