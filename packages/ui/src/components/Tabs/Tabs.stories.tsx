import type { Meta, StoryObj } from "@storybook/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./Tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../Card";
import { Button } from "../Button";
import { Input } from "../Input";

const meta = {
  title: "Components/Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="tab1" style={{ width: "500px" }}>
      <TabsList>
        <TabsTrigger value="tab1">Account</TabsTrigger>
        <TabsTrigger value="tab2">Password</TabsTrigger>
        <TabsTrigger value="tab3">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <p className="text-gray-700">
          Manage your account settings and preferences.
        </p>
      </TabsContent>
      <TabsContent value="tab2">
        <p className="text-gray-700">
          Change your password and security settings.
        </p>
      </TabsContent>
      <TabsContent value="tab3">
        <p className="text-gray-700">
          Configure application settings and notifications.
        </p>
      </TabsContent>
    </Tabs>
  ),
};

export const PillsVariant: Story = {
  render: () => (
    <Tabs defaultValue="tab1" style={{ width: "500px" }}>
      <TabsList variant="pills">
        <TabsTrigger variant="pills" value="tab1">
          Overview
        </TabsTrigger>
        <TabsTrigger variant="pills" value="tab2">
          Analytics
        </TabsTrigger>
        <TabsTrigger variant="pills" value="tab3">
          Reports
        </TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <p className="text-gray-700">Overview content goes here.</p>
      </TabsContent>
      <TabsContent value="tab2">
        <p className="text-gray-700">Analytics content goes here.</p>
      </TabsContent>
      <TabsContent value="tab3">
        <p className="text-gray-700">Reports content goes here.</p>
      </TabsContent>
    </Tabs>
  ),
};

export const WithCards: Story = {
  render: () => (
    <Tabs defaultValue="account" style={{ width: "600px" }}>
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you're done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input label="Name" defaultValue="John Doe" />
            <Input label="Username" defaultValue="@johndoe" />
            <Button variant="primary">Save changes</Button>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input label="Current password" type="password" />
            <Input label="New password" type="password" />
            <Button variant="primary">Save password</Button>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Tabs defaultValue="tab1" style={{ width: "500px" }}>
      <TabsList>
        <TabsTrigger value="tab1">Active</TabsTrigger>
        <TabsTrigger value="tab2" disabled>
          Disabled
        </TabsTrigger>
        <TabsTrigger value="tab3">Active</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <p className="text-gray-700">This tab is active.</p>
      </TabsContent>
      <TabsContent value="tab2">
        <p className="text-gray-700">
          This tab is disabled and cannot be accessed.
        </p>
      </TabsContent>
      <TabsContent value="tab3">
        <p className="text-gray-700">Another active tab.</p>
      </TabsContent>
    </Tabs>
  ),
};

export const ManyTabs: Story = {
  render: () => (
    <Tabs defaultValue="tab1" style={{ width: "700px" }}>
      <TabsList>
        <TabsTrigger value="tab1">Dashboard</TabsTrigger>
        <TabsTrigger value="tab2">Users</TabsTrigger>
        <TabsTrigger value="tab3">Products</TabsTrigger>
        <TabsTrigger value="tab4">Orders</TabsTrigger>
        <TabsTrigger value="tab5">Analytics</TabsTrigger>
        <TabsTrigger value="tab6">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <p className="text-gray-700">Dashboard overview and statistics.</p>
      </TabsContent>
      <TabsContent value="tab2">
        <p className="text-gray-700">User management interface.</p>
      </TabsContent>
      <TabsContent value="tab3">
        <p className="text-gray-700">Product catalog and inventory.</p>
      </TabsContent>
      <TabsContent value="tab4">
        <p className="text-gray-700">Order history and fulfillment.</p>
      </TabsContent>
      <TabsContent value="tab5">
        <p className="text-gray-700">Analytics and reports.</p>
      </TabsContent>
      <TabsContent value="tab6">
        <p className="text-gray-700">Application settings.</p>
      </TabsContent>
    </Tabs>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <Tabs defaultValue="profile" style={{ width: "600px" }}>
      <TabsList variant="pills">
        <TabsTrigger variant="pills" value="profile">
          <span className="flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle
                cx="8"
                cy="5"
                r="3"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M3 14C3 11 5 9 8 9C11 9 13 11 13 14"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            Profile
          </span>
        </TabsTrigger>
        <TabsTrigger variant="pills" value="billing">
          <span className="flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <rect
                x="2"
                y="3"
                width="12"
                height="10"
                rx="1"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path d="M2 6H14" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            Billing
          </span>
        </TabsTrigger>
        <TabsTrigger variant="pills" value="notifications">
          <span className="flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M8 2C6 2 5 3 5 5C5 9 3 10 3 10H13C13 10 11 9 11 5C11 3 10 2 8 2Z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M7 13C7 13.5 7.5 14 8 14C8.5 14 9 13.5 9 13"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            Notifications
          </span>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="profile">
        <p className="text-gray-700">Your profile information.</p>
      </TabsContent>
      <TabsContent value="billing">
        <p className="text-gray-700">Billing and payment settings.</p>
      </TabsContent>
      <TabsContent value="notifications">
        <p className="text-gray-700">Notification preferences.</p>
      </TabsContent>
    </Tabs>
  ),
};

export const FullExample: Story = {
  render: () => (
    <div className="p-8 bg-gray-50 rounded-lg" style={{ width: "800px" }}>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Dashboard</h2>
      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="grid grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Total Revenue</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-gray-900">$45,231</p>
                <p className="text-sm text-success-600 mt-2">
                  +20.1% from last month
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Active Users</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-gray-900">2,350</p>
                <p className="text-sm text-success-600 mt-2">
                  +15% from last month
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Sales</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-gray-900">+12,234</p>
                <p className="text-sm text-error-600 mt-2">
                  -4% from last month
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="analytics">
          <Card>
            <CardHeader>
              <CardTitle>Analytics</CardTitle>
              <CardDescription>Detailed analytics and insights</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Analytics data visualization would go here.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports">
          <Card>
            <CardHeader>
              <CardTitle>Reports</CardTitle>
              <CardDescription>Generate and download reports</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Button variant="outline" fullWidth>
                  Download Monthly Report
                </Button>
                <Button variant="outline" fullWidth>
                  Download Quarterly Report
                </Button>
                <Button variant="outline" fullWidth>
                  Download Annual Report
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Notifications</CardTitle>
              <CardDescription>
                Manage your notification preferences
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Notification settings would go here.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  ),
};
