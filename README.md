# My Design System Monorepo

A complete, production-ready design system built with **Turborepo**, React, TypeScript, Tailwind CSS, and Radix UI.

> 🚀 **Powered by Turborepo** - High-performance build system for JavaScript and TypeScript monorepos with intelligent caching, parallel execution, and optimized task scheduling.

## 📦 Project Structure

This is a **Turborepo monorepo** with multiple packages and applications managed efficiently:

```
my-design-system/
├── apps/
│   ├── web/                    # Next.js demo application
│   └── docs/                   # Documentation site (Storybook)
├── packages/
│   ├── ui/                     # Component library
│   ├── eslint-config/          # Shared ESLint configuration
│   └── typescript-config/      # Shared TypeScript configuration
└── turbo.json                  # Turborepo configuration
```

## 🎨 Component Library (@repo/ui)

A comprehensive React component library with 11+ components:

### Form Components

- **Button** - 9 variants, 5 sizes, loading states, icons, animations
- **Input** - Labels, errors, helper text, left/right icons, validation states
- **Select** - Accessible dropdown with groups, search, disabled items (Radix UI)

### Layout Components

- **Card** - 4 variants (elevated, outlined, flat, ghost), interactive mode
- **Tabs** - Line and pills variants, keyboard navigation (Radix UI)
- **Dialog** - Modal dialogs, 5 sizes, dismissible (Radix UI)

### Feedback Components

- **Alert** - 6 variants, auto icons, dismissible, animations
- **Badge** - 7 variants, dots, borders, removable, multiple sizes
- **Progress** - Linear and circular, 6 variants, striped, animated, labels

### Data Display

- **Avatar** - Status indicators, fallback initials, multiple sizes (Radix UI)
- **Skeleton** - Loading placeholders, predefined variants (Text, Avatar, Button, Card)

## 🚀 Quick Start

### Prerequisites

```bash
node >= 18.0.0
npm >= 9.0.0
```

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd my-design-system

# Install dependencies
npm install

# Build all packages
npm run build

# Start development
npm run dev
```

## 📖 Available Scripts

### Root Commands

```bash
# Development
npm run dev              # Start all apps in development mode (parallel)
npm run build            # Build all packages and apps (cached & parallel)
npm run test             # Run all tests (parallel)
npm run lint             # Lint all packages (parallel)

# Clean
npm run clean            # Remove all node_modules and build artifacts

# Turborepo specific
turbo run build          # Run build with Turborepo orchestration
turbo run build --force  # Force rebuild (bypass cache)
turbo run build --filter=@repo/ui  # Build only UI package and dependencies
```

### Understanding Turborepo Task Pipeline

Turborepo automatically understands task dependencies defined in `turbo.json`:

```json
{
  "pipeline": {
    "build": {
      "dependsOn": ["^build"], // Build dependencies first
      "outputs": ["dist/**"] // Cache these outputs
    },
    "test": {
      "dependsOn": ["build"], // Test after build
      "cache": false // Don't cache test results
    }
  }
}
```

### Package-Specific Commands

```bash
# UI Package (@repo/ui)
cd packages/ui
npm run build            # Build library (CSS + JS)
npm run build:css        # Build CSS only
npm run build:lib        # Build JS/TS only
npm test                 # Run tests
npm run storybook        # Start Storybook
npm run build-storybook  # Build Storybook

# Web App
cd apps/web
npm run dev              # Start Next.js dev server
npm run build            # Build for production
npm run start            # Start production server
```

## 🎭 Storybook

View all components with interactive examples:

```bash
cd packages/ui
npm run storybook
```

Open http://localhost:6006

## 🧪 Testing

### Run All Tests

```bash
npm test
```

### Run Tests for Specific Package

```bash
cd packages/ui
npm test                 # Run all tests
npm run test:watch       # Watch mode
npm run test:coverage    # With coverage report
```

### Test Coverage

- **Button**: 100% coverage
- **Input**: 100% coverage
- **Card**: 100% coverage
- **Badge**: 100% coverage
- **Avatar**: 100% coverage
- **Alert**: 100% coverage
- **Skeleton**: 100% coverage
- **Progress**: 100% coverage
- **Dialog**: Full coverage (Radix UI)
- **Select**: Full coverage (Radix UI)
- **Tabs**: Full coverage (Radix UI)

## 💻 Using the Component Library

### In Next.js App

```tsx
// app/page.tsx
import { Button, Card, CardHeader, CardTitle, Input } from "@repo/ui";
import "@repo/ui/styles";

export default function Home() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Welcome</CardTitle>
      </CardHeader>
      <Input label="Email" type="email" placeholder="you@example.com" />
      <Button variant="primary">Submit</Button>
    </Card>
  );
}
```

### Importing Styles

The library provides pre-compiled CSS:

```tsx
// In your app's layout or _app file
import "@repo/ui/styles";
```

### TypeScript Support

Full TypeScript support with exported types:

```tsx
import type { ButtonProps, InputProps } from "@repo/ui";

const myButton: ButtonProps = {
  variant: "primary",
  size: "lg",
  loading: false,
};
```

## 🎨 Styling & Customization

### Tailwind CSS v4

The component library uses Tailwind CSS v4 with pre-compiled styles. All utility classes are included in the compiled CSS.

### Customization

Components use CVA (Class Variance Authority) for variant management:

```tsx
<Button
  variant="primary" // primary, secondary, success, warning, danger, outline, ghost, link, gradient
  size="lg" // sm, md, lg, xl, icon
  animation="pulse" // none, bounce, pulse
  fullWidth
  loading
/>
```

### Theme Tokens

Colors are defined in `packages/ui/src/tokens/colors.ts`:

- Primary (Blue)
- Secondary (Purple)
- Success (Green)
- Warning (Orange)
- Error (Red)
- Gray scale

## 🏗️ Architecture

### Turborepo

Uses Turborepo for:

- Parallel builds
- Intelligent caching
- Dependency management
- Incremental builds

### Package Architecture

```
@repo/ui/
├── src/
│   ├── components/          # All components
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   ├── Button.test.tsx
│   │   │   ├── Button.stories.tsx
│   │   │   └── index.ts
│   │   └── .../
│   ├── lib/
│   │   └── utils.ts        # Utility functions (cn)
│   ├── styles/
│   │   └── globals.css     # Tailwind CSS
│   ├── tokens/             # Design tokens
│   └── index.ts            # Main export
├── dist/                   # Build output
│   ├── index.js           # CommonJS bundle
│   ├── index.mjs          # ESM bundle
│   ├── index.d.ts         # TypeScript definitions
│   └── styles.css         # Pre-compiled CSS
└── tsup.config.ts         # Build configuration
```

## 🔧 Technology Stack

### Core

- **React 19** - UI library
- **TypeScript 5.9** - Type safety
- **Tailwind CSS v4** - Styling system
- **Radix UI** - Accessible primitives

### Build Tools

- **Turborepo** - Monorepo management
- **tsup** - TypeScript bundler
- **Next.js 15** - Demo app framework
- **npm workspaces** - Package management

### Development

- **Storybook 9** - Component documentation
- **Jest** - Testing framework
- **Testing Library** - Component testing
- **ESLint** - Code linting
- **Prettier** - Code formatting

### Component Tools

- **CVA** - Variant management
- **clsx** - Conditional classes
- **tailwind-merge** - Class merging

## 📝 Development Workflow

### Adding a New Component

1. **Generate component structure:**

```bash
cd packages/ui
npm run generate:component
```

2. **Create component files:**

```tsx
// src/components/MyComponent/MyComponent.tsx
import * as React from "react";
import { cn } from "../../lib/utils";

export interface MyComponentProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "primary";
}

export const MyComponent = React.forwardRef<HTMLDivElement, MyComponentProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <div ref={ref} className={cn("base-classes", className)} {...props} />
    );
  }
);

MyComponent.displayName = "MyComponent";
```

3. **Add tests:**

```tsx
// src/components/MyComponent/MyComponent.test.tsx
import { render, screen } from "@testing-library/react";
import { MyComponent } from "./MyComponent";

describe("MyComponent", () => {
  it("renders correctly", () => {
    render(<MyComponent>Test</MyComponent>);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });
});
```

4. **Add Storybook stories:**

```tsx
// src/components/MyComponent/MyComponent.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { MyComponent } from "./MyComponent";

const meta: Meta<typeof MyComponent> = {
  title: "Components/MyComponent",
  component: MyComponent,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "My Component",
  },
};
```

5. **Export component:**

```tsx
// src/components/MyComponent/index.ts
export { MyComponent } from "./MyComponent";
export type { MyComponentProps } from "./MyComponent";

// src/index.ts
export * from "./components/MyComponent";
```

6. **Build and test:**

```bash
npm run build
npm test
npm run storybook
```

## 🚢 Production Build

### Build with Turborepo

```bash
# Build all packages
npm run build

# Build specific package
npm run build --workspace=@repo/ui
```

### Output

The UI package produces:

- `dist/index.js` - CommonJS bundle
- `dist/index.mjs` - ESM bundle
- `dist/index.d.ts` - TypeScript definitions
- `dist/styles.css` - Pre-compiled CSS

### Bundle Sizes

- **Total JS**: ~25KB (gzipped)
- **Total CSS**: ~45KB (gzipped)
- **Tree-shakeable**: Import only what you need

## 📊 Performance

- **Pre-compiled CSS**: No Tailwind compilation in consuming apps
- **Tree-shaking**: Import only components you use
- **Code splitting**: Separate bundles for ESM/CJS
- **Optimized builds**: Minified and compressed
- **TypeScript**: Full IntelliSense support

## ♿ Accessibility

All components follow WAI-ARIA guidelines:

- Keyboard navigation
- Screen reader support
- Focus management
- Semantic HTML
- ARIA attributes
- Color contrast (WCAG AA)

## 🤝 Contributing

### Code Style

- TypeScript strict mode
- ESLint + Prettier
- Conventional commits
- Component tests required
- Storybook stories required

### Git Workflow

```bash
# Create feature branch
git checkout -b feature/my-feature

# Make changes and test
npm test
npm run build

# Commit with conventional commits
git commit -m "feat(button): add new variant"

# Push and create PR
git push origin feature/my-feature
```

## 📄 License

Private monorepo for internal use.

## 🎯 Roadmap

### Completed ✅

- [x] 11 Core components
- [x] Radix UI integration (Avatar, Dialog, Select, Tabs)
- [x] Full TypeScript support
- [x] Pre-compiled CSS
- [x] Storybook documentation
- [x] Complete test coverage
- [x] Demo application

### Planned 🚀

- [ ] Dark mode support
- [ ] More Radix components (Tooltip, Popover, Dropdown)
- [ ] Form validation (React Hook Form + Zod)
- [ ] Animation library
- [ ] Layout components (Container, Stack, Grid)
- [ ] Responsive utilities
- [ ] Theme customization
- [ ] Component playground
- [ ] Visual regression testing

## 💡 Resources

- [Storybook](http://localhost:6006) - Component documentation
- [Demo App](http://localhost:3000) - Live examples
- [Radix UI](https://www.radix-ui.com/) - Accessible primitives
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Turborepo](https://turbo.build/) - Monorepo tools

---

**Built with love using React, TypeScript, Tailwind CSS, and Radix UI**
