import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const skeletonVariants = cva("animate-pulse rounded bg-muted", {
  variants: {
    variant: {
      default: "bg-muted",
      light: "bg-muted/50",
      dark: "bg-muted/80 dark:bg-muted",
    },
    shape: {
      rectangle: "rounded",
      circle: "rounded-full",
      rounded: "rounded-lg",
    },
  },
  defaultVariants: {
    variant: "default",
    shape: "rectangle",
  },
});

export interface SkeletonProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof skeletonVariants> {
  width?: string | number;
  height?: string | number;
  count?: number;
  containerClassName?: string;
}

const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  (
    {
      className,
      variant,
      shape,
      width,
      height,
      count = 1,
      containerClassName,
      style,
      ...props
    },
    ref
  ) => {
    const skeletonStyle = {
      width: width,
      height: height,
      ...style,
    };

    if (count > 1) {
      return (
        <div className={cn("space-y-2", containerClassName)} ref={ref}>
          {Array.from({ length: count }).map((_, index) => (
            <div
              key={index}
              className={cn(skeletonVariants({ variant, shape }), className)}
              style={skeletonStyle}
              {...props}
            />
          ))}
        </div>
      );
    }

    return (
      <div
        ref={ref}
        className={cn(skeletonVariants({ variant, shape }), className)}
        style={skeletonStyle}
        {...props}
      />
    );
  }
);

Skeleton.displayName = "Skeleton";

// Predefined skeleton components for common use cases
const SkeletonText = React.forwardRef<
  HTMLDivElement,
  Omit<SkeletonProps, "shape">
>(({ className, ...props }, ref) => (
  <Skeleton
    ref={ref}
    shape="rounded"
    height="1rem"
    className={className}
    {...props}
  />
));
SkeletonText.displayName = "SkeletonText";

const SkeletonAvatar = React.forwardRef<
  HTMLDivElement,
  Omit<SkeletonProps, "shape">
>(({ className, width = "2.5rem", height = "2.5rem", ...props }, ref) => (
  <Skeleton
    ref={ref}
    shape="circle"
    width={width}
    height={height}
    className={className}
    {...props}
  />
));
SkeletonAvatar.displayName = "SkeletonAvatar";

const SkeletonButton = React.forwardRef<
  HTMLDivElement,
  Omit<SkeletonProps, "shape">
>(({ className, width = "6rem", height = "2.5rem", ...props }, ref) => (
  <Skeleton
    ref={ref}
    shape="rounded"
    width={width}
    height={height}
    className={className}
    {...props}
  />
));
SkeletonButton.displayName = "SkeletonButton";

const SkeletonCard = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("space-y-3 p-4", className)} {...props}>
      <Skeleton height="12rem" shape="rounded" />
      <div className="space-y-2">
        <Skeleton height="1.5rem" width="60%" />
        <Skeleton height="1rem" width="80%" />
        <Skeleton height="1rem" width="70%" />
      </div>
    </div>
  )
);
SkeletonCard.displayName = "SkeletonCard";

export {
  Skeleton,
  SkeletonText,
  SkeletonAvatar,
  SkeletonButton,
  SkeletonCard,
  skeletonVariants,
};
