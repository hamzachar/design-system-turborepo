import type { Meta, StoryObj } from "@storybook/react";
import { ThemeToggle } from "./ThemeToggle";
import { ThemeProvider } from "../ThemeProvider";

const meta = {
  title: "Components/ThemeToggle",
  component: ThemeToggle,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div className="p-8 rounded-lg bg-background">
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
  argTypes: {
    showLabel: {
      control: "boolean",
      description: "Show the theme label next to the icon",
      defaultValue: false,
    },
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
  },
} satisfies Meta<typeof ThemeToggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithLabel: Story = {
  args: {
    showLabel: true,
  },
};

export const CustomStyling: Story = {
  args: {
    className: "bg-primary-600 text-white hover:bg-primary-700",
  },
};

export const WithLabelAndCustomStyle: Story = {
  args: {
    showLabel: true,
    className: "border-2 border-primary-500",
  },
};

export const InNavbar: Story = {
  decorators: [
    (Story) => (
      <ThemeProvider>
        <nav className="flex items-center justify-between p-4 bg-card border-b border-border">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-bold text-foreground">My App</h1>
            <div className="flex gap-2">
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground px-3 py-2"
              >
                Home
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground px-3 py-2"
              >
                About
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground px-3 py-2"
              >
                Contact
              </a>
            </div>
          </div>
          <Story />
        </nav>
      </ThemeProvider>
    ),
  ],
  args: {
    showLabel: false,
  },
};

export const MultipleModes: Story = {
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div className="space-y-8">
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Click the button to cycle through: Light → Dark → System
            </p>
            <Story />
          </div>
          <div className="grid gap-4 p-6 bg-card rounded-lg border border-border">
            <h3 className="font-semibold text-foreground">Theme Demo</h3>
            <p className="text-muted-foreground">
              This card demonstrates how the theme affects different elements.
            </p>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-primary-600 text-white rounded hover:bg-primary-700">
                Primary Button
              </button>
              <button className="px-4 py-2 bg-accent text-accent-foreground rounded hover:bg-accent/80">
                Accent Button
              </button>
            </div>
          </div>
        </div>
      </ThemeProvider>
    ),
  ],
  args: {
    showLabel: true,
  },
};
