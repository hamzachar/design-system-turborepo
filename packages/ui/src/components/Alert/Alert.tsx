import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";
import { svgSizes, sizes } from "../../tokens/spacing";

const alertVariants = cva(
  "relative w-full rounded-lg border p-4 transition-all duration-200",
  {
    variants: {
      variant: {
        default: "bg-muted text-foreground border-border",
        primary:
          "bg-primary-50 dark:bg-primary-950 text-primary-900 dark:text-primary-100 border-primary-200 dark:border-primary-800",
        success:
          "bg-success-50 dark:bg-success-950 text-success-900 dark:text-success-100 border-success-200 dark:border-success-800",
        warning:
          "bg-warning-50 dark:bg-warning-950 text-warning-900 dark:text-warning-100 border-warning-200 dark:border-warning-800",
        error:
          "bg-error-50 dark:bg-error-950 text-error-900 dark:text-error-100 border-error-200 dark:border-error-800",
        info: "bg-primary-50 dark:bg-primary-950 text-primary-900 dark:text-primary-100 border-primary-200 dark:border-primary-800",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const alertIconVariants = cva("shrink-0", {
  variants: {
    variant: {
      default: "text-muted-foreground",
      primary: "text-primary-600 dark:text-primary-400",
      success: "text-success-600 dark:text-success-400",
      warning: "text-warning-600 dark:text-warning-400",
      error: "text-error-600 dark:text-error-400",
      info: "text-primary-600 dark:text-primary-400",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  icon?: React.ReactNode;
  dismissible?: boolean;
  onDismiss?: () => void;
}

export interface AlertTitleProps
  extends React.HTMLAttributes<HTMLHeadingElement> {}

export interface AlertDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  (
    { className, variant, icon, dismissible, onDismiss, children, ...props },
    ref
  ) => {
    const [isVisible, setIsVisible] = React.useState(true);

    const handleDismiss = () => {
      setIsVisible(false);
      onDismiss?.();
    };

    if (!isVisible) return null;

    const defaultIcons = {
      default: (
        <svg
          width={svgSizes.icon.md}
          height={svgSizes.icon.md}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="10"
            cy="10"
            r="8"
            stroke="currentColor"
            strokeWidth={sizes.stroke.default}
          />
          <path
            d="M10 6V10"
            stroke="currentColor"
            strokeWidth={sizes.stroke.default}
            strokeLinecap="round"
          />
          <circle cx="10" cy="13" r="0.5" fill="currentColor" />
        </svg>
      ),
      primary: (
        <svg
          width={svgSizes.icon.md}
          height={svgSizes.icon.md}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="10"
            cy="10"
            r="8"
            stroke="currentColor"
            strokeWidth={sizes.stroke.default}
          />
          <path
            d="M10 6V10"
            stroke="currentColor"
            strokeWidth={sizes.stroke.default}
            strokeLinecap="round"
          />
          <circle cx="10" cy="13" r="0.5" fill="currentColor" />
        </svg>
      ),
      success: (
        <svg
          width={svgSizes.icon.md}
          height={svgSizes.icon.md}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="10"
            cy="10"
            r="8"
            stroke="currentColor"
            strokeWidth={sizes.stroke.default}
          />
          <path
            d="M7 10L9 12L13 8"
            stroke="currentColor"
            strokeWidth={sizes.stroke.default}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      warning: (
        <svg
          width={svgSizes.icon.md}
          height={svgSizes.icon.md}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 2L2 16H18L10 2Z"
            stroke="currentColor"
            strokeWidth={sizes.stroke.default}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10 8V11"
            stroke="currentColor"
            strokeWidth={sizes.stroke.default}
            strokeLinecap="round"
          />
          <circle cx="10" cy="14" r="0.5" fill="currentColor" />
        </svg>
      ),
      error: (
        <svg
          width={svgSizes.icon.md}
          height={svgSizes.icon.md}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="10"
            cy="10"
            r="8"
            stroke="currentColor"
            strokeWidth={sizes.stroke.default}
          />
          <path
            d="M12 8L8 12M8 8L12 12"
            stroke="currentColor"
            strokeWidth={sizes.stroke.default}
            strokeLinecap="round"
          />
        </svg>
      ),
      info: (
        <svg
          width={svgSizes.icon.md}
          height={svgSizes.icon.md}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="10"
            cy="10"
            r="8"
            stroke="currentColor"
            strokeWidth={sizes.stroke.default}
          />
          <path
            d="M10 10V14"
            stroke="currentColor"
            strokeWidth={sizes.stroke.default}
            strokeLinecap="round"
          />
          <circle cx="10" cy="7" r="0.5" fill="currentColor" />
        </svg>
      ),
    };

    const displayIcon =
      icon !== undefined ? icon : defaultIcons[variant || "default"];

    return (
      <div
        ref={ref}
        role="alert"
        className={cn(
          alertVariants({ variant }),
          "animate-[slideIn_0.2s_ease-out]",
          className
        )}
        {...props}
      >
        <div className="flex gap-3">
          {displayIcon && (
            <div className={cn(alertIconVariants({ variant }))}>
              {displayIcon}
            </div>
          )}
          <div className="flex-1 space-y-1">{children}</div>
          {dismissible && (
            <button
              type="button"
              onClick={handleDismiss}
              className={cn(
                "shrink-0 rounded-md p-1 transition-colors hover:bg-accent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring",
                variant === "primary" && "focus:ring-primary-500",
                variant === "success" && "focus:ring-success-500",
                variant === "warning" && "focus:ring-warning-500",
                variant === "error" && "focus:ring-error-500",
                variant === "info" && "focus:ring-primary-500"
              )}
              aria-label="Dismiss alert"
            >
              <svg
                width={svgSizes.icon.sm}
                height={svgSizes.icon.sm}
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="opacity-70"
              >
                <path
                  d="M12 4L4 12M4 4L12 12"
                  stroke="currentColor"
                  strokeWidth={sizes.stroke.default}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    );
  }
);
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef<HTMLHeadingElement, AlertTitleProps>(
  ({ className, ...props }, ref) => (
    <h5
      ref={ref}
      className={cn("font-semibold leading-none tracking-tight", className)}
      {...props}
    />
  )
);
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  AlertDescriptionProps
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm opacity-90 [&_p]:leading-relaxed", className)}
    {...props}
  />
));
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertTitle, AlertDescription, alertVariants };
