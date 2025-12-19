import { mobileNav } from "@/config/navigation";
import React from "react";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

import PfBottomNav from "@/components/pf-components/pf-navigation-menu/pf-navigation-menu";
import PfSidebar from "@/components/pf-components/pf-sidebar/pf-sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <PfSidebar />
      <PfBottomNav navItems={mobileNav} />
      <SidebarInset>
        <div className="m-10">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default DashboardLayout;
