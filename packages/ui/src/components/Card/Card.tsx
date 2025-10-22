import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const cardVariants = cva("rounded-xl transition-all duration-200", {
  variants: {
    variant: {
      elevated: "bg-white shadow-lg hover:shadow-xl",
      outlined: "bg-white border-2 border-gray-200 hover:border-gray-300",
      flat: "bg-gray-50 hover:bg-gray-100",
      ghost: "bg-transparent hover:bg-gray-50",
    },
    padding: {
      none: "p-0",
      sm: "p-4",
      md: "p-6",
      lg: "p-8",
    },
    interactive: {
      true: "cursor-pointer active:scale-[0.98]",
      false: "",
    },
  },
  defaultVariants: {
    variant: "elevated",
    padding: "md",
    interactive: false,
  },
});

const cardHeaderVariants = cva("flex flex-col gap-1.5", {
  variants: {
    padding: {
      none: "p-0",
      sm: "p-4 pb-3",
      md: "p-6 pb-4",
      lg: "p-8 pb-6",
    },
  },
  defaultVariants: {
    padding: "md",
  },
});

const cardContentVariants = cva("", {
  variants: {
    padding: {
      none: "p-0",
      sm: "p-4 pt-0",
      md: "p-6 pt-0",
      lg: "p-8 pt-0",
    },
  },
  defaultVariants: {
    padding: "md",
  },
});

const cardFooterVariants = cva("flex items-center", {
  variants: {
    padding: {
      none: "p-0",
      sm: "p-4 pt-3",
      md: "p-6 pt-4",
      lg: "p-8 pt-6",
    },
  },
  defaultVariants: {
    padding: "md",
  },
});

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

export interface CardHeaderProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardHeaderVariants> {}

export interface CardContentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardContentVariants> {}

export interface CardFooterProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardFooterVariants> {}

export interface CardTitleProps
  extends React.HTMLAttributes<HTMLHeadingElement> {}

export interface CardDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, padding, interactive, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardVariants({ variant, padding, interactive }), className)}
      {...props}
    />
  )
);
Card.displayName = "Card";

const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, padding, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardHeaderVariants({ padding }), className)}
      {...props}
    />
  )
);
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn(
        "text-2xl font-bold leading-tight text-gray-900",
        className
      )}
      {...props}
    />
  )
);
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  CardDescriptionProps
>(({ className, ...props }, ref) => (
  <p ref={ref} className={cn("text-sm text-gray-600", className)} {...props} />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, padding, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardContentVariants({ padding }), className)}
      {...props}
    />
  )
);
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, padding, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardFooterVariants({ padding }), className)}
      {...props}
    />
  )
);
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
  cardVariants,
};
