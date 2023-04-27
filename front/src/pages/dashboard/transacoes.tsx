import Card from "@/layouts/core/components/UI/card/Card";
import Table from "@/layouts/core/components/UI/table/Table";
import InfoCardsHeader from "@/layouts/modules/InfoCardsHeader";
import React from "react";

export default function Transacoes() {
  const columns = React.useMemo(
    () => ["ID", "Descrição", "Data", "Categoria", "Conta", "Valor"],
    []
  );

  const data = React.useMemo(
    () => [
      {
        id: "12ece8d9-f221-49ce-a9aa-8e10f4c14941",
        description: "teste 2asdads",
        date: "2022-02-02T00:00:00.000Z",
        value: -500,
        paid: true,
        fromAccount: null,
        fromCreditCard: "1062e0ba-9885-4b0f-b78d-23d9ab9fb5aa",
        transferedTo: null,
        transferedToObjectiveId: null,
        userId: "cd87686d-4cee-4603-8ee1-8ff170e53f57",
        categoryId: "16e2d0fe-41cd-4bb2-99de-e590244151f7",
        tagId: null,
      },
    ],
    []
  );

  return (
    <div className="d-flex flex-column gap-4">
      <InfoCardsHeader />
      <Card fullWidth overflowX>
        <Table></Table>
      </Card>
    </div>
  );
}
