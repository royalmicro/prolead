export interface BaseRepositoryInterface<T, CreateDto, UpdateDto> {
  create(dto: CreateDto): Promise<T>;
  findAll(relations: string[], loadRelationIds: boolean): Promise<T[]>;
  findOne(id: number, relations?: string[]): Promise<T>;
  findByPortal(portalId: number, relations?: string[]): Promise<T[]>;
  update(id: number, dto: UpdateDto): Promise<T>;
  delete(id: number): Promise<void>;
}
