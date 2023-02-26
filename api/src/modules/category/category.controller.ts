import { Controller, Get, Query, Request } from '@nestjs/common';
import { BaseController } from 'src/core/base.controller';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController extends BaseController {
  constructor(private readonly categoryService: CategoryService) {
    super(categoryService);
  }

  @Get('sum')
  async getMonthlySum(
    @Query('date') date = new Date().toISOString(),
    @Request() request: any,
  ) {
    this.categoryService.userId = request.user.id;
    return await this.categoryService.getMonthlySum(date);
  }
}
