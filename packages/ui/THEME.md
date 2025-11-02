# Theme System

This design system includes a complete theme management system with support for light mode, dark mode, and automatic system theme detection.

## Features

- 🌓 **Light & Dark Mode**: Full support for both themes
- 🔄 **System Theme Detection**: Automatically detect and follow user's system preferences
- 💾 **Persistent Selection**: Theme choice is saved to localStorage
- ⚡ **Fast Switching**: Instant theme transitions with smooth animations
- 🎨 **Semantic Tokens**: All components use theme-aware color tokens
- 📱 **Responsive**: Works seamlessly across all devices

## Quick Start

### 1. Wrap your app with ThemeProvider

```tsx
import { ThemeProvider } from "@repo/ui";

function App() {
  return <ThemeProvider>{/* Your app content */}</ThemeProvider>;
}
```

### 2. Add the ThemeToggle component

```tsx
import { ThemeToggle } from "@repo/ui";

function Navbar() {
  return (
    <nav>
      {/* Your nav items */}
      <ThemeToggle />
    </nav>
  );
}
```

### 3. Import the styles

```tsx
import "@repo/ui/styles";
```

## Components

### ThemeProvider

Provides theme context to all child components.

**Props:**

- `children`: ReactNode - Your application content
- `defaultTheme`: 'light' | 'dark' | 'system' (default: 'system')

**Example:**

```tsx
<ThemeProvider defaultTheme="dark">
  <App />
</ThemeProvider>
```

### ThemeToggle

A button component that cycles through theme modes.

**Props:**

- `showLabel`: boolean - Show theme label text (default: false)
- `className`: string - Additional CSS classes

**Example:**

```tsx
// Simple icon button
<ThemeToggle />

// With label
<ThemeToggle showLabel />

// Custom styling
<ThemeToggle className="border-2 border-primary-500" />
```

### useTheme Hook

Programmatically control the theme in your components.

**Returns:**

- `theme`: 'light' | 'dark' | 'system' - Current theme setting
- `setTheme`: (theme) => void - Function to change theme
- `resolvedTheme`: 'light' | 'dark' - Actual theme being used

**Example:**

```tsx
import { useTheme } from "@repo/ui";

function MyComponent() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  return (
    <div>
      <p>Current theme: {theme}</p>
      <p>Resolved theme: {resolvedTheme}</p>
      <button onClick={() => setTheme("dark")}>Dark Mode</button>
      <button onClick={() => setTheme("light")}>Light Mode</button>
      <button onClick={() => setTheme("system")}>System</button>
    </div>
  );
}
```

## Theme Modes

### Light Mode

The default light theme with bright, clean colors.

### Dark Mode

A carefully crafted dark theme with reduced eye strain and improved contrast.

### System Mode

Automatically follows the user's operating system theme preference and updates in real-time when the system theme changes.

## Customization

### Using Semantic Tokens

All components use semantic color tokens that automatically adapt to the current theme:

```tsx
// These classes automatically adjust based on theme
<div className="bg-background text-foreground">
  <div className="bg-card text-card-foreground border border-border">
    Card content
  </div>
</div>
```

### Available Semantic Tokens

- **Background**: `bg-background`, `text-foreground`
- **Card**: `bg-card`, `text-card-foreground`
- **Popover**: `bg-popover`, `text-popover-foreground`
- **Muted**: `bg-muted`, `text-muted-foreground`
- **Accent**: `bg-accent`, `text-accent-foreground`
- **Borders**: `border-border`, `border-input`
- **Focus Ring**: `ring-ring`

### Extending Colors

The theme system is built on top of a comprehensive color palette. You can access all colors using Tailwind utilities:

```tsx
// Brand colors work in both themes
<button className="bg-primary-600 dark:bg-primary-500">
  Button
</button>

// Semantic colors
<div className="bg-background text-foreground">
  Content
</div>
```

## Best Practices

1. **Use Semantic Tokens**: Prefer semantic tokens (`bg-background`, `text-foreground`) over specific colors for better theme support.

2. **Test Both Themes**: Always test your components in both light and dark modes.

3. **Avoid Hardcoded Colors**: Use the design system's color palette instead of arbitrary colors.

4. **Smooth Transitions**: The theme system includes smooth transitions. Avoid overriding these unless necessary.

5. **Accessibility**: Both themes maintain WCAG AA contrast ratios for better accessibility.

## Storybook Integration

The theme system is fully integrated with Storybook. Use the theme toolbar button to switch between light and dark modes while developing components.

## Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers

## Troubleshooting

### Theme not persisting

Make sure your app has access to localStorage. Some browsers in private mode may block it.

### Flash of unstyled content

Add the ThemeProvider as high as possible in your component tree, ideally in your root component.

### Components not updating

Ensure all components that need theme awareness are within the ThemeProvider.

## Examples

### Complete App Setup

```tsx
import { ThemeProvider, ThemeToggle } from "@repo/ui";
import "@repo/ui/styles";

export default function App() {
  return (
    <ThemeProvider defaultTheme="system">
      <div className="min-h-screen bg-background">
        <nav className="border-b border-border">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-foreground">My App</h1>
            <ThemeToggle showLabel />
          </div>
        </nav>

        <main className="container mx-auto px-4 py-8">
          {/* Your content */}
        </main>
      </div>
    </ThemeProvider>
  );
}
```

### Custom Theme Toggle

```tsx
import { useTheme } from "@repo/ui";

function CustomThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  return (
    <div className="flex gap-2">
      <button
        onClick={() => setTheme("light")}
        className={theme === "light" ? "font-bold" : ""}
      >
        ☀️ Light
      </button>
      <button
        onClick={() => setTheme("dark")}
        className={theme === "dark" ? "font-bold" : ""}
      >
        🌙 Dark
      </button>
      <button
        onClick={() => setTheme("system")}
        className={theme === "system" ? "font-bold" : ""}
      >
        💻 System
      </button>
    </div>
  );
}
```
