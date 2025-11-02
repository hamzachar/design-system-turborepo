import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";
import { sizes } from "../../tokens/spacing";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60 disabled:cursor-not-allowed active:scale-[0.98] select-none",
  {
    variants: {
      variant: {
        primary:
          "bg-primary-600 text-white shadow-sm hover:bg-primary-700 hover:shadow-md focus-visible:ring-primary-500 active:bg-primary-800 dark:bg-primary-500 dark:hover:bg-primary-600 dark:active:bg-primary-700",
        secondary:
          "bg-secondary-600 text-white shadow-sm hover:bg-secondary-700 hover:shadow-md focus-visible:ring-secondary-500 active:bg-secondary-800 dark:bg-secondary-500 dark:hover:bg-secondary-600 dark:active:bg-secondary-700",
        success:
          "bg-success-600 text-white shadow-sm hover:bg-success-700 hover:shadow-md focus-visible:ring-success-500 active:bg-success-800 dark:bg-success-500 dark:hover:bg-success-600 dark:active:bg-success-700",
        warning:
          "bg-warning-600 text-white shadow-sm hover:bg-warning-700 hover:shadow-md focus-visible:ring-warning-500 active:bg-warning-800 dark:bg-warning-500 dark:hover:bg-warning-600 dark:active:bg-warning-700",
        danger:
          "bg-error-600 text-white shadow-sm hover:bg-error-700 hover:shadow-md focus-visible:ring-error-500 active:bg-error-800 dark:bg-error-500 dark:hover:bg-error-600 dark:active:bg-error-700",
        outline:
          "border-2 border-border bg-background text-foreground hover:bg-accent hover:text-accent-foreground focus-visible:ring-ring active:bg-accent/80",
        ghost:
          "bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground focus-visible:ring-ring",
        link: "bg-transparent text-primary-600 underline-offset-4 hover:underline hover:text-primary-700 focus-visible:ring-primary-400 dark:text-primary-400 dark:hover:text-primary-300",
        gradient:
          "bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-lg hover:shadow-xl hover:from-primary-700 hover:to-secondary-700 focus-visible:ring-primary-500",
      },
      size: {
        sm: "h-8 px-3 text-xs rounded-md gap-1.5",
        md: "h-10 px-4 py-2 text-sm gap-2",
        lg: "h-12 px-6 py-2.5 text-base gap-2",
        xl: "h-14 px-8 py-3 text-lg gap-2.5",
        icon: "h-10 w-10 p-0",
      },
      fullWidth: {
        true: "w-full",
        false: "w-auto",
      },
      animation: {
        none: "",
        bounce: "hover:animate-bounce",
        pulse: "hover:animate-pulse",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      fullWidth: false,
      animation: "none",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      fullWidth,
      animation,
      loading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <button
        className={cn(
          buttonVariants({ variant, size, fullWidth, animation, className })
        )}
        ref={ref}
        disabled={disabled || loading}
        aria-busy={loading}
        {...props}
      >
        {loading ? (
          <>
            <svg
              className="animate-spin h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth={sizes.stroke.extraBold}
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            <span>Loading...</span>
          </>
        ) : (
          <>
            {leftIcon && (
              <span className="shrink-0" aria-hidden="true">
                {leftIcon}
              </span>
            )}
            {children}
            {rightIcon && (
              <span className="shrink-0" aria-hidden="true">
                {rightIcon}
              </span>
            )}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
