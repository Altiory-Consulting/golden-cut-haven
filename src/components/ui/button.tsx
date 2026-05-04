import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group/btn relative inline-flex items-center justify-center gap-2 text-center text-sm font-medium ring-offset-background transition-all duration-500 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 font-condensed tracking-[0.12em] sm:tracking-[0.18em] uppercase rounded-full will-change-transform hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] max-w-full",
  {
    variants: {
      variant: {
        default:
          "text-primary-foreground bg-[linear-gradient(135deg,hsl(var(--gold-bright))_0%,hsl(var(--primary))_50%,hsl(var(--gold-bright))_100%)] bg-[length:200%_100%] bg-[position:0%_50%] hover:bg-[position:100%_50%] shadow-[0_4px_20px_-4px_hsl(var(--primary)/0.4),inset_0_1px_0_hsl(var(--gold-bright)/0.6)] hover:shadow-[0_12px_40px_-8px_hsl(var(--primary)/0.65),inset_0_1px_0_hsl(var(--gold-bright)/0.8)]",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 hover:shadow-[0_8px_24px_-6px_hsl(var(--destructive)/0.5)]",
        outline:
          "border border-primary/40 bg-primary/[0.02] text-primary backdrop-blur-sm hover:border-primary hover:bg-primary/10 hover:text-accent hover:shadow-[0_8px_30px_-6px_hsl(var(--primary)/0.4),inset_0_0_0_1px_hsl(var(--primary)/0.3)]",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/90 hover:shadow-[0_8px_24px_-6px_hsl(var(--secondary)/0.4)]",
        ghost:
          "text-primary hover:text-accent hover:bg-primary/8 hover:shadow-[0_4px_16px_-4px_hsl(var(--primary)/0.25)]",
        link:
          "text-primary underline-offset-4 hover:underline hover:text-accent rounded-none",
        luxury:
          "text-primary-foreground bg-[linear-gradient(135deg,hsl(var(--gold-bright))_0%,hsl(var(--primary))_50%,hsl(var(--gold-bright))_100%)] bg-[length:200%_100%] bg-[position:0%_50%] hover:bg-[position:100%_50%] shadow-[0_6px_28px_-6px_hsl(var(--primary)/0.45),inset_0_1px_0_hsl(var(--gold-bright)/0.7)] hover:shadow-[0_16px_50px_-10px_hsl(var(--primary)/0.7),inset_0_1px_0_hsl(var(--gold-bright)/0.9)]",
        hero:
          "text-base tracking-[0.22em] text-primary-foreground bg-[linear-gradient(135deg,hsl(var(--gold-bright))_0%,hsl(var(--primary))_50%,hsl(var(--gold-bright))_100%)] bg-[length:200%_100%] bg-[position:0%_50%] hover:bg-[position:100%_50%] shadow-[0_8px_32px_-6px_hsl(var(--primary)/0.5),inset_0_1px_0_hsl(var(--gold-bright)/0.7)] hover:shadow-[0_20px_60px_-10px_hsl(var(--primary)/0.75),inset_0_1px_0_hsl(var(--gold-bright)/0.9)]",
        champagne:
          "bg-champagne text-deep-black hover:bg-champagne/95 shadow-[0_4px_20px_-4px_hsl(var(--champagne)/0.3),inset_0_1px_0_hsl(0_0%_100%/0.4)] hover:shadow-[0_14px_44px_-8px_hsl(var(--champagne)/0.55),inset_0_1px_0_hsl(0_0%_100%/0.6)]",
        whatsapp:
          "bg-[#25D366] hover:bg-[#1FB855] text-white shadow-[0_4px_20px_-4px_#25D36680,inset_0_1px_0_#ffffff40] hover:shadow-[0_14px_44px_-8px_#25D366cc,inset_0_1px_0_#ffffff60]",
      },
      size: {
        default: "h-11 px-5 sm:px-7 py-2",
        sm: "h-9 px-4 sm:px-5 text-xs",
        lg: "h-13 px-6 sm:px-10 text-sm sm:text-base [height:3.25rem]",
        xl: "h-14 sm:h-16 px-6 sm:px-12 text-sm sm:text-lg",
        icon: "h-11 w-11",
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
