import CustomCard from "@/layouts/core/components/UI/customCard/customCard";
import Image from "next/image";
import React from "react";

export default function Contas() {
  const accountEditHandler = () => {alert('edit')}
  const accountImportHandler = () => {alert('import')}
  const accountCreateHandler = () => {alert('create')}

  return (
    <div className="row">
      <div className="col-3">
        <CustomCard title="Criar novo cartão" handleCreate={accountCreateHandler} />
      </div>
      <div className="col-3">
        <CustomCard
            bg="generic"
          title="Fatura Atual"
          creditCard
          text="R$ 35.000,00"
          subtext="12%"
          handleEdit={accountEditHandler}
          handleImport={accountImportHandler}
        />
      </div>
    </div>
  );
}
