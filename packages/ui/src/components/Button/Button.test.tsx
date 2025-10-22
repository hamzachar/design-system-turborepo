import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "./Button";

describe("Button", () => {
  describe("Rendering", () => {
    it("renders with primary variant by default", () => {
      render(<Button>Click me</Button>);
      const button = screen.getByRole("button", { name: /click me/i });
      expect(button).toBeInTheDocument();
      expect(button).toHaveClass("bg-primary-600");
    });

    it("renders all variants correctly", () => {
      const variants = [
        "primary",
        "secondary",
        "success",
        "warning",
        "danger",
        "outline",
        "ghost",
        "link",
        "gradient",
      ] as const;

      variants.forEach((variant) => {
        const { unmount } = render(
          <Button variant={variant}>{variant}</Button>
        );
        expect(screen.getByRole("button")).toBeInTheDocument();
        unmount();
      });
    });

    it("renders all sizes correctly", () => {
      const sizes = ["sm", "md", "lg", "xl", "icon"] as const;

      sizes.forEach((size) => {
        const { unmount } = render(<Button size={size}>{size}</Button>);
        expect(screen.getByRole("button")).toBeInTheDocument();
        unmount();
      });
    });

    it("renders gradient variant", () => {
      render(<Button variant="gradient">Gradient</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("bg-gradient-to-r");
    });
  });

  describe("Animations", () => {
    it("applies no animation by default", () => {
      render(<Button>No animation</Button>);
      const button = screen.getByRole("button");
      expect(button).not.toHaveClass("animate-bounce");
      expect(button).not.toHaveClass("animate-pulse");
    });

    it("applies bounce animation", () => {
      render(<Button animation="bounce">Bounce</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("hover:animate-bounce");
    });

    it("applies pulse animation", () => {
      render(<Button animation="pulse">Pulse</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("hover:animate-pulse");
    });
  });

  describe("Icons", () => {
    it("renders with left icon", () => {
      render(<Button leftIcon="🚀">Launch</Button>);
      const button = screen.getByRole("button");
      expect(button.textContent).toContain("🚀");
      expect(button.textContent).toContain("Launch");
    });

    it("renders with right icon", () => {
      render(<Button rightIcon="→">Next</Button>);
      const button = screen.getByRole("button");
      expect(button.textContent).toContain("Next");
      expect(button.textContent).toContain("→");
    });

    it("renders with both icons", () => {
      render(
        <Button leftIcon="←" rightIcon="→">
          Both
        </Button>
      );
      const button = screen.getByRole("button");
      expect(button.textContent).toContain("←");
      expect(button.textContent).toContain("Both");
      expect(button.textContent).toContain("→");
    });
  });

  describe("Loading State", () => {
    it("shows loading spinner when loading is true", () => {
      render(<Button loading>Submit</Button>);
      expect(screen.getByText("Loading...")).toBeInTheDocument();
      expect(screen.queryByText("Submit")).not.toBeInTheDocument();
    });

    it("disables button when loading", () => {
      render(<Button loading>Submit</Button>);
      const button = screen.getByRole("button");
      expect(button).toBeDisabled();
      expect(button).toHaveAttribute("aria-busy", "true");
    });

    it("does not show icons when loading", () => {
      render(
        <Button loading leftIcon="🚀" rightIcon="→">
          Launch
        </Button>
      );
      expect(screen.queryByText("🚀")).not.toBeInTheDocument();
      expect(screen.queryByText("→")).not.toBeInTheDocument();
    });
  });

  describe("Full Width", () => {
    it("applies full width class when fullWidth is true", () => {
      render(<Button fullWidth>Full Width</Button>);
      expect(screen.getByRole("button")).toHaveClass("w-full");
    });

    it("does not apply full width by default", () => {
      render(<Button>Normal</Button>);
      expect(screen.getByRole("button")).toHaveClass("w-auto");
    });
  });

  describe("Interactions", () => {
    it("handles click events", async () => {
      const handleClick = jest.fn();
      const user = userEvent.setup();

      render(<Button onClick={handleClick}>Click me</Button>);
      await user.click(screen.getByRole("button"));

      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it("does not trigger click when disabled", async () => {
      const handleClick = jest.fn();
      const user = userEvent.setup();

      render(
        <Button onClick={handleClick} disabled>
          Disabled
        </Button>
      );
      await user.click(screen.getByRole("button"));

      expect(handleClick).not.toHaveBeenCalled();
    });

    it("does not trigger click when loading", async () => {
      const handleClick = jest.fn();
      const user = userEvent.setup();

      render(
        <Button onClick={handleClick} loading>
          Loading
        </Button>
      );
      await user.click(screen.getByRole("button"));

      expect(handleClick).not.toHaveBeenCalled();
    });
  });

  describe("Accessibility", () => {
    it("is disabled when disabled prop is true", () => {
      render(<Button disabled>Disabled</Button>);
      expect(screen.getByRole("button")).toBeDisabled();
    });

    it("applies custom className", () => {
      render(<Button className="custom-class">Button</Button>);
      expect(screen.getByRole("button")).toHaveClass("custom-class");
    });

    it("forwards ref correctly", () => {
      const ref = jest.fn();
      render(<Button ref={ref}>Button</Button>);
      expect(ref).toHaveBeenCalled();
    });
  });
});
