"use client";

import { CaretRightIcon } from "@phosphor-icons/react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

import PfCard from "../pf-card";
import PfCardAction from "../pf-card-action.";

interface PfTransactionsCardProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

const PfTransactionsCard = <TData, TValue>({
  columns,
  data,
}: PfTransactionsCardProps<TData, TValue>) => {
  // eslint-disable-next-line react-hooks/incompatible-library
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <PfCard
      pfCardTitle="Transactions"
      pfCardAction={
        <PfCardAction pfActionText="View All" icon={CaretRightIcon} />
      }
    >
      <Table>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                {" "}
                No Results
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </PfCard>
  );
};

export default PfTransactionsCard;
