import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { genSalt, hash } from 'bcrypt';
import { User } from '@prisma/client';
import { InstitutionService } from 'src/modules/institution/institution.service';
import { AccountService } from 'src/modules/account/account.service';
import { CategoryService } from 'src/modules/category/category.service';
import { BaseService } from 'src/core/base.service';

@Injectable()
export class UserService extends BaseService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly institutionService: InstitutionService,
    private readonly accountService: AccountService,
    private readonly categoryService: CategoryService,
  ) {
    super(prisma.user);
  }

  private readonly SALT_GEN_ROUNDS: number = 10;

  async create(createUserDto: CreateUserDto) {
    const data = (await this.generateHash(createUserDto)) as CreateUserDto;

    const userCreated = await this.prisma.user.create({
      data,
    });

    await this.populate(userCreated.id);

    return userCreated;
  }

  findAll() {
    return this.prisma.user.findMany({
      select: {
        id: true,
        email: true,
        fullName: true,
      },
    });
  }

  findOne(id: string) {
    return this.prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        email: true,
        fullName: true,
      },
    });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    updateUserDto = await this.generateHash(updateUserDto);

    return this.prisma.user.update({
      where: { id },
      data: updateUserDto,
    });
  }

  remove(id: string) {
    return this.prisma.user.delete({
      where: { id },
    });
  }

  async generateHash(
    dto: CreateUserDto | UpdateUserDto,
  ): Promise<CreateUserDto | UpdateUserDto> {
    if (dto.password) {
      const salt = await genSalt(this.SALT_GEN_ROUNDS);
      dto.password = await hash(dto.password, salt);
    }
    return dto;
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findFirst({
      where: {
        email,
      },
    });
  }

  async populate(userId: string) {
    await this.institutionService.createFromDump(userId);
    await this.accountService.createFromDump(userId);
    await this.categoryService.createFromDump(userId);
  }
}
