import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { IgnoreService } from './ignore.service';
import { CreateIgnoreDto } from './dto/create-ignore.dto';
import { UpdateIgnoreDto } from './dto/update-ignore.dto';

@Controller('ignore')
export class IgnoreController {
  constructor(private readonly ignoreService: IgnoreService) {}

  @Post()
  create(@Body() createIgnoreDto: CreateIgnoreDto) {
    return this.ignoreService.create(createIgnoreDto);
  }

  @Get()
  findAll() {
    return this.ignoreService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ignoreService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIgnoreDto: UpdateIgnoreDto) {
    return this.ignoreService.update(id, updateIgnoreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ignoreService.remove(id);
  }
}
