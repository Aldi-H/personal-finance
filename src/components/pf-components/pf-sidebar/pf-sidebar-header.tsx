import { cn } from "@/lib/utils";
import Image from "next/image";

import { useSidebar } from "@/components/ui/sidebar";

const PfSidebarHeader = () => {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";

  return (
    <div className="relative h-6 w-36 overflow-hidden transition-all duration-300 ease-in-out">
      {/* Collapsed */}
      <Image
        src="/assets/pf-logo/logo-initials.svg"
        alt="Logo Initials"
        width={13}
        height={24}
        className={cn(
          "absolute top-0 left-0 h-6 w-auto transition-all duration-300",
          collapsed ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0",
        )}
      />

      {/* Expanded */}
      <Image
        src="/assets/pf-logo/logo-complete.svg"
        alt="Logo Complete"
        width={122}
        height={24}
        className={cn(
          "absolute top-0 left-0 h-6 w-auto transition-all duration-300",
          collapsed ? "translate-x-2 opacity-0" : "translate-x-0 opacity-100",
        )}
      />
    </div>
  );
};

export default PfSidebarHeader;
