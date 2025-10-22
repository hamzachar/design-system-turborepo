import type { Meta, StoryObj } from "@storybook/react";
import {
  Skeleton,
  SkeletonText,
  SkeletonAvatar,
  SkeletonButton,
  SkeletonCard,
} from "./Skeleton";
import { Card, CardHeader, CardContent } from "../Card";

const meta = {
  title: "Components/Skeleton",
  component: Skeleton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "light", "dark"],
    },
    shape: {
      control: "select",
      options: ["rectangle", "circle", "rounded"],
    },
    count: {
      control: "number",
    },
  },
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    width: "200px",
    height: "20px",
  },
};

export const Circle: Story = {
  args: {
    shape: "circle",
    width: "48px",
    height: "48px",
  },
};

export const Rounded: Story = {
  args: {
    shape: "rounded",
    width: "200px",
    height: "100px",
  },
};

export const LightVariant: Story = {
  args: {
    variant: "light",
    width: "200px",
    height: "20px",
  },
};

export const DarkVariant: Story = {
  args: {
    variant: "dark",
    width: "200px",
    height: "20px",
  },
};

export const Multiple: Story = {
  args: {
    width: "300px",
    height: "20px",
    count: 5,
  },
};

export const TextSkeleton: Story = {
  render: () => (
    <div className="space-y-2" style={{ width: "300px" }}>
      <SkeletonText />
      <SkeletonText width="90%" />
      <SkeletonText width="80%" />
    </div>
  ),
};

export const AvatarSkeleton: Story = {
  render: () => (
    <div className="flex gap-4">
      <SkeletonAvatar width="40px" height="40px" />
      <SkeletonAvatar width="48px" height="48px" />
      <SkeletonAvatar width="64px" height="64px" />
    </div>
  ),
};

export const ButtonSkeleton: Story = {
  render: () => (
    <div className="flex gap-4">
      <SkeletonButton width="80px" height="32px" />
      <SkeletonButton width="100px" height="40px" />
      <SkeletonButton width="120px" height="48px" />
    </div>
  ),
};

export const CardSkeleton: Story = {
  render: () => <SkeletonCard style={{ width: "350px" }} />,
};

export const UserProfileSkeleton: Story = {
  render: () => (
    <Card style={{ width: "350px" }}>
      <CardHeader>
        <div className="flex items-center gap-4">
          <SkeletonAvatar width="64px" height="64px" />
          <div className="flex-1 space-y-2">
            <Skeleton height="1.5rem" width="60%" />
            <Skeleton height="1rem" width="40%" />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <Skeleton height="1rem" />
          <Skeleton height="1rem" width="90%" />
          <Skeleton height="1rem" width="80%" />
        </div>
        <div className="flex gap-2 mt-4">
          <SkeletonButton width="120px" height="40px" />
          <SkeletonButton width="120px" height="40px" />
        </div>
      </CardContent>
    </Card>
  ),
};

export const ArticleListSkeleton: Story = {
  render: () => (
    <div
      className="space-y-6 p-8 bg-white rounded-lg"
      style={{ width: "700px" }}
    >
      {[1, 2, 3].map((i) => (
        <div key={i} className="flex gap-4">
          <Skeleton width="200px" height="120px" shape="rounded" />
          <div className="flex-1 space-y-3">
            <Skeleton height="1.5rem" width="80%" />
            <Skeleton height="1rem" />
            <Skeleton height="1rem" width="90%" />
            <div className="flex gap-2 mt-4">
              <Skeleton width="60px" height="24px" shape="rounded" />
              <Skeleton width="60px" height="24px" shape="rounded" />
            </div>
          </div>
        </div>
      ))}
    </div>
  ),
};

export const TableSkeleton: Story = {
  render: () => (
    <div
      className="space-y-4 p-8 bg-white rounded-lg"
      style={{ width: "800px" }}
    >
      <div className="flex items-center justify-between">
        <Skeleton height="2rem" width="200px" />
        <SkeletonButton width="100px" />
      </div>
      <div className="space-y-3">
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg"
          >
            <SkeletonAvatar width="40px" height="40px" />
            <div className="flex-1 space-y-2">
              <Skeleton height="1rem" width="30%" />
              <Skeleton height="0.875rem" width="50%" />
            </div>
            <Skeleton width="80px" height="32px" shape="rounded" />
          </div>
        ))}
      </div>
    </div>
  ),
};

export const DashboardSkeleton: Story = {
  render: () => (
    <div
      className="grid grid-cols-2 gap-6 p-8 bg-gray-50"
      style={{ width: "900px" }}
    >
      {[1, 2, 3, 4].map((i) => (
        <Card key={i}>
          <CardContent className="space-y-4 pt-6">
            <div className="flex items-center justify-between">
              <Skeleton height="1rem" width="100px" />
              <SkeletonAvatar width="32px" height="32px" />
            </div>
            <Skeleton height="3rem" width="120px" />
            <Skeleton height="80px" shape="rounded" />
          </CardContent>
        </Card>
      ))}
    </div>
  ),
};

export const CommentsSkeleton: Story = {
  render: () => (
    <div
      className="space-y-4 p-8 bg-white rounded-lg"
      style={{ width: "600px" }}
    >
      {[1, 2, 3].map((i) => (
        <div key={i} className="flex gap-3">
          <SkeletonAvatar width="40px" height="40px" />
          <div className="flex-1 space-y-2">
            <div className="flex items-center gap-2">
              <Skeleton height="1rem" width="100px" />
              <Skeleton height="0.75rem" width="60px" />
            </div>
            <Skeleton height="1rem" />
            <Skeleton height="1rem" width="80%" />
          </div>
        </div>
      ))}
    </div>
  ),
};

export const FormSkeleton: Story = {
  render: () => (
    <div
      className="space-y-6 p-8 bg-white rounded-lg"
      style={{ width: "500px" }}
    >
      <Skeleton height="2rem" width="200px" />

      <div className="space-y-2">
        <Skeleton height="1rem" width="100px" />
        <Skeleton height="2.5rem" shape="rounded" />
      </div>

      <div className="space-y-2">
        <Skeleton height="1rem" width="120px" />
        <Skeleton height="2.5rem" shape="rounded" />
      </div>

      <div className="space-y-2">
        <Skeleton height="1rem" width="80px" />
        <Skeleton height="6rem" shape="rounded" />
      </div>

      <div className="flex gap-3">
        <SkeletonButton width="120px" height="40px" />
        <SkeletonButton width="100px" height="40px" />
      </div>
    </div>
  ),
};
