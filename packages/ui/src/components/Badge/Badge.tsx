import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1 font-semibold transition-all duration-200 select-none",
  {
    variants: {
      variant: {
        primary: "bg-primary-100 text-primary-700 border-primary-200",
        secondary: "bg-secondary-100 text-secondary-700 border-secondary-200",
        success: "bg-success-100 text-success-700 border-success-200",
        warning: "bg-warning-100 text-warning-700 border-warning-200",
        error: "bg-error-100 text-error-700 border-error-200",
        gray: "bg-gray-100 text-gray-700 border-gray-200",
        outline: "bg-transparent text-gray-700 border-gray-300",
      },
      size: {
        sm: "px-2 py-0.5 text-xs rounded",
        md: "px-2.5 py-1 text-sm rounded-md",
        lg: "px-3 py-1.5 text-base rounded-lg",
      },
      bordered: {
        true: "border",
        false: "",
      },
      dot: {
        true: "",
        false: "",
      },
      removable: {
        true: "pr-1",
        false: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      bordered: false,
      dot: false,
      removable: false,
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  onRemove?: () => void;
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      className,
      variant,
      size,
      bordered,
      dot,
      removable,
      onRemove,
      children,
      ...props
    },
    ref
  ) => {
    const isRemovable = removable || !!onRemove;

    return (
      <span
        ref={ref}
        className={cn(
          badgeVariants({
            variant,
            size,
            bordered,
            dot,
            removable: isRemovable,
          }),
          className
        )}
        {...props}
      >
        {dot && (
          <span
            className={cn(
              "h-1.5 w-1.5 rounded-full",
              variant === "primary" && "bg-primary-500",
              variant === "secondary" && "bg-secondary-500",
              variant === "success" && "bg-success-500",
              variant === "warning" && "bg-warning-500",
              variant === "error" && "bg-error-500",
              variant === "gray" && "bg-gray-500",
              variant === "outline" && "bg-gray-500"
            )}
            aria-hidden="true"
          />
        )}
        {children}
        {isRemovable && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onRemove?.();
            }}
            className={cn(
              "ml-0.5 rounded-full p-0.5 hover:bg-black/10 focus:outline-none focus:ring-2 focus:ring-offset-1",
              variant === "primary" && "focus:ring-primary-500",
              variant === "secondary" && "focus:ring-secondary-500",
              variant === "success" && "focus:ring-success-500",
              variant === "warning" && "focus:ring-warning-500",
              variant === "error" && "focus:ring-error-500",
              variant === "gray" && "focus:ring-gray-500",
              variant === "outline" && "focus:ring-gray-500"
            )}
            aria-label="Remove"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 3L3 9M3 3L9 9"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}
      </span>
    );
  }
);

Badge.displayName = "Badge";

export { Badge, badgeVariants };
