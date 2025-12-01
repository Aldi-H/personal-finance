import React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface DropdownItem {
  label: string;
  value: string;
  // eslint-disable-next-line no-unused-vars
  onSelect?: (value: string) => void;
}

interface PfDropdownProps {
  items?: DropdownItem[];
  triggerLabel: string;
  triggerIconStart?: React.ReactNode;
  triggerIconEnd?: React.ReactNode;
}

const PfDropdown = ({
  items,
  triggerLabel = "Select",
  triggerIconStart,
  triggerIconEnd,
}: PfDropdownProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
          {triggerIconStart && <span>{triggerIconStart}</span>}
          <span>{triggerLabel}</span>
          {triggerIconEnd && <span className="ml-auto">{triggerIconEnd}</span>}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        {items?.map((item) => (
          <DropdownMenuItem
            key={item.value}
            onSelect={() => item.onSelect?.(item.value)}
          >
            <span key={item.value} className="flex-1">
              {item.label}
            </span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default PfDropdown;
