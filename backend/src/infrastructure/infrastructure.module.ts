import { Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DomainModule } from 'src/domain/domain.module';
import { dataSourceOptions } from 'src/orm-config';

@Module({
  imports: [
    EventEmitterModule.forRoot({ wildcard: true }),
    DomainModule,
    TypeOrmModule.forRootAsync({
      useFactory: async () => ({
        ...dataSourceOptions,
        autoLoadEntities: true,
      }),
    }),
  ],
})
export class InfrastructureModule {}
