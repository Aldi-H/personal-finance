"use client";

import { cn } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";

import {
  PfTransactionsColumnsInterface,
  iconMap,
} from "./transactions-interface";

const getIconComponent = (iconName?: string, initials?: string) => {
  const iconClass = "h-6 w-6";

  if (iconName && iconMap[iconName]) {
    const IconComponent = iconMap[iconName];

    return <IconComponent className={iconClass} />;
  }

  return <span className="text-lg font-bold">{initials || "?"}</span>;
};

export const PfTransactionsColumns: ColumnDef<PfTransactionsColumnsInterface>[] =
  [
    {
      accessorKey: "transactionName",
      cell: ({ row }) => {
        const name = row.getValue("transactionName") as string;
        const iconName = row.original.icon;
        const initials = name
          .split(" ")
          .map((n) => n[0])
          .join("")
          .toUpperCase()
          .slice(0, 2);

        return (
          <div className="flex flex-row items-center gap-4">
            <Avatar className="size-12">
              <AvatarFallback>
                {getIconComponent(iconName, initials)}
              </AvatarFallback>
            </Avatar>
            <span className="text-preset-3">{name}</span>
          </div>
        );
      },
    },
    {
      accessorKey: "transactionAmount",
      cell: ({ row }) => {
        const amount = row.getValue("transactionAmount") as string;
        const type = row.original.type;
        const isIncome = type === "income";

        return (
          <div className="text-right">
            <div
              className={cn(
                "text-base font-bold",
                isIncome ? "text-pine-blue" : "text-rosy-copper",
              )}
            >
              {isIncome ? "+" : "-"}
              {amount}
            </div>
            <div className="text-sm font-semibold text-dim-grey">
              {row.original.transactionDate}
            </div>
          </div>
        );
      },
    },
  ];
