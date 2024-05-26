import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ServiceEntity } from '../../service/entities/service.entity';

@Entity('types')
export class TypeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @OneToMany(() => ServiceEntity, (service) => service.type)
  services: ServiceEntity[];
}
