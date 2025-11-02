import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "../../lib/utils";

const Tabs = TabsPrimitive.Root;

interface TabsListProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> {
  variant?: "line" | "pills";
}

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  TabsListProps
>(function TabsList({ className, variant = "line", ...props }, ref) {
  return (
    <TabsPrimitive.List
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center text-muted-foreground",
        variant === "line" && "border-b border-border",
        variant === "pills" && "gap-2 p-1 bg-muted rounded-lg",
        className
      )}
      {...props}
    />
  );
});
TabsList.displayName = TabsPrimitive.List.displayName;

interface TabsTriggerProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> {
  variant?: "line" | "pills";
}

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  TabsTriggerProps
>(function TabsTrigger({ className, variant = "line", ...props }, ref) {
  return (
    <TabsPrimitive.Trigger
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        "disabled:pointer-events-none disabled:opacity-50",
        variant === "line" && [
          "px-4 py-2 border-b-2 border-transparent",
          "data-[state=active]:border-primary-600 dark:data-[state=active]:border-primary-500 data-[state=active]:text-primary-600 dark:data-[state=active]:text-primary-500",
          "hover:text-foreground hover:border-muted",
        ],
        variant === "pills" && [
          "px-4 py-2 rounded-md",
          "data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
          "hover:text-foreground",
        ],
        className
      )}
      {...props}
    />
  );
});
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(function TabsContent({ className, ...props }, ref) {
  return (
    <TabsPrimitive.Content
      ref={ref}
      className={cn(
        "mt-4 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        "data-[state=active]:animate-[fadeIn_0.3s_ease-out]",
        className
      )}
      {...props}
    />
  );
});
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
