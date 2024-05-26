import { Module } from '@nestjs/common';
import { TypeService } from './type.service';
import { TypeController } from './type.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeEntity } from './entities/type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TypeEntity])],
  controllers: [TypeController],
  providers: [TypeService],
  exports: [TypeService],
})
export class TypeModule {}
