import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const alertVariants = cva(
  "relative w-full rounded-lg border p-4 transition-all duration-200",
  {
    variants: {
      variant: {
        default: "bg-gray-50 text-gray-900 border-gray-200",
        primary: "bg-primary-50 text-primary-900 border-primary-200",
        success: "bg-success-50 text-success-900 border-success-200",
        warning: "bg-warning-50 text-warning-900 border-warning-200",
        error: "bg-error-50 text-error-900 border-error-200",
        info: "bg-primary-50 text-primary-900 border-primary-200",
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
      default: "text-gray-600",
      primary: "text-primary-600",
      success: "text-success-600",
      warning: "text-warning-600",
      error: "text-error-600",
      info: "text-primary-600",
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
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="10"
            cy="10"
            r="8"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M10 6V10"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle cx="10" cy="13" r="0.5" fill="currentColor" />
        </svg>
      ),
      primary: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="10"
            cy="10"
            r="8"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M10 6V10"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle cx="10" cy="13" r="0.5" fill="currentColor" />
        </svg>
      ),
      success: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="10"
            cy="10"
            r="8"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M7 10L9 12L13 8"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      warning: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 2L2 16H18L10 2Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10 8V11"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle cx="10" cy="14" r="0.5" fill="currentColor" />
        </svg>
      ),
      error: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="10"
            cy="10"
            r="8"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M12 8L8 12M8 8L12 12"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ),
      info: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="10"
            cy="10"
            r="8"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M10 10V14"
            stroke="currentColor"
            strokeWidth="1.5"
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
                "shrink-0 rounded-md p-1 transition-colors hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-offset-2",
                variant === "primary" && "focus:ring-primary-500",
                variant === "success" && "focus:ring-success-500",
                variant === "warning" && "focus:ring-warning-500",
                variant === "error" && "focus:ring-error-500",
                variant === "info" && "focus:ring-primary-500",
                variant === "default" && "focus:ring-gray-500"
              )}
              aria-label="Dismiss alert"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="opacity-70"
              >
                <path
                  d="M12 4L4 12M4 4L12 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
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
