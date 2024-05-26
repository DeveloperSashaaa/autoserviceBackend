import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { OrderEntity } from '../../order/entities/order.entity';

export enum EmployeePosition {
  ADMIN = 'admin',
  MODERATOR = 'moderator',
  EMPLOYEE = 'employee',
}

@Entity('employees')
export class EmployeeEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  fullName: string;

  @Column({ nullable: true })
  contactNumber: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({
    type: 'enum',
    enum: EmployeePosition,
    default: EmployeePosition.EMPLOYEE,
  })
  position: EmployeePosition;

  @Column('decimal', { precision: 10, scale: 2 })
  salary: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @OneToMany(() => OrderEntity, (order) => order.employee)
  orders: OrderEntity[];
}
