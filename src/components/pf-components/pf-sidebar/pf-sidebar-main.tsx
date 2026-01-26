import { useActiveRoute } from "@/hooks/navbar-context";
import { cn } from "@/lib/utils";
import { type IconProps } from "@phosphor-icons/react";
import Link from "next/link";

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const PfSidebarMain = ({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: React.ComponentType<IconProps>;
    isActive?: boolean;
  }[];
}) => {
  const { state } = useSidebar();
  const activeRoute = useActiveRoute();
  const collapsed = state === "collapsed";

  return (
    <SidebarMenu className="pr-6">
      {items.map((item) => {
        const isActive =
          activeRoute === item.url ||
          (item.url === "/overview" && activeRoute === "/");

        return (
          <SidebarMenuItem
            key={item.title}
            className={cn("mb-2 last:mb-0", collapsed && "pr-0!")}
          >
            <SidebarMenuButton isActive={isActive} asChild>
              <Link
                href={item.url}
                className={cn(
                  "group rounded-l-none rounded-r-xl px-8 py-4 transition-colors hover:text-white",
                  isActive && "border-l-4 border-l-pine-blue text-pine-blue",
                  collapsed && "justify-center rounded-r-md",
                )}
              >
                <div className="text-preset-3 flex items-center gap-4 font-bold! text-inherit">
                  {item.icon && (
                    <item.icon
                      weight="fill"
                      className={cn(
                        "h-6! w-6! text-inherit transition-colors",
                        isActive ? "text-pine-blue" : "text-inherit",
                      )}
                    />
                  )}

                  {!collapsed && (
                    <div className="text-inherit">
                      <span>{item.title}</span>
                    </div>
                  )}
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        );
      })}
    </SidebarMenu>
  );
};

export default PfSidebarMain;
