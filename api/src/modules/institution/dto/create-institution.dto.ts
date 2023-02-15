import { Prisma } from '@prisma/client';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateInstitutionDto implements Prisma.InstitutionCreateInput {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  color: string;

  @IsString()
  @IsNotEmpty()
  icon: string;

  @IsUUID()
  userId: string;
}
