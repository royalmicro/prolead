import { Injectable } from '@nestjs/common';
import { BaseRepository } from '../base.repository';
import { PortalDto } from 'src/domain/model/portal/portal.dto';
import { PortalRepositoryInterface } from 'src/domain/model/portal/portal.repository.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { PortalSchema } from '../../orm/portal.schema';
import { Repository } from 'typeorm';

@Injectable()
export class PortalRepository
  extends BaseRepository<PortalDto>
  implements PortalRepositoryInterface<PortalDto>
{
  constructor(
    @InjectRepository(PortalSchema)
    private readonly portalRepository: Repository<PortalDto>,
  ) {
    super(portalRepository);
  }
}
