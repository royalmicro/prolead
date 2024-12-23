import { UserEventHandler } from '../model/user/user-event-handler';
import { EntityEventHandlerRegistry } from './entity-event-handler-registry';
import { CrudEventListener } from './listeners/crud-event-listener';

export const eventListeners = [CrudEventListener];
export const eventHandlers = [EntityEventHandlerRegistry, UserEventHandler];
