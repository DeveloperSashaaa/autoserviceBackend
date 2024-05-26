import { IsDecimal, IsEnum, IsNotEmpty, IsUUID } from 'class-validator';
import { OrderProgress } from '../entities/order.entity';
import { ApiProperty } from '@nestjs/swagger';
import { ServiceEntity } from '../../service/entities/service.entity';
import { EmployeeEntity } from '../../employee/entities/employee.entity';
import { ClientEntity } from '../../client/entities/client.entity';

export class CreateOrderDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsDecimal({ decimal_digits: '2' })
  totalPrice: number;

  @ApiProperty({ default: OrderProgress.IN_PROGRESS })
  @IsEnum(OrderProgress)
  progress: OrderProgress;

  @ApiProperty({ default: 'uuid' })
  @IsNotEmpty()
  @IsUUID()
  client: ClientEntity;

  @ApiProperty({ default: 'uuid' })
  @IsNotEmpty()
  @IsUUID()
  employee: EmployeeEntity;

  @ApiProperty({ default: 'uuid' })
  @IsNotEmpty()
  @IsUUID()
  service: ServiceEntity;
}
