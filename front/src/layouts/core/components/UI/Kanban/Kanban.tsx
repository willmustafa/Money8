import React from "react";
import CardInfo from "../cardInfo/CardInfo";
import {
  ColumnDirective,
  ColumnsDirective,
  KanbanComponent,
} from "@syncfusion/ej2-react-kanban";
import styles from "./Kanban.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../button/Button";
import Badge from "../badge/Badge";
import { IColor } from "@/layouts/core/dtos/IColor";
import ProgressBar from "../ProgressBar/ProgressBar";

export default function Kanban(this: any) {
  let data = [
    {
      Id: 1,
      status: "active",
      category: "viagem",
      name: "viagem para o Canadá",
      dueDate: "2023/06/12",
      RankId: 1,
      value: 3800,
      color: "green",
    },
    {
      Id: 2,
      status: "completed",
      category: "viagem",
      name: "viagem para o Japão",
      dueDate: "2023/06/12",
      RankId: 1,
      value: 6800,
      color: "indigo",
    },
    {
      Id: 3,
      status: "archived",
      category: "viagem",
      name: "viagem para o nordeste",
      dueDate: "2023/06/12",
      RankId: 1,
      value: 1000,
      color: "red",
    },
  ];

  function columnTemplate(props: { [key: string]: string }): JSX.Element {
    return (
      <div className={styles.header}>
        <h5>
          <b>{props.headerText}</b>
        </h5>
        <div className="w-100 mt-2">
          <Button
            variant="light"
            className={`gap-3 d-flex align-items-center ${styles.button}`}
          >
            <FontAwesomeIcon icon={["fas", "plus-circle"]} />
            Novo Objetivo
          </Button>
        </div>
      </div>
    );
  }

  const cardTemplate: string | any = (props: { [key: string]: any }) => {
    return (
      <div className="card-template">
        <div className={styles.cardHeader}>
          <div>
            <Badge color={IColor.SUCCESS}>{props.category.toUpperCase()}</Badge>
          </div>
          <div className={styles.cardInfo}>
            Concluir em:
            <span>{props.dueDate}</span>
          </div>
        </div>
        <div className={styles.cardBody}>
          <div className={styles.title}>{props.name}</div>
          <ProgressBar
            color={props.color}
            percentage={50}
            max={props.value}
            subText="Você deve economizar R$ 500 por mês para atingir esse objetivo"
          />
        </div>
      </div>
    );
  };

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
          <KanbanComponent
            id="kanban"
            keyField="status"
            dataSource={data}
            cardSettings={{
              contentField: "name",
              headerField: "Id",
              template: cardTemplate.bind(this),
            }}
          >
            <ColumnsDirective>
              <ColumnDirective
                headerText="Ativos"
                keyField="active"
                template={columnTemplate.bind(this)}
              />
              <ColumnDirective
                headerText="Completados"
                keyField="completed"
                template={columnTemplate.bind(this)}
              />
              <ColumnDirective
                headerText="Arquivados"
                keyField="archived"
                template={columnTemplate.bind(this)}
              />
            </ColumnsDirective>
          </KanbanComponent>
        </div>
      </div>
    </div>
  );
}
