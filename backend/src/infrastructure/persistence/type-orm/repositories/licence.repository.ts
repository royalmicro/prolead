import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LicenceRepositoryInterface } from 'src/domain/model/licence/licence.repository.interface';
import { Repository } from 'typeorm';
import { BaseRepository } from '../base.repository';
import { LicenceDto } from 'src/domain/model/licence/licence.dto';
import { LicenceSchema } from '../../orm/licence.schema';

@Injectable()
export class LicenceRepository
  extends BaseRepository<LicenceDto>
  implements LicenceRepositoryInterface<LicenceDto>
{
  constructor(
    @InjectRepository(LicenceSchema)
    private readonly licenceRepository: Repository<LicenceDto>,
  ) {
    super(licenceRepository);
  }
}
