# @repo/ui

A comprehensive, accessible React component library built with TypeScript, Tailwind CSS, and Radix UI.

## 🎨 Components

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

```tsx
import { Button, Card, CardHeader, CardTitle, Input } from "@repo/ui";
import "@repo/ui/styles";

function App() {
  return (
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
