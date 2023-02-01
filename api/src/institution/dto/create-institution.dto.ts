import { Prisma } from '@prisma/client';

export class CreateInstitutionDto implements Prisma.InstitutionCreateInput {
  name: string;
  color: string;
  icon: string;
  userId: string;
}
