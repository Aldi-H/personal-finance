"use client";

import { sidebarNav } from "@/config/navigation";
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

const PfSidebar = ({ ...props }: React.ComponentProps<typeof Sidebar>) => {
  return (
    <Sidebar collapsible="icon" {...props} className="">
      <SidebarHeader className="px-8 py-10">
        <PfSidebarHeader />
      </SidebarHeader>

      <SidebarContent className="pt-6">
        <PfSidebarMain items={sidebarNav} />
      </SidebarContent>

      <SidebarFooter className="px-8 py-4">
        <SidebarTrigger />
      </SidebarFooter>
    </Sidebar>
  );
};

export default PfSidebar;
