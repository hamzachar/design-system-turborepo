import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Badge } from "./Badge";

describe("Badge", () => {
  describe("Rendering", () => {
    it("renders with children", () => {
      render(<Badge>Test Badge</Badge>);
      expect(screen.getByText("Test Badge")).toBeInTheDocument();
    });

    it("renders all variants", () => {
      const variants = [
        "primary",
        "secondary",
        "success",
        "warning",
        "error",
        "gray",
        "outline",
      ] as const;

      variants.forEach((variant) => {
        const { unmount } = render(<Badge variant={variant}>{variant}</Badge>);
        expect(screen.getByText(variant)).toBeInTheDocument();
        unmount();
      });
    });

    it("renders all sizes", () => {
      const sizes = ["sm", "md", "lg"] as const;

      sizes.forEach((size) => {
        const { unmount } = render(<Badge size={size}>{size}</Badge>);
        expect(screen.getByText(size)).toBeInTheDocument();
        unmount();
      });
    });
  });

  describe("Bordered", () => {
    it("applies border when bordered is true", () => {
      render(
        <Badge bordered data-testid="badge">
          Bordered
        </Badge>
      );
      expect(screen.getByTestId("badge")).toHaveClass("border");
    });

    it("does not apply border by default", () => {
      render(<Badge data-testid="badge">Not Bordered</Badge>);
      expect(screen.getByTestId("badge")).not.toHaveClass("border");
    });
  });

  describe("Dot", () => {
    it("renders dot when dot is true", () => {
      const { container } = render(<Badge dot>With Dot</Badge>);
      const dot = container.querySelector('span[aria-hidden="true"]');
      expect(dot).toBeInTheDocument();
    });

    it("does not render dot by default", () => {
      const { container } = render(<Badge>Without Dot</Badge>);
      const dot = container.querySelector('span[aria-hidden="true"]');
      expect(dot).not.toBeInTheDocument();
    });
  });

  describe("Removable", () => {
    it("renders remove button when removable is true", () => {
      render(<Badge removable>Removable</Badge>);
      expect(
        screen.getByRole("button", { name: /remove/i })
      ).toBeInTheDocument();
    });

    it("renders remove button when onRemove is provided", () => {
      render(<Badge onRemove={() => {}}>Removable</Badge>);
      expect(
        screen.getByRole("button", { name: /remove/i })
      ).toBeInTheDocument();
    });

    it("does not render remove button by default", () => {
      render(<Badge>Not Removable</Badge>);
      expect(
        screen.queryByRole("button", { name: /remove/i })
      ).not.toBeInTheDocument();
    });

    it("calls onRemove when remove button is clicked", async () => {
      const handleRemove = jest.fn();
      const user = userEvent.setup();

      render(<Badge onRemove={handleRemove}>Remove Me</Badge>);
      await user.click(screen.getByRole("button", { name: /remove/i }));

      expect(handleRemove).toHaveBeenCalledTimes(1);
    });

    it("stops propagation when remove button is clicked", async () => {
      const handleBadgeClick = jest.fn();
      const handleRemove = jest.fn();
      const user = userEvent.setup();

      render(
        <Badge onClick={handleBadgeClick} onRemove={handleRemove}>
          Remove Me
        </Badge>
      );

      await user.click(screen.getByRole("button", { name: /remove/i }));

      expect(handleRemove).toHaveBeenCalledTimes(1);
      expect(handleBadgeClick).not.toHaveBeenCalled();
    });
  });

  describe("Interactions", () => {
    it("handles click events", async () => {
      const handleClick = jest.fn();
      const user = userEvent.setup();

      render(<Badge onClick={handleClick}>Click Me</Badge>);
      await user.click(screen.getByText("Click Me"));

      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });

  describe("Accessibility", () => {
    it("applies custom className", () => {
      render(<Badge className="custom-class">Badge</Badge>);
      expect(screen.getByText("Badge")).toHaveClass("custom-class");
    });

    it("forwards ref correctly", () => {
      const ref = jest.fn();
      render(<Badge ref={ref}>Badge</Badge>);
      expect(ref).toHaveBeenCalled();
    });

    it("remove button has proper aria-label", () => {
      render(<Badge removable>Badge</Badge>);
      expect(screen.getByRole("button")).toHaveAttribute(
        "aria-label",
        "Remove"
      );
    });
  });
});
