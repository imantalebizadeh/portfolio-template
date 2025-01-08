import * as React from "react";

import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center px-6 gap-2 h-12 whitespace-nowrap rounded-lg text-sm font-semibold transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-white text-gray-900 hover:bg-gray-100 hover:text-gray-900",
        outline: "border border-white/15",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

interface ButtonProps
  extends React.ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {}

function Button({ className, variant, ...props }: ButtonProps) {
  return (
    <button
      type="button"
      className={cn(buttonVariants({ variant }), className)}
      {...props}
    >
      {props.children}
    </button>
  );
}

Button.displayName = "Button";

export { Button, buttonVariants };
