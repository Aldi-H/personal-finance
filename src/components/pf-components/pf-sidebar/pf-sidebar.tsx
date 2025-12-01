"use client";

import {
  ArrowsDownUpIcon,
  ChartDonutIcon,
  HouseIcon,
  ReceiptIcon,
  TipJarIcon,
} from "@phosphor-icons/react";
import React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarTrigger,
} from "@/components/ui/sidebar";

import PfSidebarHeader from "./pf-sidebar-header";
import PfSidebarMain from "./pf-sidebar-main";

const navData = {
  main: [
    {
      title: "Overview",
      url: "#",
      icon: HouseIcon,
      // isActive: true,
    },
    {
      title: "Transactions",
      url: "#",
      icon: ArrowsDownUpIcon,
      isActive: true,
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
  ],
};

const PfSidebar = ({ ...props }: React.ComponentProps<typeof Sidebar>) => {
  // const { state } = useSidebar();
  // const collapsed = state === "collapsed";

  return (
    <Sidebar collapsible="icon" {...props} className="">
      <SidebarHeader className="px-8 py-10">
        <PfSidebarHeader />
      </SidebarHeader>

      <SidebarContent className="pt-6">
        <PfSidebarMain items={navData.main} />
      </SidebarContent>

      <SidebarFooter className="px-8 py-4">
        <SidebarTrigger />
      </SidebarFooter>
    </Sidebar>
  );
};

export default PfSidebar;
