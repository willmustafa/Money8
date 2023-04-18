import CreditCardCard from "@/layouts/core/components/CreditCardCard/CreditCardCard";
import CustomCard from "@/layouts/core/components/UI/customCard/customCard";
import Image from "next/image";
import React from "react";

export default function Contas() {
  const accountEditHandler = () => {
    alert("edit");
  };
  const accountImportHandler = () => {
    alert("import");
  };
  const accountCreateHandler = () => {
    alert("create");
  };

  return (
    <div className="row">
      <div className="col-4">
        <CustomCard
          title="Criar novo cartão"
          handleCreate={accountCreateHandler}
        />
      </div>
      <div className="col-4">
        <CreditCardCard
          bg="generic"
          title="NuBank"
          icon={
            <Image
              src="/institutions/nubank.svg"
              alt="bank logo"
              width={55}
              height={30}
            />
          }
          currentValue={600}
          limit={1200}
          paymentDate="08/20"
          handleEdit={accountEditHandler}
          handleImport={accountImportHandler}
        />
      </div>
    </div>
  );
}
