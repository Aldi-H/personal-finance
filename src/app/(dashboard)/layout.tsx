import React from "react";

import { SidebarProvider } from "@/components/ui/sidebar";

import PfSidebar from "@/components/pf-components/pf-sidebar/pf-sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <PfSidebar />
      {children}
    </SidebarProvider>
  );
};

export default DashboardLayout;
