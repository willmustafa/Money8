import { Prisma } from '@prisma/client';

export class CreateUserDto implements Prisma.UserCreateInput {
  fullName: string;
  email: string;
  password: string;
}
