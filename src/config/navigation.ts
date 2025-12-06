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
    isActive: true,
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
    url: "#",
    icon: HouseIcon,
    isActive: true,
  },
  {
    title: "Transactions",
    url: "#",
    icon: ArrowsDownUpIcon,
  },
  {
    title: "Budgets",
    url: "#",
    icon: ChartDonutIcon,
  },
  {
    title: "Pots",
    url: "#",
    icon: TipJarIcon,
  },
  {
    title: "Recurring bills",
    url: "#",
    icon: ReceiptIcon,
  },
];
