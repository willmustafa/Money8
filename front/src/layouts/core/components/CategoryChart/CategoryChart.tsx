import React from "react";
import ReactECharts from "echarts-for-react";
import styles from "./CategoryChart.module.css";
import { colors } from "@/models/colors.dto";

interface ICategoryChart {
  options?: any;
  percentage: number;
  name: string;
  color: colors;
}

export default function CategoryChart(props: ICategoryChart) {
  const options = {
    dataset: {
      source: [
        { name: "value", value: props.percentage },
        { name: "rest", value: 1 - props.percentage },
      ],
    },
    legend: {
      show: false,
    },
    tooltip: {
      show: false,
    },
    series: [
      {
        type: "pie",
        radius: ["50%", "70%"],
        avoidLabelOverlap: false,
        label: {
          show: true,
          color: "#fff",
          position: "center",
          formatter: "{d}%",
          fontSize: 16,
          fontWeight: 700,
        },
        legendHoverLink: false,
        itemStyle: {
          color: function (param: any) {
            if (param.name === "rest") return "#7E7E7E";
            else return "#fff";
          },
        },
        labelLine: {
          show: false,
        },
      },
    ],
    ...props?.options,
  };

  return (
    <div className={`${styles.wrapper} bg-${props.color}`}>
      <ReactECharts option={options} lazyUpdate={true} />
      <h6>{props.name}</h6>
    </div>
  );
}
