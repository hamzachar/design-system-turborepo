import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "error", "success", "warning"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    disabled: {
      control: "boolean",
    },
    fullWidth: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Enter text...",
  },
};

export const WithLabel: Story = {
  args: {
    label: "Email Address",
    placeholder: "john@example.com",
    type: "email",
  },
};

export const WithHelperText: Story = {
  args: {
    label: "Username",
    placeholder: "johndoe",
    helperText: "Choose a unique username",
  },
};

export const WithError: Story = {
  args: {
    label: "Email",
    placeholder: "john@example.com",
    error: "This email is already taken",
    defaultValue: "john@example.com",
  },
};

export const Success: Story = {
  args: {
    label: "Email",
    variant: "success",
    placeholder: "john@example.com",
    defaultValue: "john@example.com",
    helperText: "Email is available!",
  },
};

export const Warning: Story = {
  args: {
    label: "Password",
    variant: "warning",
    type: "password",
    helperText: "Password strength: Weak",
    defaultValue: "pass",
  },
};

export const WithLeftIcon: Story = {
  args: {
    label: "Search",
    placeholder: "Search...",
    leftIcon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 12C9.76142 12 12 9.76142 12 7C12 4.23858 9.76142 2 7 2C4.23858 2 2 4.23858 2 7C2 9.76142 4.23858 12 7 12Z"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M10.5 10.5L14 14"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
};

export const WithRightIcon: Story = {
  args: {
    label: "Password",
    type: "password",
    placeholder: "Enter password",
    rightIcon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 3C4.5 3 2 8 2 8C2 8 4.5 13 8 13C11.5 13 14 8 14 8C14 8 11.5 3 8 3Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle cx="8" cy="8" r="2" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    placeholder: "Small input",
  },
};

export const Medium: Story = {
  args: {
    size: "md",
    placeholder: "Medium input",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    placeholder: "Large input",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Input",
    placeholder: "Cannot edit",
    disabled: true,
    defaultValue: "Disabled value",
  },
};

export const FullWidth: Story = {
  args: {
    label: "Full Width Input",
    placeholder: "Takes full width of container",
    fullWidth: true,
  },
  decorators: [
    (Story) => (
      <div style={{ width: "500px" }}>
        <Story />
      </div>
    ),
  ],
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4" style={{ width: "400px" }}>
      <Input size="sm" placeholder="Small" label="Small Size" />
      <Input size="md" placeholder="Medium" label="Medium Size" />
      <Input size="lg" placeholder="Large" label="Large Size" />
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4" style={{ width: "400px" }}>
      <Input
        variant="default"
        placeholder="Default"
        label="Default"
        defaultValue="Default variant"
      />
      <Input
        variant="success"
        placeholder="Success"
        label="Success"
        defaultValue="Success variant"
      />
      <Input
        variant="warning"
        placeholder="Warning"
        label="Warning"
        defaultValue="Warning variant"
      />
      <Input
        variant="error"
        placeholder="Error"
        label="Error"
        error="Error message"
        defaultValue="Error variant"
      />
    </div>
  ),
};

export const FormExample: Story = {
  render: () => (
    <div
      className="space-y-6 p-8 bg-white rounded-lg"
      style={{ width: "500px" }}
    >
      <h3 className="text-2xl font-bold text-gray-900">Sign Up Form</h3>

      <Input
        label="Full Name"
        placeholder="John Doe"
        helperText="Enter your first and last name"
      />

      <Input
        label="Email Address"
        type="email"
        placeholder="john@example.com"
        leftIcon={
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M2 4L8 9L14 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <rect
              x="2"
              y="3"
              width="12"
              height="10"
              rx="1"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
        }
      />

      <Input
        label="Password"
        type="password"
        placeholder="••••••••"
        helperText="Must be at least 8 characters"
        rightIcon={
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M8 3C4.5 3 2 8 2 8C2 8 4.5 13 8 13C11.5 13 14 8 14 8C14 8 11.5 3 8 3Z"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <circle
              cx="8"
              cy="8"
              r="2"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
        }
      />

      <Input
        label="Phone Number"
        type="tel"
        placeholder="+1 (555) 000-0000"
        leftIcon="📱"
      />
    </div>
  ),
};
