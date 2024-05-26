import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import * as argon2 from 'argon2';
import { LoginDto } from '../auth/dto/login.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ClientEntity } from './entities/client.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(ClientEntity)
    private readonly clientRepository: Repository<ClientEntity>,
  ) {}

  async create(createClientDto: CreateClientDto) {
    const hashedPassword = await this.hashPassword(createClientDto.password);

    const newClient = this.clientRepository.create({
      ...createClientDto,
      password: hashedPassword,
    });

    return await this.clientRepository.save(newClient);
  }

  findAll() {
    return `This action returns all client`;
  }

  async findOne(id: string) {
    return await this.clientRepository.findOneBy({ id: id });
  }

  async findOneByEmail(email: string) {
    return await this.clientRepository.findOneBy({ email: email });
  }

  update(id: number, updateClientDto: UpdateClientDto) {
    return `This action updates a #${id} client`;
  }

  remove(id: number) {
    return `This action removes a #${id} client`;
  }

  // TODO Transfer to AuthService

  private async hashPassword(password: string): Promise<string> {
    return await argon2.hash(password);
  }

  private async verifyPassword(loginDto: LoginDto): Promise<boolean> {
    const client = await this.findOneByEmail(loginDto.email);
    if (!client) {
      throw new NotFoundException('Invalid email or password');
    }
    return await argon2.verify(client.password, loginDto.password);
  }
}
