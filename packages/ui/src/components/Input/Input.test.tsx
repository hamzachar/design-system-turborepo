import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Input } from "./Input";

describe("Input", () => {
  describe("Rendering", () => {
    it("renders with default variant", () => {
      render(<Input placeholder="Test input" />);
      const input = screen.getByPlaceholderText("Test input");
      expect(input).toBeInTheDocument();
    });

    it("renders with label", () => {
      render(<Input label="Email" placeholder="test@example.com" />);
      expect(screen.getByLabelText("Email")).toBeInTheDocument();
    });

    it("renders with helper text", () => {
      render(<Input helperText="This is helper text" />);
      expect(screen.getByText("This is helper text")).toBeInTheDocument();
    });

    it("renders with error message", () => {
      render(<Input error="This field is required" />);
      expect(screen.getByRole("alert")).toHaveTextContent(
        "This field is required"
      );
    });

    it("error takes precedence over helper text", () => {
      render(<Input error="Error message" helperText="Helper text" />);
      expect(screen.getByRole("alert")).toHaveTextContent("Error message");
      expect(screen.queryByText("Helper text")).not.toBeInTheDocument();
    });
  });

  describe("Variants", () => {
    it("renders all variants correctly", () => {
      const variants = ["default", "error", "success", "warning"] as const;

      variants.forEach((variant) => {
        const { unmount } = render(
          <Input variant={variant} placeholder={variant} />
        );
        expect(screen.getByPlaceholderText(variant)).toBeInTheDocument();
        unmount();
      });
    });

    it("applies error variant when error prop is provided", () => {
      render(<Input variant="default" error="Error" data-testid="input" />);
      const input = screen.getByTestId("input");
      expect(input).toHaveClass("border-error-500");
    });
  });

  describe("Sizes", () => {
    it("renders all sizes correctly", () => {
      const sizes = ["sm", "md", "lg"] as const;

      sizes.forEach((size) => {
        const { unmount } = render(
          <Input size={size} data-testid={`input-${size}`} />
        );
        expect(screen.getByTestId(`input-${size}`)).toBeInTheDocument();
        unmount();
      });
    });
  });

  describe("Icons", () => {
    it("renders with left icon", () => {
      render(<Input leftIcon="🔍" placeholder="Search" />);
      const container = screen.getByPlaceholderText("Search").parentElement;
      expect(container?.textContent).toContain("🔍");
    });

    it("renders with right icon", () => {
      render(<Input rightIcon="👁️" placeholder="Password" />);
      const container = screen.getByPlaceholderText("Password").parentElement;
      expect(container?.textContent).toContain("👁️");
    });

    it("applies correct padding with left icon", () => {
      render(<Input leftIcon="🔍" data-testid="input" />);
      expect(screen.getByTestId("input")).toHaveClass("pl-10");
    });

    it("applies correct padding with right icon", () => {
      render(<Input rightIcon="👁️" data-testid="input" />);
      expect(screen.getByTestId("input")).toHaveClass("pr-10");
    });
  });

  describe("States", () => {
    it("can be disabled", () => {
      render(<Input disabled placeholder="Disabled" />);
      expect(screen.getByPlaceholderText("Disabled")).toBeDisabled();
    });

    it("applies disabled styles", () => {
      render(<Input disabled data-testid="input" />);
      expect(screen.getByTestId("input")).toHaveClass("disabled:opacity-60");
    });
  });

  describe("Full Width", () => {
    it("applies full width to container", () => {
      const { container } = render(<Input fullWidth />);
      const wrapper = container.firstChild;
      expect(wrapper).toHaveClass("w-full");
    });

    it("does not apply full width by default", () => {
      const { container } = render(<Input />);
      const wrapper = container.firstChild;
      expect(wrapper).toHaveClass("w-auto");
    });
  });

  describe("Interactions", () => {
    it("handles user input", async () => {
      const user = userEvent.setup();
      render(<Input placeholder="Type here" />);

      const input = screen.getByPlaceholderText("Type here");
      await user.type(input, "Hello");

      expect(input).toHaveValue("Hello");
    });

    it("calls onChange handler", async () => {
      const handleChange = jest.fn();
      const user = userEvent.setup();

      render(<Input onChange={handleChange} placeholder="Type" />);
      await user.type(screen.getByPlaceholderText("Type"), "A");

      expect(handleChange).toHaveBeenCalled();
    });
  });

  describe("Accessibility", () => {
    it("associates label with input", () => {
      render(<Input label="Email" />);
      const input = screen.getByLabelText("Email");
      expect(input).toBeInTheDocument();
    });

    it("has aria-invalid when error is present", () => {
      render(<Input error="Error" data-testid="input" />);
      expect(screen.getByTestId("input")).toHaveAttribute(
        "aria-invalid",
        "true"
      );
    });

    it("has aria-describedby for error", () => {
      render(<Input error="Error message" data-testid="input" />);
      const input = screen.getByTestId("input");
      const errorId = input.getAttribute("aria-describedby");
      expect(errorId).toBeTruthy();
      expect(screen.getByRole("alert")).toHaveAttribute("id", errorId);
    });

    it("has aria-describedby for helper text", () => {
      render(<Input helperText="Helper" data-testid="input" />);
      const input = screen.getByTestId("input");
      const helperId = input.getAttribute("aria-describedby");
      expect(helperId).toBeTruthy();
    });

    it("forwards ref correctly", () => {
      const ref = jest.fn();
      render(<Input ref={ref} />);
      expect(ref).toHaveBeenCalled();
    });
  });
});
