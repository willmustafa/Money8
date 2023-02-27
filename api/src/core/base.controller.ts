import {
  Body,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Request,
} from '@nestjs/common';
import { parse } from 'qs';
import { getLastDayOfMonth } from 'src/shared/helpers/Dates';

export abstract class BaseController {
  constructor(private readonly service: any) {
    this.service = service;
  }

  @Post()
  create(@Body() createDto: any, @Request() request: any) {
    createDto.userId = request.user.id;
    return this.service.create(createDto);
  }

  @Get()
  findAll(
    @Query('page') page = 1,
    @Query('pageSize') pageSize = 25,
    @Query('sort') sort = {},
    @Query('filter') filter = '',
    @Request() request: any,
  ) {
    const parsedFilter = filter === '' ? {} : parse(filter);
    parsedFilter.userId = request.user.id;

    if (parsedFilter?.date)
      parsedFilter.date = this.getParsedDateOnFilter(parsedFilter);

    return this.service.findAll(page, pageSize, sort, parsedFilter);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Request() request: any) {
    const filter = { userId: request.user.id };
    return this.service.findOne(id, filter);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDto: any,
    @Request() request: any,
  ) {
    const filter = { userId: request.user.id };
    return this.service.update(id, updateDto, filter);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Request() request: any) {
    const filter = { userId: request.user.id };
    return this.service.remove(id, filter);
  }

  getParsedDateOnFilter(filter: any): string {
    return getLastDayOfMonth(
      (filter.date as string) ?? new Date().toISOString(),
    );
  }
}
