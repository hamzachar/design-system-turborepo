import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "primary",
        "secondary",
        "success",
        "warning",
        "danger",
        "outline",
        "ghost",
        "link",
        "gradient",
      ],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg", "xl", "icon"],
    },
    animation: {
      control: "select",
      options: ["none", "bounce", "pulse"],
    },
    loading: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
    fullWidth: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Primary Button",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary Button",
    variant: "secondary",
  },
};

export const Success: Story = {
  args: {
    children: "Success Button",
    variant: "success",
  },
};

export const Warning: Story = {
  args: {
    children: "Warning Button",
    variant: "warning",
  },
};

export const Danger: Story = {
  args: {
    children: "Danger Button",
    variant: "danger",
  },
};

export const Outline: Story = {
  args: {
    children: "Outline Button",
    variant: "outline",
  },
};

export const Ghost: Story = {
  args: {
    children: "Ghost Button",
    variant: "ghost",
  },
};

export const Link: Story = {
  args: {
    children: "Link Button",
    variant: "link",
  },
};

export const Gradient: Story = {
  args: {
    children: "Gradient Button",
    variant: "gradient",
  },
};

export const Small: Story = {
  args: {
    children: "Small Button",
    size: "sm",
  },
};

export const Medium: Story = {
  args: {
    children: "Medium Button",
    size: "md",
  },
};

export const Large: Story = {
  args: {
    children: "Large Button",
    size: "lg",
  },
};

export const ExtraLarge: Story = {
  args: {
    children: "Extra Large Button",
    size: "xl",
  },
};

export const IconOnly: Story = {
  args: {
    children: "🚀",
    size: "icon",
  },
};

export const WithLeftIcon: Story = {
  args: {
    children: "Download",
    leftIcon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M8 11L4 7H7V3H9V7H12L8 11Z" fill="currentColor" />
        <path d="M3 13H13V14H3V13Z" fill="currentColor" />
      </svg>
    ),
  },
};

export const WithRightIcon: Story = {
  args: {
    children: "Continue",
    rightIcon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 3L10 8L6 13"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    variant: "secondary",
  },
};

export const WithBounceAnimation: Story = {
  args: {
    children: "Hover to Bounce",
    animation: "bounce",
  },
};

export const WithPulseAnimation: Story = {
  args: {
    children: "Hover to Pulse",
    animation: "pulse",
    variant: "secondary",
  },
};

export const Loading: Story = {
  args: {
    children: "Loading",
    loading: true,
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled",
    disabled: true,
  },
};

export const FullWidth: Story = {
  args: {
    children: "Full Width Button",
    fullWidth: true,
  },
  decorators: [
    (Story) => (
      <div style={{ width: "400px" }}>
        <Story />
      </div>
    ),
  ],
};

export const AllVariants: Story = {
  render: () => (
    <div
      className="flex flex-col gap-4 p-8 bg-gray-50 rounded-lg"
      style={{ width: "700px" }}
    >
      <h3 className="text-xl font-bold text-gray-900">All Button Variants</h3>
      <div className="flex flex-wrap gap-3">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="success">Success</Button>
        <Button variant="warning">Warning</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
        <Button variant="gradient">Gradient</Button>
      </div>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-8 bg-gray-50 rounded-lg">
      <h3 className="text-xl font-bold text-gray-900">All Button Sizes</h3>
      <div className="flex flex-wrap items-center gap-3">
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
        <Button size="xl">Extra Large</Button>
        <Button size="icon">🎨</Button>
      </div>
    </div>
  ),
};

export const RealWorldExamples: Story = {
  render: () => (
    <div
      className="space-y-8 p-8 bg-white rounded-lg"
      style={{ width: "600px" }}
    >
      <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-900">
          Form Actions
        </h3>
        <div className="flex gap-3">
          <Button variant="primary" size="lg">
            Save Changes
          </Button>
          <Button variant="outline" size="lg">
            Cancel
          </Button>
          <Button variant="danger" size="lg">
            Delete
          </Button>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-900">
          Call to Action
        </h3>
        <div className="flex gap-3">
          <Button variant="gradient" size="xl" leftIcon="🚀">
            Get Started Free
          </Button>
          <Button variant="outline" size="xl">
            Learn More
          </Button>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-900">
          Loading States
        </h3>
        <div className="flex gap-3">
          <Button loading>Processing</Button>
          <Button variant="secondary" loading>
            Uploading
          </Button>
          <Button variant="success" loading>
            Saving
          </Button>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-900">
          With Animations
        </h3>
        <div className="flex gap-3">
          <Button animation="pulse" variant="success">
            Hover Me (Pulse)
          </Button>
          <Button animation="bounce" variant="warning">
            Hover Me (Bounce)
          </Button>
        </div>
      </div>
    </div>
  ),
};
