import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
}

interface PfNavigationMenuProps {
  navItems: NavItem[];
  activePath: string;
}

const PfBottomNav = ({ navItems, activePath }: PfNavigationMenuProps) => {
  return (
    <nav className="fixed right-0 bottom-0 left-0 z-50">
      {/* Tablet Version */}
      <div className="hidden justify-between rounded-t-lg bg-shadow-grey px-10 pt-2 sm:flex lg:hidden">
        {navItems.map((item) => {
          const isActive = activePath === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-preset-5 px-5 py-2 font-bold text-silver hover:text-white",
                isActive &&
                  "rounded-t-lg border-b-4 border-b-pine-blue bg-white text-pine-blue",
              )}
            >
              <div
                className={cn(
                  "flex items-center justify-center gap-y-1",
                  isActive && "text-pine-blue",
                )}
              >
                {item.icon}
              </div>
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>

      {/* Mobile Version */}
      <div className="flex w-full justify-between rounded-t-lg bg-shadow-grey px-4 pt-2 sm:hidden">
        {navItems.map((item) => {
          const isActive = activePath === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center px-5 pt-2 pb-3 text-silver hover:text-white",
                isActive &&
                  "rounded-t-lg border-b-4 border-b-pine-blue bg-white text-pine-blue",
              )}
            >
              <div
                className={cn(
                  "flex items-center justify-center",
                  isActive && "text-pine-blue",
                )}
              >
                {item.icon}
              </div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default PfBottomNav;
