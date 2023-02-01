-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_transferedTo_fkey" FOREIGN KEY ("transferedTo") REFERENCES "Account"("id") ON DELETE SET NULL ON UPDATE CASCADE;
