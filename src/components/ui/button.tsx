import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";

const buttonVariants = cva(
  "text-preset-4-bold inline-flex shrink-0 items-center justify-center gap-2 rounded-xl font-bold tracking-normal transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        primary: "bg-shadow-grey text-white shadow-xs hover:bg-dim-grey",
        secondary:
          "bg-parchment shadow-xs outline-parchment hover:bg-white hover:outline-1",
        destroy: "bg-rosy-copper text-white shadow-xs hover:bg-rosy-copper/80",
        tertiary:
          "bg-transparent text-dim-grey shadow-none hover:text-shadow-grey",
      },
      size: {
        default: "h-[53px] p-4 has-[>svg]:px-3",
        sm: "h-8 gap-1.5 rounded-md px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...properties
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }), "")}
      {...properties}
    />
  );
}

export { Button, buttonVariants };
