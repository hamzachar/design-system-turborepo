import type { Meta, StoryObj } from "@storybook/react";
import { Alert, AlertTitle, AlertDescription } from "./Alert";

const meta = {
  title: "Components/Alert",
  component: Alert,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "primary", "success", "warning", "error", "info"],
    },
    dismissible: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Alert style={{ width: "500px" }}>
      <AlertTitle>Default Alert</AlertTitle>
      <AlertDescription>
        This is a default alert with standard styling.
      </AlertDescription>
    </Alert>
  ),
};

export const Primary: Story = {
  render: () => (
    <Alert variant="primary" style={{ width: "500px" }}>
      <AlertTitle>Primary Alert</AlertTitle>
      <AlertDescription>
        This is a primary alert for general information.
      </AlertDescription>
    </Alert>
  ),
};

export const Success: Story = {
  render: () => (
    <Alert variant="success" style={{ width: "500px" }}>
      <AlertTitle>Success!</AlertTitle>
      <AlertDescription>
        Your changes have been saved successfully.
      </AlertDescription>
    </Alert>
  ),
};

export const Warning: Story = {
  render: () => (
    <Alert variant="warning" style={{ width: "500px" }}>
      <AlertTitle>Warning</AlertTitle>
      <AlertDescription>
        Please review your changes before proceeding.
      </AlertDescription>
    </Alert>
  ),
};

export const Error: Story = {
  render: () => (
    <Alert variant="error" style={{ width: "500px" }}>
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        An error occurred while processing your request.
      </AlertDescription>
    </Alert>
  ),
};

export const Info: Story = {
  render: () => (
    <Alert variant="info" style={{ width: "500px" }}>
      <AlertTitle>Information</AlertTitle>
      <AlertDescription>
        Here's some helpful information for you.
      </AlertDescription>
    </Alert>
  ),
};

export const WithoutIcon: Story = {
  render: () => (
    <Alert variant="primary" icon={null} style={{ width: "500px" }}>
      <AlertTitle>No Icon</AlertTitle>
      <AlertDescription>This alert doesn't have an icon.</AlertDescription>
    </Alert>
  ),
};

export const CustomIcon: Story = {
  render: () => (
    <Alert variant="success" icon="🎉" style={{ width: "500px" }}>
      <AlertTitle>Congratulations!</AlertTitle>
      <AlertDescription>You've completed all tasks for today.</AlertDescription>
    </Alert>
  ),
};

export const Dismissible: Story = {
  render: () => (
    <Alert variant="primary" dismissible style={{ width: "500px" }}>
      <AlertTitle>Dismissible Alert</AlertTitle>
      <AlertDescription>
        Click the X button to dismiss this alert.
      </AlertDescription>
    </Alert>
  ),
};

export const OnlyTitle: Story = {
  render: () => (
    <Alert variant="success" style={{ width: "500px" }}>
      <AlertTitle>Changes saved successfully</AlertTitle>
    </Alert>
  ),
};

export const OnlyDescription: Story = {
  render: () => (
    <Alert variant="warning" style={{ width: "500px" }}>
      <AlertDescription>
        Your session will expire in 5 minutes.
      </AlertDescription>
    </Alert>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4 p-8" style={{ width: "600px" }}>
      <Alert variant="default">
        <AlertTitle>Default</AlertTitle>
        <AlertDescription>Default alert variant</AlertDescription>
      </Alert>

      <Alert variant="primary">
        <AlertTitle>Primary</AlertTitle>
        <AlertDescription>Primary alert variant</AlertDescription>
      </Alert>

      <Alert variant="success">
        <AlertTitle>Success</AlertTitle>
        <AlertDescription>Success alert variant</AlertDescription>
      </Alert>

      <Alert variant="warning">
        <AlertTitle>Warning</AlertTitle>
        <AlertDescription>Warning alert variant</AlertDescription>
      </Alert>

      <Alert variant="error">
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>Error alert variant</AlertDescription>
      </Alert>

      <Alert variant="info">
        <AlertTitle>Info</AlertTitle>
        <AlertDescription>Info alert variant</AlertDescription>
      </Alert>
    </div>
  ),
};

export const DismissibleExamples: Story = {
  render: () => (
    <div className="flex flex-col gap-4 p-8" style={{ width: "600px" }}>
      <Alert variant="success" dismissible>
        <AlertTitle>Success</AlertTitle>
        <AlertDescription>Operation completed successfully</AlertDescription>
      </Alert>

      <Alert variant="warning" dismissible>
        <AlertTitle>Warning</AlertTitle>
        <AlertDescription>Please review before continuing</AlertDescription>
      </Alert>

      <Alert variant="error" dismissible>
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>Something went wrong</AlertDescription>
      </Alert>
    </div>
  ),
};

export const RealWorldExamples: Story = {
  render: () => (
    <div
      className="flex flex-col gap-6 p-8 bg-gray-50 rounded-lg"
      style={{ width: "700px" }}
    >
      <h3 className="text-xl font-bold text-gray-900">Notification Examples</h3>

      <Alert variant="success" dismissible>
        <AlertTitle>Payment Successful</AlertTitle>
        <AlertDescription>
          Your payment of $99.99 has been processed. A confirmation email has
          been sent to your inbox.
        </AlertDescription>
      </Alert>

      <Alert variant="warning" dismissible>
        <AlertTitle>Storage Almost Full</AlertTitle>
        <AlertDescription>
          You're using 95% of your storage space. Consider upgrading your plan
          or deleting unused files.
        </AlertDescription>
      </Alert>

      <Alert variant="error" dismissible>
        <AlertTitle>Connection Error</AlertTitle>
        <AlertDescription>
          Unable to connect to the server. Please check your internet connection
          and try again.
        </AlertDescription>
      </Alert>

      <Alert variant="info" dismissible>
        <AlertTitle>New Features Available</AlertTitle>
        <AlertDescription>
          We've added new collaboration tools to help your team work better
          together. Check them out in Settings.
        </AlertDescription>
      </Alert>
    </div>
  ),
};

export const CompactAlerts: Story = {
  render: () => (
    <div className="flex flex-col gap-3 p-8" style={{ width: "500px" }}>
      <Alert variant="success" dismissible>
        <AlertDescription>File uploaded successfully</AlertDescription>
      </Alert>

      <Alert variant="warning" dismissible>
        <AlertDescription>Unsaved changes detected</AlertDescription>
      </Alert>

      <Alert variant="error" dismissible>
        <AlertDescription>Failed to save changes</AlertDescription>
      </Alert>
    </div>
  ),
};
