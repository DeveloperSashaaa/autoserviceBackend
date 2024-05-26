import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TypeEntity } from '../../type/entities/type.entity';
import { OrderEntity } from '../../order/entities/order.entity';

@Entity('services')
export class ServiceEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  image: string;

  @ManyToOne(() => TypeEntity, (type) => type.services)
  type: TypeEntity;

  @OneToMany(() => OrderEntity, (order) => order.service)
  orders: OrderEntity[];
}
