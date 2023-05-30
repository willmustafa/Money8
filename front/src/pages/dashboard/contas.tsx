import AccountCard from "@/layouts/core/components/AccountCard/AccountCard";
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
      <div className="col-3">
        <CustomCard
          title="Criar nova conta"
          handleCreate={accountCreateHandler}
        />
      </div>
      <div className="col-3">
        <AccountCard
          bg="generic"
          title="NuBank"
          institution="nubank"
          text="R$ 35.000,00"
          subtext="12%"
          handleEdit={accountEditHandler}
          handleImport={accountImportHandler}
        />
      </div>
      <div className="col-3">
        <AccountCard
          bg="generic"
          title="Itaú"
          institution="c6"
          text="R$ 35.000,00"
          subtext="12%"
          handleEdit={accountEditHandler}
          handleImport={accountImportHandler}
        />
      </div>
      <div className="col-3">
        <AccountCard
          bg="generic"
          title="Itaú"
          institution="inter"
          text="R$ 35.000,00"
          subtext="12%"
          handleEdit={accountEditHandler}
          handleImport={accountImportHandler}
        />
      </div>
      <div className="col-3">
        <AccountCard
          bg="generic"
          title="Itaú"
          institution="inter"
          text="R$ 35.000,00"
          subtext="12%"
          handleEdit={accountEditHandler}
          handleImport={accountImportHandler}
        />
      </div>
    </div>
  );
}
