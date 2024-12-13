import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DomainModule } from 'src/domain/domain.module';
import { dataSourceOptions } from 'src/orm-config';

@Module({
  imports: [
    DomainModule,
    TypeOrmModule.forRoot({ ...dataSourceOptions, autoLoadEntities: true }),
  ],
})
export class InfrastructureModule {}
