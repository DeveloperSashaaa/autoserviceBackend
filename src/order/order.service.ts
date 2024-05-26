import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderEntity } from './entities/order.entity';
import { Repository } from 'typeorm';
import { ServiceService } from '../service/service.service';
import { TypeService } from '../type/type.service';
import { ClientService } from '../client/client.service';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(OrderEntity)
    private readonly orderRepository: Repository<OrderEntity>,
    private readonly serviceService: ServiceService,
    private readonly clientService: ClientService,
  ) {}

  async create(createOrderDto: CreateOrderDto) {
    const service = await this.serviceService.findOne(
      createOrderDto.service.toString(),
    );

    const order = this.orderRepository.create({
      ...createOrderDto,
      totalPrice: service.price,
    });
    return await this.orderRepository.save(order);
  }

  async findAllByClientId(clientId: string) {
    return await this.orderRepository.find({
      where: { client: { id: clientId } },
    });
  }

  async findAllByEmail(email: string) {
    return await this.orderRepository.find({
      where: { client: { email: email } },
    });
  }

  findAll() {
    return `This action returns all order`;
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
