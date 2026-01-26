"use client";

import {
  ArrowsDownUpIcon,
  ChartDonutIcon,
  HouseIcon,
  ReceiptIcon,
  TipJarIcon,
} from "@phosphor-icons/react";

export const mobileNav = [
  {
    label: "Overview",
    href: "/overview",
    icon: HouseIcon,
  },
  {
    label: "Transactions",
    href: "/transactions",
    icon: ArrowsDownUpIcon,
  },
  {
    label: "Budgets",
    href: "/budgets",
    icon: ChartDonutIcon,
  },
  {
    label: "Pots",
    href: "/pots",
    icon: TipJarIcon,
  },
  {
    label: "Recurring bills",
    href: "/recurring-bills",
    icon: ReceiptIcon,
  },
];

export const sidebarNav = [
  {
    title: "Overview",
    url: "/overview",
    icon: HouseIcon,
  },
  {
    title: "Transactions",
    url: "/transactions",
    icon: ArrowsDownUpIcon,
  },
  {
    title: "Budgets",
    url: "/budgets",
    icon: ChartDonutIcon,
  },
  {
    title: "Pots",
    url: "/pots",
    icon: TipJarIcon,
  },
  {
    title: "Recurring bills",
    url: "/recurring-bills",
    icon: ReceiptIcon,
  },
];
