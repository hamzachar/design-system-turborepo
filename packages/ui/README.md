# @repo/ui

A comprehensive, accessible React component library built with TypeScript, Tailwind CSS, and Radix UI.

## ✨ Features

- 🎨 **Complete Theme System** - Light, dark, and system modes with smooth transitions
- ♿ **Accessible** - WCAG AA compliant components
- 🔧 **TypeScript** - Full type safety
- 🎯 **Customizable** - Extensive variants and configuration
- 📱 **Responsive** - Mobile-first design
- ⚡ **Performance** - Optimized bundle size
- 🧪 **Well Tested** - Comprehensive test coverage

## 🌓 Theme System

This design system includes a powerful theme management system:

- **Light Mode**: Clean, bright interface
- **Dark Mode**: Eye-friendly dark theme
- **System Mode**: Automatically follows OS preferences
- **Persistent**: Theme choice saved to localStorage
- **Seamless**: Smooth transitions between themes

### Quick Start with Themes

```tsx
import { ThemeProvider, ThemeToggle, Button } from "@repo/ui";
import "@repo/ui/styles";

function App() {
  return (
    <ThemeProvider defaultTheme="system">
      <nav>
        <ThemeToggle showLabel />
      </nav>
      <main>{/* Your content */}</main>
    </ThemeProvider>
  );
}
```

For detailed theme documentation, see [THEME.md](./THEME.md).

## 🎨 Components

### Theme Components

- **ThemeProvider** - Provides theme context to your app
- **ThemeToggle** - Button to switch between themes
- **useTheme** - Hook to programmatically control themes

### Form Components

- **Button** - Multiple variants, sizes, loading states, and animations
- **Input** - With labels, errors, helper text, and icons
- **Select** - Accessible dropdown with groups and search (Radix UI)

### Layout Components

- **Card** - Multiple variants (elevated, outlined, flat, ghost)
- **Tabs** - Line and pills variants (Radix UI)
- **Dialog** - Modal dialogs with multiple sizes (Radix UI)

### Feedback Components

- **Alert** - Multiple variants with icons and dismissible option
- **Badge** - Tags with dots, borders, and removable option
- **Progress** - Linear and circular progress indicators
- **Skeleton** - Loading placeholders

### Data Display

- **Avatar** - With status indicators and fallbacks (Radix UI)

## 📦 Installation

This package is part of a monorepo and is consumed by other apps in the workspace.

```bash
npm install @repo/ui
```

## 🚀 Usage

### Basic Usage

```tsx
import {
  ThemeProvider,
  Button,
  Card,
  CardHeader,
  CardTitle,
  Input
} from "@repo/ui";
import "@repo/ui/styles";

function App() {
  return (
    <ThemeProvider>
      <Card>
        <CardHeader>
          <CardTitle>Welcome</CardTitle>
        </CardHeader>
        <Input label="Email" type="email" />
      <Button variant="primary">Submit</Button>
    </Card>
  );
}
```

## 🎭 Storybook

View all components and their variants:

```bash
npm run storybook
```

## 🧪 Testing

Run tests:

```bash
npm test
```

## 🏗️ Build

Build the library:

```bash
npm run build
```

This generates:

- Pre-compiled CSS (`dist/styles.css`)
- ESM bundle (`dist/index.mjs`)
- CommonJS bundle (`dist/index.js`)
- TypeScript definitions (`dist/index.d.ts`)

## 📖 Component Features

### Accessibility

- Full keyboard navigation
- ARIA attributes
- Focus management
- Screen reader support

### Customization

- Tailwind CSS for styling
- CVA for variant management
- Full TypeScript support
- Ref forwarding

### Dark Mode Ready

- Components support dark mode classes
- Easy to implement with theme provider

## 🛠️ Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Styling
- **Radix UI** - Accessible primitives
- **CVA** - Variant management
- **Storybook** - Component documentation
- **Jest + Testing Library** - Testing

## 📝 License

Private package for internal use.
