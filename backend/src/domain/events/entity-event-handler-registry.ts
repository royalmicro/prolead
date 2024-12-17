import { Injectable } from '@nestjs/common';
import { EntityEventHandlerInterface } from './entity-event-handler.interface';
import { UserEventHandler } from '../model/user/user-event-handler';

@Injectable()
export class EntityEventHandlerRegistry {
  private readonly handlers: Map<string, EntityEventHandlerInterface> =
    new Map();

  constructor(private readonly userEventHandler: UserEventHandler) {
    this.handlers.set('User', this.userEventHandler);
  }

  getHandler(entity: string): EntityEventHandlerInterface | null {
    return this.handlers.get(entity) || null;
  }
}
