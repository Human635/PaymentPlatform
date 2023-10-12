import React from "react";
import { useTable, Column } from "react-table";
import { AppLink } from "../UI/AppLink/AppLink";
import {
  AppCell,
  AppTable,
  AppTableBody,
  AppTableRow,
  TableHeaderCell,
  TableHeaderRow,
} from "./Table.style";

interface TableProps<T extends object> {
  columns: Column<T>[];
  data: T[];
}

export const Table = <T extends object>({ columns, data }: TableProps<T>) => {
  const { getTableProps, getTableBodyProps, prepareRow, headerGroups, rows } =
    useTable({ columns, data });

  return (
    <AppTable {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <TableHeaderRow {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <TableHeaderCell {...column.getHeaderProps()}>
                <h5>{column.render("Header")}</h5>
              </TableHeaderCell>
            ))}
          </TableHeaderRow>
        ))}
      </thead>
      <AppTableBody {...getTableBodyProps()}>
        {rows.map((row, rowIdx) => {
          prepareRow(row);
          return (
            <AppTableRow {...row.getRowProps()}>
              {row.cells.map((cell, cellIdx) => (
                <AppCell {...cell.getCellProps()}>
                  {cell.render("Cell")}
                </AppCell>
              ))}
            </AppTableRow>
          );
        })}
                      <AppLink linkLabel="Показать другие валюты" hasIcon />
      </AppTableBody>
    </AppTable>
  );
};
