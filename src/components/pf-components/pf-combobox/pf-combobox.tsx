"use client";

import { cn } from "@/lib/utils";
import { CaretDownIcon, CheckIcon } from "@phosphor-icons/react";
import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface PfComboboxItem {
  label: string;
  value: string;
}

interface PfComboboxProps {
  comboboxItems: PfComboboxItem[];
  value: string;
  // eslint-disable-next-line no-unused-vars
  onValueChange: (value: string | ((previous: string) => string)) => void;
  placeholder?: string;
  emptyMessage?: string;
  className?: string;
  itemClassName?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

const PfCombobox = ({
  comboboxItems,
  value,
  onValueChange,
  placeholder = "Search Item...",
  emptyMessage = "No results.",
  className,
  itemClassName,
  startIcon,
  endIcon,
}: PfComboboxProps) => {
  const [open, setOpen] = useState(false);
  const selectedLabel = comboboxItems.find(
    (item) => item.value === value,
  )?.label;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn(
            "w-full justify-between",
            value && "border-dim-grey text-shadow-grey",
            className,
          )}
        >
          <div className="flex items-center gap-2">
            {startIcon}
            {selectedLabel || placeholder}
          </div>
          {endIcon ?? <CaretDownIcon size={16} weight="fill" />}
        </Button>
      </PopoverTrigger>

      <PopoverContent className="p-0">
        <Command>
          <CommandInput placeholder="Search..." />
          <CommandList>
            <CommandEmpty>{emptyMessage}</CommandEmpty>
            {comboboxItems.map((comboboxItem) => (
              <CommandItem
                key={comboboxItem.value}
                value={comboboxItem.value}
                onSelect={(currentValue) => {
                  onValueChange(currentValue === value ? "" : currentValue);
                  setOpen(false);
                }}
                className={itemClassName}
              >
                <CheckIcon
                  size={16}
                  className={cn(
                    value === comboboxItem.value ? "opacity-100" : "opacity-0",
                  )}
                />
                {comboboxItem.label}
              </CommandItem>
            ))}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default PfCombobox;
