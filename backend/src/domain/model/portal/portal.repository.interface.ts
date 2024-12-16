import { BaseRepositoryInterface } from '../repository.interface';
import { CreatePortalDto, UpdatePortalDto } from './portal.dto';

export type PortalRepositoryInterface<T> = BaseRepositoryInterface<
  T,
  CreatePortalDto,
  UpdatePortalDto
>;
