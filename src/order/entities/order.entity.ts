import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ClientEntity } from '../../client/entities/client.entity';
import { EmployeeEntity } from '../../employee/entities/employee.entity';
import { ServiceEntity } from '../../service/entities/service.entity';

export enum OrderProgress {
  WAITING = 'waiting',
  IN_PROGRESS = 'in_progress',
  COMPLETED = 'completed',
  CANCELED = 'canceled',
}

@Entity('orders')
export class OrderEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('decimal', { precision: 10, scale: 2 })
  totalPrice: number;

  @Column({ type: 'enum', enum: OrderProgress, default: OrderProgress.WAITING })
  progress: OrderProgress;

  @ManyToOne(() => ClientEntity, (client) => client.orders)
  client: ClientEntity;

  @ManyToOne(() => EmployeeEntity, (employee) => employee.orders)
  employee: EmployeeEntity;

  @ManyToOne(() => ServiceEntity, (service) => service.orders)
  service: ServiceEntity;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}
