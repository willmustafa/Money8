import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { genSalt, hash } from 'bcrypt';
import { User } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  private readonly SALT_GEN_ROUNDS: number = 10;

  async create(createUserDto: CreateUserDto) {
    const data = (await this.generateHash(createUserDto)) as CreateUserDto;

    return this.prisma.user.create({
      data,
    });
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
}
