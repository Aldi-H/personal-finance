import { cn } from "@/lib/utils";
import { type IconProps } from "@phosphor-icons/react";

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
  const collapsed = state === "collapsed";

  return (
    <SidebarMenu className="pr-6">
      {items.map((item) => (
        <SidebarMenuItem
          key={item.title}
          className={cn("mb-2 last:mb-0", collapsed && "pr-0!")}
        >
          <SidebarMenuButton
            isActive={item.isActive}
            className={cn(
              "group rounded-l-none rounded-r-xl px-8 py-4 transition-colors hover:text-white",
              item.isActive && "border-l-4 border-l-pine-blue text-pine-blue",
              collapsed && "justify-center rounded-r-md",
            )}
            asChild
          >
            <div className="text-preset-3 flex items-center gap-4 font-bold! text-inherit">
              {item.icon && (
                <item.icon
                  weight="fill"
                  className={cn(
                    "h-6! w-6! text-inherit transition-colors",
                    item.isActive ? "text-pine-blue" : "text-inherit",
                  )}
                />
              )}

              {!collapsed && (
                <a href={item.url} className="text-inherit">
                  <span>{item.title}</span>
                </a>
              )}
            </div>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
};

export default PfSidebarMain;
