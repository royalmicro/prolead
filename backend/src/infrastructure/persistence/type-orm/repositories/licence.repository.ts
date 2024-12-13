import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LicenceRepositoryInterface } from 'src/domain/model/licence/licence.repository.interface';
import { Repository } from 'typeorm';
import { BaseRepository } from '../base.repository';
import { LicenceOrm } from '../../orm/licence.orm';

export const USER_REPOSITORY = Symbol('USER_REPOSITORY');

@Injectable()
export class LicenceRepository
  extends BaseRepository<LicenceOrm>
  implements LicenceRepositoryInterface<LicenceOrm>
{
  constructor(
    @InjectRepository(LicenceOrm)
    private readonly licenceRepository: Repository<LicenceOrm>,
  ) {
    super(licenceRepository);
  }
}
