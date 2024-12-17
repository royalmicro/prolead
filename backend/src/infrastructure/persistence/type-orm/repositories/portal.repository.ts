import { Injectable } from '@nestjs/common';
import { BaseRepository } from '../base.repository';
import { PortalDto } from 'src/domain/model/portal/portal.dto';
import { PortalRepositoryInterface } from 'src/domain/model/portal/portal.repository.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { PortalSchema } from '../../orm/portal.schema';
import { DeepPartial, Repository } from 'typeorm';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { LicenceDto } from 'src/domain/model/licence/licence.dto';

@Injectable()
export class PortalRepository
  extends BaseRepository<PortalDto>
  implements PortalRepositoryInterface<PortalDto>
{
  getEntityName(): string {
    return 'Portal';
  }

  constructor(
    @InjectRepository(PortalSchema)
    protected readonly portalRepository: Repository<PortalDto>,
    protected readonly eventEmitter: EventEmitter2,
  ) {
    super(portalRepository, eventEmitter);
  }

  create(data: DeepPartial<PortalDto>): Promise<PortalDto> {
    data.licence = new LicenceDto();
    data.licence.id = 1;
    return super.create(data);
  }
}
