import React, { HTMLProps } from "react";
import styles from "./Table.module.css";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { toCurrency } from "@/helpers/Numbers";
import Badge from "../badge/Badge";
import { IColor } from "@/layouts/core/dtos/IColor";
import AccountIcon from "../../AccountIcon/AccountIcon";
import { ISODateToLocal } from "@/helpers/Data";
import Button from "../button/Button";
import InputGroup from "../InputGroup/InputGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FormInput from "../FormInput/FormInput";

const defaultData: any[] = [
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
  {
    id: "8fbd3ee1-4bc0-4e3d-91db-3cf9b361b7b2",
    description: "teste 2asdads",
    date: "2022-02-02T00:00:00.000Z",
    value: 1010.5,
    paid: false,
    fromAccount: "384ff758-7d06-4343-8bc5-6ad95b8b1e97",
    fromCreditCard: null,
    transferedTo: "f08907c7-1757-4070-ab9b-faff0bae69e5",
    transferedToObjectiveId: null,
    userId: "cd87686d-4cee-4603-8ee1-8ff170e53f57",
    categoryId: "16e2d0fe-41cd-4bb2-99de-e590244151f7",
    tagId: null,
  },
];

const columnHelper = createColumnHelper<any>();

const statusFormatter = (bool: boolean) => {
  return bool === true ? "Pago" : "A Pagar";
};

export default function Table() {
  const [data, setData] = React.useState(() => [...defaultData]);

  const columns = [
    {
      id: "select",
      header: ({ table }: any) => (
        <IndeterminateCheckbox
          {...{
            checked: table.getIsAllRowsSelected(),
            indeterminate: table.getIsSomeRowsSelected(),
            onChange: table.getToggleAllRowsSelectedHandler(),
          }}
        />
      ),
      cell: ({ row }: any) => (
        <div className="px-1">
          <IndeterminateCheckbox
            {...{
              checked: row.getIsSelected(),
              disabled: !row.getCanSelect(),
              indeterminate: row.getIsSomeSelected(),
              onChange: row.getToggleSelectedHandler(),
            }}
          />
        </div>
      ),
    },
    columnHelper.accessor((row) => row.date, {
      id: "date",
      header: () => "Data",
      cell: (info) => (
        <div>
          <h6>{ISODateToLocal(info.getValue())}</h6>
          <p className="text-small mb-0">Vence em 3 dias</p>
        </div>
      ),
    }),
    columnHelper.accessor((row) => row.description, {
      id: "description",
      header: () => "Descrição",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor((row) => row.categoryId, {
      id: "categoryId",
      header: () => "Categoria",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor((row) => row.fromAccount, {
      id: "fromAccount",
      header: () => "Conta",
      cell: (info) => (
        <span>
          <AccountIcon icon="nubank" color={IColor.PRIMARY}>
            Nubank
          </AccountIcon>
        </span>
      ),
    }),
    columnHelper.accessor((row) => row.paid, {
      id: "paid",
      header: () => "Status",
      cell: (info) => (
        <Badge color={info.getValue() ? IColor.SUCCESS : IColor.DANGER}>
          {statusFormatter(info.getValue())}
        </Badge>
      ),
    }),
    columnHelper.accessor((row) => row.value, {
      id: "value",
      header: () => "Valor",
      cell: (info) => (
        <p className={`${info.getValue() < 0 ? "text-danger" : "text-success"} mb-0`}>
          {toCurrency(info.getValue())}
        </p>
      ),
    }),
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <>
      <table className={styles.table}>
        <thead className={styles.thead}>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className={styles.th}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className={styles.tr}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className={styles.td}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className={`d-block w-100 ${styles.tableFooter}`}>
        <div className="row w-100">
          <div className="col-4">
            Mostrando <b>{table.getRowModel().rows.length} registros</b>
          </div>
          <div className="col-4">
            <InputGroup leftIcon={<FontAwesomeIcon icon={["fas", 'magnifying-glass']} />}>
              <FormInput type="text" placeholder="Pesquisar" />
            </InputGroup>
          </div>
          <div className="col-4 text-end">
            <Button variant="danger">Deletar 1 registro</Button>
          </div>
        </div>
      </div>
    </>
  );
}

function IndeterminateCheckbox({
  indeterminate,
  className = "",
  ...rest
}: { indeterminate?: boolean } & HTMLProps<HTMLInputElement>) {
  const ref = React.useRef<HTMLInputElement>(null!);

  React.useEffect(() => {
    if (typeof indeterminate === "boolean") {
      ref.current.indeterminate = !rest.checked && indeterminate;
    }
  }, [ref, indeterminate]);

  return (
    <input
      type="checkbox"
      ref={ref}
      className={className + " cursor-pointer"}
      {...rest}
    />
  );
}
