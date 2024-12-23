import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { schemas } from './schemas';
import { repositoryExports, repositoryProviders } from './repositories';
import { eventHandlers, eventListeners } from './events';

@Module({
  imports: [TypeOrmModule.forFeature(schemas)],
  providers: [...repositoryProviders, ...eventListeners, ...eventHandlers],
  exports: [...repositoryExports],
})
export class DomainModule {}
