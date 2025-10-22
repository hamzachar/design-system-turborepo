import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Alert, AlertTitle, AlertDescription } from "./Alert";

describe("Alert", () => {
  describe("Rendering", () => {
    it("renders correctly", () => {
      render(
        <Alert>
          <AlertTitle>Title</AlertTitle>
          <AlertDescription>Description</AlertDescription>
        </Alert>
      );
      expect(screen.getByRole("alert")).toBeInTheDocument();
      expect(screen.getByText("Title")).toBeInTheDocument();
      expect(screen.getByText("Description")).toBeInTheDocument();
    });

    it("renders all variants", () => {
      const variants = [
        "default",
        "primary",
        "success",
        "warning",
        "error",
        "info",
      ] as const;

      variants.forEach((variant) => {
        const { unmount } = render(
          <Alert variant={variant} data-testid={`alert-${variant}`}>
            <AlertTitle>{variant}</AlertTitle>
          </Alert>
        );
        expect(screen.getByTestId(`alert-${variant}`)).toBeInTheDocument();
        unmount();
      });
    });

    it("renders with default icon for each variant", () => {
      const { container } = render(
        <Alert variant="success">
          <AlertTitle>Success</AlertTitle>
        </Alert>
      );
      const icon = container.querySelector("svg");
      expect(icon).toBeInTheDocument();
    });

    it("renders with custom icon", () => {
      render(
        <Alert icon="🎉">
          <AlertTitle>Custom</AlertTitle>
        </Alert>
      );
      expect(screen.getByText("🎉")).toBeInTheDocument();
    });

    it("renders without icon when icon is null", () => {
      const { container } = render(
        <Alert icon={null}>
          <AlertTitle>No Icon</AlertTitle>
        </Alert>
      );
      const icon = container.querySelector("svg");
      expect(icon).not.toBeInTheDocument();
    });
  });

  describe("Dismissible", () => {
    it("renders dismiss button when dismissible", () => {
      render(
        <Alert dismissible>
          <AlertTitle>Dismissible</AlertTitle>
        </Alert>
      );
      expect(
        screen.getByRole("button", { name: /dismiss alert/i })
      ).toBeInTheDocument();
    });

    it("does not render dismiss button by default", () => {
      render(
        <Alert>
          <AlertTitle>Not Dismissible</AlertTitle>
        </Alert>
      );
      expect(
        screen.queryByRole("button", { name: /dismiss alert/i })
      ).not.toBeInTheDocument();
    });

    it("removes alert when dismiss button is clicked", async () => {
      const user = userEvent.setup();

      render(
        <Alert dismissible>
          <AlertTitle>Dismissible</AlertTitle>
        </Alert>
      );

      const dismissButton = screen.getByRole("button", {
        name: /dismiss alert/i,
      });
      await user.click(dismissButton);

      expect(screen.queryByRole("alert")).not.toBeInTheDocument();
    });

    it("calls onDismiss when dismiss button is clicked", async () => {
      const handleDismiss = jest.fn();
      const user = userEvent.setup();

      render(
        <Alert dismissible onDismiss={handleDismiss}>
          <AlertTitle>Dismissible</AlertTitle>
        </Alert>
      );

      await user.click(screen.getByRole("button", { name: /dismiss alert/i }));

      expect(handleDismiss).toHaveBeenCalledTimes(1);
    });
  });

  describe("AlertTitle", () => {
    it("renders correctly", () => {
      render(<AlertTitle>Test Title</AlertTitle>);
      expect(screen.getByText("Test Title")).toBeInTheDocument();
    });

    it("renders as h5 by default", () => {
      render(<AlertTitle>Title</AlertTitle>);
      expect(screen.getByRole("heading", { level: 5 })).toBeInTheDocument();
    });

    it("applies custom className", () => {
      render(<AlertTitle className="custom-class">Title</AlertTitle>);
      expect(screen.getByText("Title")).toHaveClass("custom-class");
    });
  });

  describe("AlertDescription", () => {
    it("renders correctly", () => {
      render(<AlertDescription>Test Description</AlertDescription>);
      expect(screen.getByText("Test Description")).toBeInTheDocument();
    });

    it("applies custom className", () => {
      render(
        <AlertDescription className="custom-class">
          Description
        </AlertDescription>
      );
      expect(screen.getByText("Description")).toHaveClass("custom-class");
    });
  });

  describe("Accessibility", () => {
    it('has role="alert"', () => {
      render(
        <Alert>
          <AlertTitle>Title</AlertTitle>
        </Alert>
      );
      expect(screen.getByRole("alert")).toBeInTheDocument();
    });

    it("dismiss button has proper aria-label", () => {
      render(
        <Alert dismissible>
          <AlertTitle>Title</AlertTitle>
        </Alert>
      );
      expect(screen.getByRole("button")).toHaveAttribute(
        "aria-label",
        "Dismiss alert"
      );
    });

    it("forwards ref correctly for Alert", () => {
      const ref = jest.fn();
      render(
        <Alert ref={ref}>
          <AlertTitle>Title</AlertTitle>
        </Alert>
      );
      expect(ref).toHaveBeenCalled();
    });

    it("forwards ref correctly for AlertTitle", () => {
      const ref = jest.fn();
      render(<AlertTitle ref={ref}>Title</AlertTitle>);
      expect(ref).toHaveBeenCalled();
    });

    it("forwards ref correctly for AlertDescription", () => {
      const ref = jest.fn();
      render(<AlertDescription ref={ref}>Description</AlertDescription>);
      expect(ref).toHaveBeenCalled();
    });
  });

  describe("Animation", () => {
    it("applies slideIn animation", () => {
      render(
        <Alert data-testid="alert">
          <AlertTitle>Animated</AlertTitle>
        </Alert>
      );
      expect(screen.getByTestId("alert")).toHaveClass(
        "animate-[slideIn_0.2s_ease-out]"
      );
    });
  });
});
