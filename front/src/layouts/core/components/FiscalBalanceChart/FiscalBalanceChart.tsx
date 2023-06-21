import React from "react";
import ReactECharts from "echarts-for-react";
import Card from "../UI/card/Card";
import { toCurrency } from "@/helpers/Numbers";

export default function FiscalBalanceChart() {
  const options = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
      },
    },
    legend: {
      data: ["Receitas", "Despesas", "Saldo"],
    },
    xAxis: [
      {
        type: "category",
        data: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul"],
        axisPointer: {
          type: "shadow",
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        name: "Despesas",
        min: 0,
        max: 250,
        interval: 50,
        axisLabel: {
          formatter: "R$ {value}",
        },
      },
      {
        type: "value",
        name: "Saldo",
        min: 0,
        max: 25,
        interval: 5,
        axisLabel: {
          formatter: "R$ {value}",
        },
      },
    ],
    series: [
      {
        name: "Receitas",
        type: "bar",
        color: "#2DCE89",
        tooltip: {
          valueFormatter: function (value: any) {
            return toCurrency(value);
          },
        },
        data: [
          2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3,
        ],
      },
      {
        name: "Despesas",
        type: "bar",
        color: "#F5365C",
        tooltip: {
          valueFormatter: function (value: any) {
            return toCurrency(value);
          },
        },
        data: [
          2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3,
        ],
      },
      {
        name: "Saldo",
        type: "line",
        yAxisIndex: 1,
        tooltip: {
          valueFormatter: function (value: any) {
            return toCurrency(value);
          },
        },
        data: [
          2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2,
        ],
      },
    ],
  };

  return (
    <Card
      title="Balanço"
      subtitle="Variação mensal da receita, despesa e saldo"
    >
      <ReactECharts
        className="mt-3"
        option={options}
        lazyUpdate={true}
        theme={"default"}
      />
    </Card>
  );
}
