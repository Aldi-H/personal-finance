"use client";

import { usePathname } from "next/navigation";
import React, { createContext, useContext } from "react";

const ActiveRouteContext = createContext<string>("");

export const ActiveRouteProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const pathname = usePathname();

  return (
    <ActiveRouteContext.Provider value={pathname}>
      {children}
    </ActiveRouteContext.Provider>
  );
};

export const useActiveRoute = () => {
  const context = useContext(ActiveRouteContext);

  if (context === undefined) {
    throw new Error(
      "useActiveRoute must be used within an ActiveRouteProvider",
    );
  }

  return context;
};
