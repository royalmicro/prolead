import { BaseRepositoryInterface } from '../repository.interface';
import { CreateLicenceDto, UpdateLicenceDto } from './licence.dto';

export type LicenceRepositoryInterface<T> = BaseRepositoryInterface<
  T,
  CreateLicenceDto,
  UpdateLicenceDto
>;
