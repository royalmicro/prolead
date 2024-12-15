import { Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
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

  @Post()
  async create(@Body() createDto: CreateDto) {
    return this.repository.create(createDto as any);
  }

  @Get()
  findAll() {
    return this.repository.findAll(this.defaultRelations, true);
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
