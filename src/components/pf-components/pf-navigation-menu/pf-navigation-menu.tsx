import { cn } from "@/lib/utils";
import { type IconProps } from "@phosphor-icons/react";
import Link from "next/link";
import React from "react";

interface NavItem {
  label: string;
  href: string;
  icon: React.ComponentType<IconProps>;
  isActive?: boolean;
}

interface PfNavigationMenuProps {
  navItems: NavItem[];
}

const PfBottomNav = ({ navItems }: PfNavigationMenuProps) => {
  return (
    <nav className="fixed right-0 bottom-0 left-0 z-50">
      {/* Tablet Version */}
      <div className="hidden justify-between rounded-t-lg bg-shadow-grey px-10 pt-2 sm:flex lg:hidden">
        {navItems.map((item) => {
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-preset-5 px-5 py-2 font-bold text-silver hover:text-white",
                item.isActive &&
                  "rounded-t-lg border-b-4 border-b-pine-blue bg-white text-pine-blue",
              )}
            >
              {item.icon && (
                <item.icon
                  weight="fill"
                  className={cn(
                    "flex h-6! w-6! items-center justify-center gap-y-1 text-inherit transition-colors",
                    item.isActive && "text-pine-blue",
                  )}
                />
              )}
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>

      {/* Mobile Version */}
      <div className="flex w-full justify-between rounded-t-lg bg-shadow-grey px-4 pt-2 sm:hidden">
        {navItems.map((item) => {
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center px-5 pt-2 pb-3 text-silver hover:text-white",
                item.isActive &&
                  "rounded-t-lg border-b-4 border-b-pine-blue bg-white text-pine-blue",
              )}
            >
              {item.icon && (
                <item.icon
                  weight="fill"
                  className={cn(
                    "flex h-6! w-6! items-center justify-center gap-y-1 text-inherit transition-colors",
                    item.isActive && "text-pine-blue",
                  )}
                />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default PfBottomNav;
