import type { Meta, StoryObj } from "@storybook/react";
import { Progress, CircularProgress } from "./Progress";

const meta = {
  title: "Components/Progress",
  component: Progress,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "primary",
        "secondary",
        "success",
        "warning",
        "error",
        "gradient",
      ],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    value: {
      control: { type: "range", min: 0, max: 100, step: 1 },
    },
    animated: {
      control: "boolean",
    },
    showLabel: {
      control: "boolean",
    },
    striped: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 50,
  },
  decorators: [
    (Story) => (
      <div style={{ width: "400px" }}>
        <Story />
      </div>
    ),
  ],
};

export const Primary: Story = {
  args: {
    value: 60,
    variant: "primary",
  },
  decorators: [
    (Story) => (
      <div style={{ width: "400px" }}>
        <Story />
      </div>
    ),
  ],
};

export const Success: Story = {
  args: {
    value: 75,
    variant: "success",
  },
  decorators: [
    (Story) => (
      <div style={{ width: "400px" }}>
        <Story />
      </div>
    ),
  ],
};

export const Warning: Story = {
  args: {
    value: 40,
    variant: "warning",
  },
  decorators: [
    (Story) => (
      <div style={{ width: "400px" }}>
        <Story />
      </div>
    ),
  ],
};

export const Error: Story = {
  args: {
    value: 25,
    variant: "error",
  },
  decorators: [
    (Story) => (
      <div style={{ width: "400px" }}>
        <Story />
      </div>
    ),
  ],
};

export const Gradient: Story = {
  args: {
    value: 80,
    variant: "gradient",
  },
  decorators: [
    (Story) => (
      <div style={{ width: "400px" }}>
        <Story />
      </div>
    ),
  ],
};

export const WithLabel: Story = {
  args: {
    value: 65,
    showLabel: true,
    label: "Uploading",
  },
  decorators: [
    (Story) => (
      <div style={{ width: "400px" }}>
        <Story />
      </div>
    ),
  ],
};

export const Animated: Story = {
  args: {
    value: 45,
    animated: true,
  },
  decorators: [
    (Story) => (
      <div style={{ width: "400px" }}>
        <Story />
      </div>
    ),
  ],
};

export const Striped: Story = {
  args: {
    value: 70,
    striped: true,
  },
  decorators: [
    (Story) => (
      <div style={{ width: "400px" }}>
        <Story />
      </div>
    ),
  ],
};

export const StripedAnimated: Story = {
  args: {
    value: 55,
    striped: true,
    animated: true,
    variant: "success",
  },
  decorators: [
    (Story) => (
      <div style={{ width: "400px" }}>
        <Story />
      </div>
    ),
  ],
};

export const Small: Story = {
  args: {
    value: 60,
    size: "sm",
  },
  decorators: [
    (Story) => (
      <div style={{ width: "400px" }}>
        <Story />
      </div>
    ),
  ],
};

export const Medium: Story = {
  args: {
    value: 60,
    size: "md",
  },
  decorators: [
    (Story) => (
      <div style={{ width: "400px" }}>
        <Story />
      </div>
    ),
  ],
};

export const Large: Story = {
  args: {
    value: 60,
    size: "lg",
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
    <div className="space-y-6 p-8" style={{ width: "500px" }}>
      <Progress value={30} variant="primary" showLabel label="Primary" />
      <Progress value={50} variant="secondary" showLabel label="Secondary" />
      <Progress value={70} variant="success" showLabel label="Success" />
      <Progress value={40} variant="warning" showLabel label="Warning" />
      <Progress value={20} variant="error" showLabel label="Error" />
      <Progress value={85} variant="gradient" showLabel label="Gradient" />
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="space-y-6 p-8" style={{ width: "500px" }}>
      <div>
        <p className="text-sm text-gray-600 mb-2">Small</p>
        <Progress value={60} size="sm" />
      </div>
      <div>
        <p className="text-sm text-gray-600 mb-2">Medium</p>
        <Progress value={60} size="md" />
      </div>
      <div>
        <p className="text-sm text-gray-600 mb-2">Large</p>
        <Progress value={60} size="lg" />
      </div>
    </div>
  ),
};

export const CircularDefault: Story = {
  render: () => <CircularProgress value={65} showLabel />,
};

export const CircularVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-8 p-8">
      <CircularProgress value={30} variant="primary" showLabel />
      <CircularProgress value={50} variant="secondary" showLabel />
      <CircularProgress value={75} variant="success" showLabel />
      <CircularProgress value={45} variant="warning" showLabel />
      <CircularProgress value={20} variant="error" showLabel />
    </div>
  ),
};

export const CircularSizes: Story = {
  render: () => (
    <div className="flex items-end gap-8 p-8">
      <CircularProgress value={65} size={80} strokeWidth={6} showLabel />
      <CircularProgress value={65} size={120} strokeWidth={8} showLabel />
      <CircularProgress value={65} size={160} strokeWidth={10} showLabel />
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
          File Upload
        </h3>
        <Progress
          value={35}
          variant="primary"
          showLabel
          label="Uploading document.pdf"
          striped
          animated
        />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-900">
          Storage Usage
        </h3>
        <Progress value={85} variant="warning" showLabel label="Storage" />
        <p className="text-sm text-gray-600 mt-2">8.5 GB of 10 GB used</p>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-900">
          Task Completion
        </h3>
        <div className="space-y-3">
          <Progress
            value={100}
            variant="success"
            showLabel
            label="Design"
            size="sm"
          />
          <Progress
            value={75}
            variant="primary"
            showLabel
            label="Development"
            size="sm"
          />
          <Progress
            value={30}
            variant="warning"
            showLabel
            label="Testing"
            size="sm"
          />
          <Progress
            value={0}
            variant="error"
            showLabel
            label="Deployment"
            size="sm"
          />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-900">
          Download Progress
        </h3>
        <Progress
          value={60}
          variant="gradient"
          showLabel
          label="Downloading..."
          striped
          animated
          size="lg"
        />
      </div>
    </div>
  ),
};

export const SkillLevels: Story = {
  render: () => (
    <div
      className="space-y-6 p-8 bg-white rounded-lg"
      style={{ width: "500px" }}
    >
      <h3 className="text-xl font-bold text-gray-900 mb-6">Skills</h3>

      <div className="space-y-4">
        <div>
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">React</span>
            <span className="text-sm text-gray-500">Expert</span>
          </div>
          <Progress value={95} variant="success" size="sm" />
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">
              TypeScript
            </span>
            <span className="text-sm text-gray-500">Advanced</span>
          </div>
          <Progress value={85} variant="primary" size="sm" />
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Node.js</span>
            <span className="text-sm text-gray-500">Intermediate</span>
          </div>
          <Progress value={65} variant="secondary" size="sm" />
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">GraphQL</span>
            <span className="text-sm text-gray-500">Beginner</span>
          </div>
          <Progress value={35} variant="warning" size="sm" />
        </div>
      </div>
    </div>
  ),
};

export const DashboardMetrics: Story = {
  render: () => (
    <div
      className="grid grid-cols-3 gap-6 p-8 bg-gray-50 rounded-lg"
      style={{ width: "800px" }}
    >
      <div className="bg-white p-6 rounded-lg">
        <CircularProgress value={85} variant="success" size={100} showLabel />
        <p className="text-center mt-4 font-semibold text-gray-900">
          CPU Usage
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg">
        <CircularProgress value={60} variant="primary" size={100} showLabel />
        <p className="text-center mt-4 font-semibold text-gray-900">Memory</p>
      </div>

      <div className="bg-white p-6 rounded-lg">
        <CircularProgress value={45} variant="warning" size={100} showLabel />
        <p className="text-center mt-4 font-semibold text-gray-900">
          Disk Space
        </p>
      </div>
    </div>
  ),
};

export const LoadingStates: Story = {
  render: () => (
    <div
      className="space-y-8 p-8 bg-white rounded-lg"
      style={{ width: "500px" }}
    >
      <div>
        <h4 className="text-sm font-medium text-gray-700 mb-3">
          Processing...
        </h4>
        <Progress value={45} variant="primary" animated />
      </div>

      <div>
        <h4 className="text-sm font-medium text-gray-700 mb-3">
          Installing packages...
        </h4>
        <Progress value={70} variant="gradient" striped animated />
      </div>

      <div>
        <h4 className="text-sm font-medium text-gray-700 mb-3">
          Building project...
        </h4>
        <Progress value={30} variant="secondary" striped />
      </div>
    </div>
  ),
};
