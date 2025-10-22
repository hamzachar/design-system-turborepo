import type { Meta, StoryObj } from "@storybook/react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./Card";
import { Button } from "../Button";
import { Badge } from "../Badge";

const meta = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["elevated", "outlined", "flat", "ghost"],
    },
    padding: {
      control: "select",
      options: ["none", "sm", "md", "lg"],
    },
    interactive: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card style={{ width: "400px" }}>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700">
          This is the main content of the card. You can put any content here.
        </p>
      </CardContent>
    </Card>
  ),
};

export const Elevated: Story = {
  render: () => (
    <Card variant="elevated" style={{ width: "400px" }}>
      <CardHeader>
        <CardTitle>Elevated Card</CardTitle>
        <CardDescription>With shadow elevation</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700">
          This card has a shadow that increases on hover.
        </p>
      </CardContent>
    </Card>
  ),
};

export const Outlined: Story = {
  render: () => (
    <Card variant="outlined" style={{ width: "400px" }}>
      <CardHeader>
        <CardTitle>Outlined Card</CardTitle>
        <CardDescription>With border outline</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700">
          This card has a border that changes on hover.
        </p>
      </CardContent>
    </Card>
  ),
};

export const Flat: Story = {
  render: () => (
    <Card variant="flat" style={{ width: "400px" }}>
      <CardHeader>
        <CardTitle>Flat Card</CardTitle>
        <CardDescription>With subtle background</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700">
          This card has a flat appearance with a subtle background.
        </p>
      </CardContent>
    </Card>
  ),
};

export const Ghost: Story = {
  render: () => (
    <Card variant="ghost" style={{ width: "400px" }}>
      <CardHeader>
        <CardTitle>Ghost Card</CardTitle>
        <CardDescription>Transparent until hover</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700">
          This card is transparent and appears on hover.
        </p>
      </CardContent>
    </Card>
  ),
};

export const Interactive: Story = {
  render: () => (
    <Card variant="elevated" interactive style={{ width: "400px" }}>
      <CardHeader>
        <CardTitle>Interactive Card</CardTitle>
        <CardDescription>Click me!</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700">
          This card is interactive with hover and click effects.
        </p>
      </CardContent>
    </Card>
  ),
};

export const WithFooter: Story = {
  render: () => (
    <Card style={{ width: "400px" }}>
      <CardHeader>
        <CardTitle>Card with Footer</CardTitle>
        <CardDescription>Includes action buttons</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700">
          This card has a footer section with action buttons.
        </p>
      </CardContent>
      <CardFooter className="gap-2">
        <Button variant="primary">Accept</Button>
        <Button variant="outline">Decline</Button>
      </CardFooter>
    </Card>
  ),
};

export const WithBadge: Story = {
  render: () => (
    <Card style={{ width: "400px" }}>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle>Featured Article</CardTitle>
            <CardDescription>Published 2 hours ago</CardDescription>
          </div>
          <Badge variant="success">New</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700">
          This is a featured article with a badge in the header.
        </p>
      </CardContent>
    </Card>
  ),
};

export const SmallPadding: Story = {
  render: () => (
    <Card padding="sm" style={{ width: "400px" }}>
      <CardHeader padding="sm">
        <CardTitle>Small Padding</CardTitle>
        <CardDescription>Compact card layout</CardDescription>
      </CardHeader>
      <CardContent padding="sm">
        <p className="text-gray-700">This card uses smaller padding.</p>
      </CardContent>
    </Card>
  ),
};

export const LargePadding: Story = {
  render: () => (
    <Card padding="lg" style={{ width: "400px" }}>
      <CardHeader padding="lg">
        <CardTitle>Large Padding</CardTitle>
        <CardDescription>Spacious card layout</CardDescription>
      </CardHeader>
      <CardContent padding="lg">
        <p className="text-gray-700">This card uses larger padding.</p>
      </CardContent>
    </Card>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-6 p-8" style={{ width: "900px" }}>
      <Card variant="elevated">
        <CardHeader>
          <CardTitle>Elevated</CardTitle>
          <CardDescription>Shadow effect</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-700">With shadow elevation</p>
        </CardContent>
      </Card>

      <Card variant="outlined">
        <CardHeader>
          <CardTitle>Outlined</CardTitle>
          <CardDescription>Border effect</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-700">With border outline</p>
        </CardContent>
      </Card>

      <Card variant="flat">
        <CardHeader>
          <CardTitle>Flat</CardTitle>
          <CardDescription>Subtle background</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-700">Flat appearance</p>
        </CardContent>
      </Card>

      <Card variant="ghost">
        <CardHeader>
          <CardTitle>Ghost</CardTitle>
          <CardDescription>Transparent</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-700">Appears on hover</p>
        </CardContent>
      </Card>
    </div>
  ),
};

export const ProductCard: Story = {
  render: () => (
    <Card variant="elevated" interactive style={{ width: "350px" }}>
      <div className="aspect-video bg-gradient-to-br from-primary-400 to-secondary-500 rounded-t-xl" />
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-xl">Product Name</CardTitle>
            <CardDescription>Category • Brand</CardDescription>
          </div>
          <Badge variant="primary">Sale</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 mb-4">
          A brief description of the product highlighting its key features.
        </p>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-gray-900">$99.99</span>
            <span className="text-sm text-gray-500 line-through ml-2">
              $149.99
            </span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="primary" fullWidth>
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  ),
};

export const UserProfileCard: Story = {
  render: () => (
    <Card variant="outlined" style={{ width: "350px" }}>
      <CardHeader>
        <div className="flex items-center gap-4">
          <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white text-xl font-bold">
            JD
          </div>
          <div className="flex-1">
            <CardTitle className="text-xl">John Doe</CardTitle>
            <CardDescription>Product Designer</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 mb-4">
          Passionate about creating beautiful and functional user experiences.
        </p>
        <div className="flex gap-2">
          <Badge variant="secondary">Design</Badge>
          <Badge variant="secondary">UX</Badge>
          <Badge variant="secondary">UI</Badge>
        </div>
      </CardContent>
      <CardFooter className="gap-2">
        <Button variant="primary" fullWidth>
          Follow
        </Button>
        <Button variant="outline" fullWidth>
          Message
        </Button>
      </CardFooter>
    </Card>
  ),
};
