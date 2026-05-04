import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 font-condensed tracking-[0.08em] uppercase active:scale-[0.98]",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-accent hover:shadow-md hover:shadow-primary/20 rounded-md",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-md",
        outline: "border border-primary/60 bg-transparent text-primary hover:border-accent hover:text-accent hover:bg-primary/5 rounded-md",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-md",
        ghost: "text-primary hover:text-accent hover:bg-primary/5 rounded-md",
        link: "text-primary underline-offset-4 hover:underline hover:text-accent",
        luxury: "bg-primary text-primary-foreground hover:bg-accent hover:shadow-xl hover:shadow-primary/30 rounded-md",
        hero: "bg-primary text-primary-foreground hover:bg-accent hover:shadow-lg hover:shadow-primary/30 text-base tracking-[0.1em] rounded-md",
        champagne: "bg-champagne text-deep-black hover:bg-champagne/90 hover:shadow-md rounded-md",
        whatsapp: "bg-[#25D366] hover:bg-[#128C7E] text-white hover:shadow-xl hover:shadow-[#25D366]/30 rounded-full",
      },
      size: {
        default: "h-10 px-6 py-2",
        sm: "h-9 px-4",
        lg: "h-12 px-8 text-base",
        xl: "h-14 px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
