-- AlterTable
ALTER TABLE "Transaction" ADD COLUMN     "fromAccount" TEXT,
ADD COLUMN     "fromCreditCard" TEXT;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_fromAccount_fkey" FOREIGN KEY ("fromAccount") REFERENCES "Account"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_fromCreditCard_fkey" FOREIGN KEY ("fromCreditCard") REFERENCES "CreditCard"("id") ON DELETE SET NULL ON UPDATE CASCADE;
