import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from '../orm-config';

@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOptions)],
})
export class InfrastructureModule {}
