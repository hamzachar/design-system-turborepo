import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const avatarVariants = cva(
  "relative inline-flex items-center justify-center overflow-hidden rounded-full bg-muted shrink-0 select-none",
  {
    variants: {
      size: {
        xs: "h-6 w-6 text-xs",
        sm: "h-8 w-8 text-sm",
        md: "h-10 w-10 text-base",
        lg: "h-12 w-12 text-lg",
        xl: "h-16 w-16 text-xl",
        xxl: "h-24 w-24 text-3xl",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
type AvatarStatus = "online" | "offline" | "away" | "busy";

export interface AvatarProps
  extends Omit<
    React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>,
    "size"
  > {
  size?: AvatarSize;
  src?: string;
  alt?: string;
  fallback?: string;
  status?: AvatarStatus;
  delayMs?: number;
}

const statusColorsMap: Record<AvatarStatus, string> = {
  online: "bg-success-500",
  offline: "bg-muted-foreground",
  away: "bg-warning-500",
  busy: "bg-error-500",
};

const statusSizesMap: Record<AvatarSize, string> = {
  xs: "h-1.5 w-1.5 border",
  sm: "h-2 w-2 border",
  md: "h-2.5 w-2.5 border-2",
  lg: "h-3 w-3 border-2",
  xl: "h-4 w-4 border-2",
  xxl: "h-5 w-5 border-2",
};

const Avatar = React.forwardRef<HTMLSpanElement, AvatarProps>(
  (
    {
      className,
      size = "md",
      src,
      alt,
      fallback,
      status,
      delayMs = 600,
      ...props
    },
    ref
  ) => {
    const initials = React.useMemo(() => {
      if (fallback) return fallback;
      if (alt) {
        return alt
          .split(" ")
          .map((n) => n[0])
          .join("")
          .toUpperCase()
          .slice(0, 2);
      }
      return "?";
    }, [fallback, alt]);

    const altText = alt || "Avatar";

    return (
      <AvatarPrimitive.Root
        ref={ref}
        className={cn(avatarVariants({ size }), "relative", className)}
        {...props}
      >
        <AvatarPrimitive.Image
          src={src}
          alt={altText}
          className="h-full w-full object-cover rounded-full"
        />
        <AvatarPrimitive.Fallback
          className="flex h-full w-full items-center justify-center rounded-full bg-muted font-medium text-muted-foreground uppercase"
          delayMs={delayMs}
        >
          {initials}
        </AvatarPrimitive.Fallback>
        {status && (
          <span
            className={cn(
              "absolute bottom-0 right-0 rounded-full border-2 border-background",
              statusColorsMap[status],
              statusSizesMap[size]
            )}
            aria-label={`Status: ${status}`}
          />
        )}
      </AvatarPrimitive.Root>
    );
  }
);

Avatar.displayName = "Avatar";

export { Avatar, avatarVariants };
