import React, { useEffect, useState } from "react";
import CardInfo from "../core/components/UI/cardInfo/CardInfo";
import Api from "@/utils/apiCalls";

export interface IApiMonthlySum {
  expenses: number;
  expensesFromLastMonth: number;
  expensesVariation: number;
  incomes: number;
  incomesFromLastMonth: number;
  incomesVariation: number;
  balance: number;
  totalBalance: number;
}

export default function InfoCardsHeader() {
  const [data, setData] = useState<IApiMonthlySum>({
    expenses: 0,
    expensesFromLastMonth: 0,
    expensesVariation: 0,
    incomes: 0,
    incomesFromLastMonth: 0,
    incomesVariation: 0,
    balance: 0,
    totalBalance: 0
  });
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Api.get('transaction/sum?filter=date=2022-04-10').then(res => res.data as IApiMonthlySum);
        setData(response);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  
  return (
    <div className="row justify-content-stretch">
      <div className="col-12 col-md-6 col-lg-3 mb-3 mb-lg-0">
        <CardInfo
          title="Saldo do mês"
          value={data.balance}
          icon="money-bill"
        />
      </div>
      <div className="col-12 col-md-6 col-lg-3 mb-3 mb-lg-0">
        <CardInfo
          title="Despesas do mês"
          value={data.expenses}
          percentage={data.expensesVariation}
          icon="money-bill"
          isLowerBetter
        />
      </div>
      <div className="col-12 col-md-6 col-lg-3 mb-3 mb-lg-0">
        <CardInfo
          title="Receitas do mês"
          value={data.incomes}
          percentage={data.incomesVariation}
          icon="money-bill"
          iconColor="green"
        />
      </div>
      <div className="col-12 col-md-6 col-lg-3 mb-3 mb-lg-0">
        <CardInfo title="Saldo Total" value={data.totalBalance} icon="money-bill" />
      </div>
    </div>
  );
}
