import React from "react";
import CardInfo from "../cardInfo/CardInfo";

export default function Kanban() {
  return (
    <div className="row">
      <div className="row">
        <div className="col-12 col-md-6 col-lg-4 mb-3 mb-lg-0">
          <CardInfo
            title="Saldo do mês"
            value={10.5}
            percentage={-20}
            icon="money-bill"
          />
        </div>
        <div className="col-12 col-md-6 col-lg-4 mb-3 mb-lg-0">
          <CardInfo
            title="Saldo do mês"
            value={10.5}
            percentage={-20}
            icon="money-bill"
          />
        </div>
        <div className="col-12 col-md-6 col-lg-4 mb-3 mb-lg-0">
          <CardInfo
            title="Saldo do mês"
            value={10.5}
            percentage={-20}
            icon="money-bill"
          />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-12">


        </div>
      </div>
    </div>
  );
}
