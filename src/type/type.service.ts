import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeEntity } from './entities/type.entity';
import { Repository } from 'typeorm';
import { CreateTypeDto } from './dto/create-type.dto';

@Injectable()
export class TypeService {
  constructor(
    @InjectRepository(TypeEntity)
    private readonly typeRepository: Repository<TypeEntity>,
  ) {}

  async create(createTypeDto: CreateTypeDto) {
    return await this.typeRepository.save(createTypeDto);
  }

  findAll() {
    return this.typeRepository.find();
  }

  findOne(id: number) {
    return this.typeRepository.findOneBy({ id: id });
  }
}
