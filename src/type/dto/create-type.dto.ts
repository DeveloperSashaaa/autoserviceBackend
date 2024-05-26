import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTypeDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  title: string;
}
