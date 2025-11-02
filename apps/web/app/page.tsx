"use client";

import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Input,
  Badge,
  Avatar,
  Alert,
  AlertTitle,
  AlertDescription,
  Progress,
  CircularProgress,
  Skeleton,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  ThemeToggle,
} from "@repo/ui";

export default function Home() {
  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <main className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex justify-end mb-4">
            <ThemeToggle showLabel />
          </div>
          <h1 className="text-5xl font-bold text-foreground">Design System</h1>
          <p className="text-xl text-muted-foreground">
            A comprehensive React component library with full theme support
          </p>
          <div className="flex gap-3 justify-center">
            <Badge variant="primary">TypeScript</Badge>
            <Badge variant="secondary">Tailwind CSS</Badge>
            <Badge variant="success">Radix UI</Badge>
          </div>
        </div>

        {/* Buttons */}
        <Card>
          <CardHeader>
            <CardTitle>Buttons</CardTitle>
            <CardDescription>Multiple variants and states</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-3">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="success">Success</Button>
              <Button variant="warning">Warning</Button>
              <Button variant="danger">Danger</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="gradient">Gradient</Button>
            </div>
            <div className="flex gap-3">
              <Button loading>Loading</Button>
              <Button disabled>Disabled</Button>
              <Button leftIcon="🚀">With Icon</Button>
            </div>
          </CardContent>
        </Card>

        {/* Inputs & Forms */}
        <Card>
          <CardHeader>
            <CardTitle>Form Components</CardTitle>
            <CardDescription>Input fields and selects</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input label="Email" type="email" placeholder="john@example.com" />
            <Input
              label="Password"
              type="password"
              helperText="Must be at least 8 characters"
            />
            <Input
              label="Error Example"
              error="This field is required"
              defaultValue="Invalid input"
            />
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-2">
                Country
              </label>
              <Select defaultValue="us">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="us">United States</SelectItem>
                  <SelectItem value="uk">United Kingdom</SelectItem>
                  <SelectItem value="ca">Canada</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Alerts & Progress */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Alerts</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Alert variant="success">
                <AlertTitle>Success!</AlertTitle>
                <AlertDescription>
                  Your changes have been saved.
                </AlertDescription>
              </Alert>
              <Alert variant="warning">
                <AlertTitle>Warning</AlertTitle>
                <AlertDescription>
                  Please review before continuing.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Progress</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <Progress value={75} variant="success" showLabel label="Upload" />
              <Progress value={45} variant="warning" striped animated />
              <div className="flex justify-center">
                <CircularProgress value={65} variant="primary" showLabel />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <Card>
          <CardHeader>
            <CardTitle>Tabs</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="tab1">
              <TabsList>
                <TabsTrigger value="tab1">Overview</TabsTrigger>
                <TabsTrigger value="tab2">Analytics</TabsTrigger>
                <TabsTrigger value="tab3">Settings</TabsTrigger>
              </TabsList>
              <TabsContent value="tab1">
                <p className="text-gray-700">
                  Overview content with statistics and data.
                </p>
              </TabsContent>
              <TabsContent value="tab2">
                <p className="text-gray-700">
                  Analytics and insights dashboard.
                </p>
              </TabsContent>
              <TabsContent value="tab3">
                <p className="text-gray-700">Configuration and preferences.</p>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Avatars & Badges */}
        <Card>
          <CardHeader>
            <CardTitle>Avatars & Badges</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex gap-4 items-center">
              <Avatar alt="John Doe" size="lg" status="online" />
              <div>
                <p className="font-semibold text-gray-900">John Doe</p>
                <Badge variant="success" dot>
                  Active
                </Badge>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge variant="primary">React</Badge>
              <Badge variant="secondary">TypeScript</Badge>
              <Badge variant="success">Tailwind</Badge>
              <Badge variant="warning" removable>
                Draft
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Dialog */}
        <Card>
          <CardHeader>
            <CardTitle>Dialog</CardTitle>
            <CardDescription>Modal dialogs and confirmations</CardDescription>
          </CardHeader>
          <CardContent>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="primary">Open Dialog</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Welcome to our Design System</DialogTitle>
                  <DialogDescription>
                    This is a comprehensive React component library with full
                    accessibility support.
                  </DialogDescription>
                </DialogHeader>
                <div className="py-4">
                  <p className="text-gray-700">
                    Built with React, TypeScript, Tailwind CSS, and Radix UI
                    primitives.
                  </p>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline">Close</Button>
                  </DialogClose>
                  <Button variant="primary">Get Started</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>

        {/* Skeleton */}
        <Card>
          <CardHeader>
            <CardTitle>Loading States</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4">
              <Skeleton shape="circle" width="48px" height="48px" />
              <div className="flex-1 space-y-2">
                <Skeleton height="1rem" width="60%" />
                <Skeleton height="1rem" width="40%" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center py-8">
          <p className="text-gray-600">
            Built with Love using React, TypeScript, Tailwind CSS, and Radix UI
          </p>
        </div>
      </main>
    </div>
  );
}
