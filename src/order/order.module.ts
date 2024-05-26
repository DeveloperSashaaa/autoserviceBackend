import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderEntity } from './entities/order.entity';
import { ServiceModule } from '../service/service.module';
import { ClientModule } from '../client/client.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([OrderEntity]),
    ServiceModule,
    ClientModule,
  ],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
