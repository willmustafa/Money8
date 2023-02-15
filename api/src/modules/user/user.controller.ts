import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { IsPublic } from 'src/modules/auth/decorators/is-public.decorator';
import { BaseController } from 'src/core/base.controller';

@Controller('user')
export class UserController extends BaseController {
  constructor(private readonly userService: UserService) {
    super(userService);
  }

  @Post()
  @IsPublic()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }
}
