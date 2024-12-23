import { Inject, Injectable, Logger } from '@nestjs/common';
import { EntityEventHandlerInterface } from 'src/domain/events/entity-event-handler.interface';
import { PortalRepositoryInterface } from '../portal/portal.repository.interface';
import { PortalDto } from '../portal/portal.dto';
import { UserDto } from './user.dto';
import { UserRepositoryInterface } from './user.repository.interface';

@Injectable()
export class UserEventHandler implements EntityEventHandlerInterface {
  private readonly logger = new Logger(UserEventHandler.name);

  constructor(
    @Inject('PortalRepositoryInterface')
    private readonly portalRepository: PortalRepositoryInterface<PortalDto>,
    @Inject('UserRepositoryInterface')
    private readonly userRepository: UserRepositoryInterface<UserDto>,
  ) {}

  async handleCreatedEvent(user: UserDto): Promise<void> {
    const portal = new PortalDto();

    portal.name = `${user.name} Portal`;
    portal.description = `Portal of user ${user.name}`;

    const createdPortal = await this.portalRepository.create(portal);

    user.portal = createdPortal;
    this.userRepository.update(user.id, user);
  }

  handleUpdatedEvent(payload: any): void {
    this.logger.log(`Handling User updated event: ${JSON.stringify(payload)}`);
    // Lógica específica para User actualizado
  }

  handleDeletedEvent(payload: any): void {
    this.logger.log(`Handling User deleted event: ${JSON.stringify(payload)}`);
    // Lógica específica para User eliminado
  }
}
