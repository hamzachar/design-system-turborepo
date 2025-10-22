import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";

const meta = {
  title: "Components/Badge",
  component: Badge,
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
        "error",
        "gray",
        "outline",
      ],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    bordered: {
      control: "boolean",
    },
    dot: {
      control: "boolean",
    },
    removable: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Primary",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary",
    variant: "secondary",
  },
};

export const Success: Story = {
  args: {
    children: "Success",
    variant: "success",
  },
};

export const Warning: Story = {
  args: {
    children: "Warning",
    variant: "warning",
  },
};

export const Error: Story = {
  args: {
    children: "Error",
    variant: "error",
  },
};

export const Gray: Story = {
  args: {
    children: "Gray",
    variant: "gray",
  },
};

export const Outline: Story = {
  args: {
    children: "Outline",
    variant: "outline",
  },
};

export const Small: Story = {
  args: {
    children: "Small",
    size: "sm",
  },
};

export const Medium: Story = {
  args: {
    children: "Medium",
    size: "md",
  },
};

export const Large: Story = {
  args: {
    children: "Large",
    size: "lg",
  },
};

export const WithBorder: Story = {
  args: {
    children: "Bordered",
    bordered: true,
  },
};

export const WithDot: Story = {
  args: {
    children: "Online",
    variant: "success",
    dot: true,
  },
};

export const Removable: Story = {
  args: {
    children: "Removable",
    removable: true,
    onRemove: () => alert("Badge removed!"),
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3 p-8">
      <Badge variant="primary">Primary</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="error">Error</Badge>
      <Badge variant="gray">Gray</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3 p-8">
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
    </div>
  ),
};

export const WithBorders: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3 p-8">
      <Badge variant="primary" bordered>
        Primary
      </Badge>
      <Badge variant="secondary" bordered>
        Secondary
      </Badge>
      <Badge variant="success" bordered>
        Success
      </Badge>
      <Badge variant="warning" bordered>
        Warning
      </Badge>
      <Badge variant="error" bordered>
        Error
      </Badge>
      <Badge variant="gray" bordered>
        Gray
      </Badge>
    </div>
  ),
};

export const WithDots: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3 p-8">
      <Badge variant="primary" dot>
        Active
      </Badge>
      <Badge variant="success" dot>
        Online
      </Badge>
      <Badge variant="warning" dot>
        Away
      </Badge>
      <Badge variant="error" dot>
        Busy
      </Badge>
      <Badge variant="gray" dot>
        Offline
      </Badge>
    </div>
  ),
};

export const RemovableBadges: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3 p-8">
      <Badge
        variant="primary"
        removable
        onRemove={() => console.log("Removed")}
      >
        React
      </Badge>
      <Badge
        variant="secondary"
        removable
        onRemove={() => console.log("Removed")}
      >
        TypeScript
      </Badge>
      <Badge
        variant="success"
        removable
        onRemove={() => console.log("Removed")}
      >
        Tailwind
      </Badge>
      <Badge
        variant="warning"
        removable
        onRemove={() => console.log("Removed")}
      >
        JavaScript
      </Badge>
    </div>
  ),
};

export const StatusBadges: Story = {
  render: () => (
    <div
      className="flex flex-col gap-4 p-8 bg-white rounded-lg"
      style={{ width: "400px" }}
    >
      <h3 className="text-lg font-semibold text-gray-900">User Statuses</h3>
      <div className="space-y-3">
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <span className="text-gray-700">John Doe</span>
          <Badge variant="success" dot size="sm">
            Online
          </Badge>
        </div>
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <span className="text-gray-700">Jane Smith</span>
          <Badge variant="warning" dot size="sm">
            Away
          </Badge>
        </div>
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <span className="text-gray-700">Bob Johnson</span>
          <Badge variant="error" dot size="sm">
            Busy
          </Badge>
        </div>
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <span className="text-gray-700">Alice Williams</span>
          <Badge variant="gray" dot size="sm">
            Offline
          </Badge>
        </div>
      </div>
    </div>
  ),
};

export const TagsExample: Story = {
  render: () => (
    <div
      className="flex flex-col gap-4 p-8 bg-white rounded-lg"
      style={{ width: "500px" }}
    >
      <h3 className="text-lg font-semibold text-gray-900">Article Tags</h3>
      <div className="flex flex-wrap gap-2">
        <Badge variant="primary" removable>
          React
        </Badge>
        <Badge variant="primary" removable>
          TypeScript
        </Badge>
        <Badge variant="secondary" removable>
          Web Development
        </Badge>
        <Badge variant="secondary" removable>
          Frontend
        </Badge>
        <Badge variant="success" removable>
          Tutorial
        </Badge>
        <Badge variant="gray" removable>
          Beginner
        </Badge>
      </div>
    </div>
  ),
};

export const NotificationBadges: Story = {
  render: () => (
    <div className="flex gap-6 p-8">
      <div className="relative">
        <button className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <Badge variant="error" size="sm" className="absolute -top-1 -right-1">
          3
        </Badge>
      </div>

      <div className="relative">
        <button className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="3"
              y="5"
              width="18"
              height="14"
              rx="2"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M3 7L12 13L21 7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <Badge variant="primary" size="sm" className="absolute -top-1 -right-1">
          12
        </Badge>
      </div>

      <div className="relative">
        <button className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle
              cx="12"
              cy="7"
              r="4"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </button>
        <Badge
          variant="success"
          dot
          size="sm"
          className="absolute top-0 right-0"
        />
      </div>
    </div>
  ),
};
