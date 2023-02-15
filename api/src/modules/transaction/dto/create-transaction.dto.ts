import { Prisma } from '@prisma/client';

export class CreateTransactionDto implements Prisma.TransactionCreateInput {
  id?: string | undefined;
  description: string;
  date: string | Date;
  value: number;
  paid: boolean;
  transferedTo: string;
  fromAccount: string;
  fromCreditCard?: string;
  userId: string;
}
