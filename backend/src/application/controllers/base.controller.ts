import { Get, Post, Body, Patch, Param, Delete, Request } from '@nestjs/common';
import { BaseRepositoryInterface } from 'src/domain/model/repository.interface';

export class BaseController<T, CreateDto, UpdateDto> {
  constructor(
    private readonly repository: BaseRepositoryInterface<
      T,
      CreateDto,
      UpdateDto
    >,
    private readonly defaultRelations: string[] = [],
  ) {}

  static getCreateDtoClass(): any {
    throw new Error('Child class must override getCreateDtoClass');
  }

  static getUpdateDtoClass(): any {
    throw new Error('Child class must override getUpdateDtoClass');
  }

  @Post()
  async create(@Body() createDto: CreateDto) {
    return this.repository.create(createDto as any);
  }

  @Get()
  findAll(@Request() req: any) {
    const { portalId } = req.user;
    return this.repository.findByPortal(portalId, this.defaultRelations);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.repository.findOne(+id, this.defaultRelations);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDto: UpdateDto) {
    return this.repository.update(+id, updateDto as any);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.repository.delete(+id);
  }
}
