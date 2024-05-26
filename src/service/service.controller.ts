import {
  Controller,
  Get,
  Post,
  Body,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { ServiceService } from './service.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Service')
@Controller('service')
export class ServiceController {
  constructor(private readonly serviceService: ServiceService) {}

  @Post()
  create(@Body(new ValidationPipe()) createServiceDto: CreateServiceDto) {
    return this.serviceService.create(createServiceDto);
  }

  @Get()
  findAll() {
    return this.serviceService.findAll();
  }

  @Get()
  findByTypeId(@Query('type') typeId: number) {
    return this.serviceService.findByType(typeId);
  }
}
