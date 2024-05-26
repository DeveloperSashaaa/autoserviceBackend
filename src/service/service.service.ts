import { Injectable } from '@nestjs/common';
import { CreateServiceDto } from './dto/create-service.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ServiceEntity } from './entities/service.entity';
import { Repository } from 'typeorm';
import { TypeService } from '../type/type.service';

@Injectable()
export class ServiceService {
  constructor(
    @InjectRepository(ServiceEntity)
    private readonly serviceRepository: Repository<ServiceEntity>,
    private readonly typeService: TypeService,
  ) {}

  async create(createServiceDto: CreateServiceDto) {
    return await this.serviceRepository.save(createServiceDto);
  }

  findAll() {
    return this.serviceRepository.find({ relations: ['type'] });
  }

  async findOne(id: string) {
    return await this.serviceRepository.findOneBy({ id: id });
  }

  async findByType(typeId: number) {
    const type = await this.typeService.findOne(typeId);
    return this.serviceRepository.findOne({
      where: { type: type },
    });
  }
}
