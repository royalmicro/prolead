import { Injectable, Logger } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { EntityEventHandlerRegistry } from '../entity-event-handler-registry';

@Injectable()
export class CrudEventListener {
  private readonly logger = new Logger(CrudEventListener.name);

  constructor(private readonly registry: EntityEventHandlerRegistry) {}

  @OnEvent('*.created')
  handleCreatedEvent(event: any) {
    const handler = this.registry.getHandler(event.entity);
    if (handler) {
      handler.handleCreatedEvent(event.payload);
    } else {
      this.logger.warn(`No handler found for entity: ${event.entity}`);
    }
  }

  @OnEvent('*.updated')
  handleUpdatedEvent(event: any) {
    const handler = this.registry.getHandler(event.entity);
    if (handler) {
      handler.handleUpdatedEvent(event.payload);
    } else {
      this.logger.warn(`No handler found for entity: ${event.entity}`);
    }
  }

  @OnEvent('*.deleted')
  handleDeletedEvent(event: any) {
    const handler = this.registry.getHandler(event.entity);
    if (handler) {
      handler.handleDeletedEvent(event.payload);
    } else {
      this.logger.warn(`No handler found for entity: ${event.entity}`);
    }
  }
}
