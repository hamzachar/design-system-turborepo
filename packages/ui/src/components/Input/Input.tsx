import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const inputVariants = cva(
  "w-full rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 disabled:bg-muted",
  {
    variants: {
      variant: {
        default:
          "border-input bg-background text-foreground placeholder:text-muted-foreground focus:border-ring focus:ring-ring",
        error:
          "border-error-500 bg-background text-foreground placeholder:text-muted-foreground focus:border-error-500 focus:ring-error-500",
        success:
          "border-success-500 bg-background text-foreground placeholder:text-muted-foreground focus:border-success-500 focus:ring-success-500",
        warning:
          "border-warning-500 bg-background text-foreground placeholder:text-muted-foreground focus:border-warning-500 focus:ring-warning-500",
      },
      size: {
        sm: "h-8 px-3 py-1.5 text-sm",
        md: "h-10 px-4 py-2 text-base",
        lg: "h-12 px-5 py-2.5 text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      variant,
      size,
      label,
      error,
      helperText,
      leftIcon,
      rightIcon,
      fullWidth = false,
      disabled,
      id,
      ...props
    },
    ref
  ) => {
    const inputId = id || `input-${React.useId()}`;
    const hasError = !!error;
    const finalVariant = hasError ? "error" : variant;

    return (
      <div
        className={cn("flex flex-col gap-1.5", fullWidth ? "w-full" : "w-auto")}
      >
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium text-foreground"
          >
            {label}
          </label>
        )}

        <div className="relative">
          {leftIcon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none">
              {leftIcon}
            </div>
          )}

          <input
            ref={ref}
            id={inputId}
            disabled={disabled}
            className={cn(
              inputVariants({ variant: finalVariant, size }),
              leftIcon && "pl-10",
              rightIcon && "pr-10",
              className
            )}
            aria-invalid={hasError}
            aria-describedby={
              error
                ? `${inputId}-error`
                : helperText
                  ? `${inputId}-helper`
                  : undefined
            }
            {...props}
          />

          {rightIcon && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none">
              {rightIcon}
            </div>
          )}
        </div>

        {error && (
          <p
            id={`${inputId}-error`}
            className="text-sm text-error-600 font-medium"
            role="alert"
          >
            {error}
          </p>
        )}

        {helperText && !error && (
          <p id={`${inputId}-helper`} className="text-sm text-muted-foreground">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input, inputVariants };
