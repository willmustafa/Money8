import React from "react";
import CardInfo from "../core/components/UI/cardInfo/CardInfo";

export default function InfoCardsHeader() {
  return (
    <div className="row justify-content-stretch">
      <div className="col-3">
        <CardInfo
          title="Saldo do mês"
          value={10.5}
          percentage={-20}
          icon="money-bill"
        />
      </div>
      <div className="col-3">
        <CardInfo
          title="Despesas do mês"
          value={10.5}
          percentage={10}
          icon="money-bill"
        />
      </div>
      <div className="col-3">
        <CardInfo
          title="Receitas do mês"
          value={10.5}
          percentage={40}
          icon="money-bill"
          iconColor="green"
        />
      </div>
      <div className="col-3">
        <CardInfo title="Saldo Total" value={10000.5} icon="money-bill" />
      </div>
    </div>
  );
}
