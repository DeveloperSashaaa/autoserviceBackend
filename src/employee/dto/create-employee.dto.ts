import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  MinLength,
} from 'class-validator';
import { EmployeePosition } from '../entities/employee.entity';

export class CreateEmployeeDto {
  @ApiProperty()
  @IsNotEmpty()
  fullName: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  contactNumber: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  password: string;

  @ApiProperty({
    type: 'enum',
    enum: EmployeePosition,
    default: EmployeePosition.EMPLOYEE,
  })
  @IsNotEmpty()
  position: EmployeePosition;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  salary: number;
}
