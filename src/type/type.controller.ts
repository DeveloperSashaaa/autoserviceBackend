import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { TypeService } from './type.service';
import { CreateTypeDto } from './dto/create-type.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Type')
@Controller('type')
export class TypeController {
  constructor(private readonly typeService: TypeService) {}

  @Post('create')
  async create(@Body(new ValidationPipe()) createTypeDto: CreateTypeDto) {
    return await this.typeService.create(createTypeDto);
  }

  @Get('all')
  findAll() {
    return this.typeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.typeService.findOne(id);
  }
}
