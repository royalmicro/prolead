import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LicenceRepositoryInterface } from 'src/domain/model/licence/licence.repository.interface';
import { Repository } from 'typeorm';
import { BaseRepository } from '../base.repository';
import { LicenceDto } from 'src/domain/model/licence/licence.dto';
import { LicenceSchema } from '../../orm/licence.schema';
import { EventEmitter2 } from '@nestjs/event-emitter';

@Injectable()
export class LicenceRepository
  extends BaseRepository<LicenceDto>
  implements LicenceRepositoryInterface<LicenceDto>
{
  getEntityName(): string {
    return 'Licence';
  }

  constructor(
    @InjectRepository(LicenceSchema)
    protected readonly licenceRepository: Repository<LicenceDto>,
    protected readonly eventEmitter: EventEmitter2,
  ) {
    super(licenceRepository, eventEmitter);
  }
  findByPortal(): Promise<LicenceDto[]> {
    return;
  }
}
