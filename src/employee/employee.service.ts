import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { EmployeeEntity } from './entities/employee.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(EmployeeEntity)
    private readonly employeeRepository: Repository<EmployeeEntity>,
  ) {}

  async create(createEmployeeDto: CreateEmployeeDto) {
    return await this.employeeRepository.save(createEmployeeDto);
  }

  findAll() {
    return this.employeeRepository.find();
    // return this.employeeRepository.find({ withDeleted: true });
  }

  findOne(id: string) {
    return this.employeeRepository.findOneBy({ id: id });
  }

  update(id: string, updateEmployeeDto: UpdateEmployeeDto) {
    return this.employeeRepository.update(id, updateEmployeeDto);
  }

  async remove(id: string): Promise<void> {
    const deleteResponse = await this.employeeRepository.softDelete(id);
    if (!deleteResponse.affected) {
      throw new NotFoundException(id);
    }
  }
}
