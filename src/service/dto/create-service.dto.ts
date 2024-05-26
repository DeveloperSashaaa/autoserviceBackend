import { ApiProperty } from '@nestjs/swagger';
import {
  IsInt,
  IsNotEmpty,
  IsString,
  MaxLength,
} from 'class-validator';
import { TypeEntity } from '../../type/entities/type.entity';

export class CreateServiceDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty()
  @IsNotEmpty()
  // @IsDecimal()
  price: number;

  @ApiProperty()
  @IsString()
  @MaxLength(120)
  description: string;

  @ApiProperty({ default: 1 })
  @IsNotEmpty()
  @IsInt()
  type: TypeEntity;
}
