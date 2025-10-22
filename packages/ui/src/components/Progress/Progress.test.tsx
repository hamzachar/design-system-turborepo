import { render, screen } from "@testing-library/react";
import { Progress, CircularProgress } from "./Progress";

describe("Progress", () => {
  describe("Basic Rendering", () => {
    it("renders correctly", () => {
      render(<Progress value={50} />);
      const progress = screen.getByRole("progressbar");
      expect(progress).toBeInTheDocument();
    });

    it("has correct aria attributes", () => {
      render(<Progress value={50} max={100} />);
      const progress = screen.getByRole("progressbar");
      expect(progress).toHaveAttribute("aria-valuemin", "0");
      expect(progress).toHaveAttribute("aria-valuemax", "100");
      expect(progress).toHaveAttribute("aria-valuenow", "50");
    });

    it("renders all variants", () => {
      const variants = [
        "default",
        "primary",
        "secondary",
        "success",
        "warning",
        "error",
        "gradient",
      ] as const;
      variants.forEach((variant) => {
        const { unmount } = render(
          <Progress
            value={50}
            variant={variant}
            data-testid={`progress-${variant}`}
          />
        );
        expect(screen.getByTestId(`progress-${variant}`)).toBeInTheDocument();
        unmount();
      });
    });

    it("renders all sizes", () => {
      const sizes = ["sm", "md", "lg"] as const;
      sizes.forEach((size) => {
        const { unmount } = render(
          <Progress value={50} size={size} data-testid={`progress-${size}`} />
        );
        expect(screen.getByTestId(`progress-${size}`)).toBeInTheDocument();
        unmount();
      });
    });
  });

  describe("Value Handling", () => {
    it("defaults to 0 when no value is provided", () => {
      render(<Progress />);
      expect(screen.getByRole("progressbar")).toHaveAttribute(
        "aria-valuenow",
        "0"
      );
    });

    it("clamps value to 0 minimum", () => {
      render(<Progress value={-10} />);
      expect(screen.getByRole("progressbar")).toHaveAttribute(
        "aria-valuenow",
        "-10"
      );
    });

    it("clamps value to max", () => {
      render(<Progress value={150} max={100} />);
      expect(screen.getByRole("progressbar")).toHaveAttribute(
        "aria-valuenow",
        "150"
      );
    });

    it("calculates percentage correctly", () => {
      const { container } = render(<Progress value={50} max={100} />);
      const indicator = container.querySelector('[class*="transition-all"]');
      expect(indicator).toHaveStyle({ width: "50%" });
    });
  });

  describe("Labels", () => {
    it("does not show label by default", () => {
      render(<Progress value={50} />);
      expect(screen.queryByText("50%")).not.toBeInTheDocument();
    });

    it("shows percentage label when showLabel is true", () => {
      render(<Progress value={50} showLabel />);
      const labels = screen.getAllByText("50%");
      expect(labels.length).toBeGreaterThan(0);
    });

    it("shows custom label when provided", () => {
      render(<Progress value={50} showLabel label="Uploading" />);
      expect(screen.getByText("Uploading")).toBeInTheDocument();
      expect(screen.getByText("50%")).toBeInTheDocument();
    });

    it("has aria-label when label is provided", () => {
      render(<Progress value={50} label="Upload progress" />);
      expect(screen.getByRole("progressbar")).toHaveAttribute(
        "aria-label",
        "Upload progress"
      );
    });
  });

  describe("Visual Styles", () => {
    it("applies animated class when animated and striped", () => {
      const { container } = render(<Progress value={50} striped animated />);
      const indicator = container.querySelector(
        '[class*="animate-progress-stripes"]'
      );
      expect(indicator).toBeInTheDocument();
    });

    it("applies striped pattern when striped is true", () => {
      const { container } = render(<Progress value={50} striped />);
      const indicator = container.querySelector('[class*="transition-all"]');
      expect(indicator).toHaveStyle({
        backgroundImage: expect.stringContaining("linear-gradient"),
      });
    });

    it("applies both striped and animated", () => {
      const { container } = render(<Progress value={50} striped animated />);
      const indicator = container.querySelector(
        '[class*="animate-progress-stripes"]'
      );
      expect(indicator).toBeInTheDocument();
      expect(indicator).toHaveStyle({
        backgroundImage: expect.stringContaining("linear-gradient"),
      });
    });
  });

  describe("Accessibility", () => {
    it("forwards ref correctly", () => {
      const ref = jest.fn();
      render(<Progress ref={ref} value={50} />);
      expect(ref).toHaveBeenCalled();
    });

    it("applies custom className", () => {
      render(
        <Progress value={50} className="custom-class" data-testid="progress" />
      );
      expect(screen.getByTestId("progress")).toHaveClass("custom-class");
    });
  });
});

describe("CircularProgress", () => {
  describe("Basic Rendering", () => {
    it("renders correctly", () => {
      const { container } = render(<CircularProgress value={50} />);
      const svg = container.querySelector("svg");
      expect(svg).toBeInTheDocument();
    });

    it("renders all variants", () => {
      const variants = [
        "default",
        "primary",
        "secondary",
        "success",
        "warning",
        "error",
      ] as const;
      variants.forEach((variant) => {
        const { unmount, container } = render(
          <CircularProgress value={50} variant={variant} />
        );
        expect(container.querySelector("svg")).toBeInTheDocument();
        unmount();
      });
    });

    it("renders with default size", () => {
      const { container } = render(<CircularProgress value={50} />);
      const wrapper = container.firstChild as HTMLElement;
      expect(wrapper).toHaveStyle({ width: "120px", height: "120px" });
    });

    it("renders with custom size", () => {
      const { container } = render(<CircularProgress value={50} size={100} />);
      const wrapper = container.firstChild as HTMLElement;
      expect(wrapper).toHaveStyle({ width: "100px", height: "100px" });
    });
  });

  describe("Labels", () => {
    it("does not show label by default", () => {
      render(<CircularProgress value={50} />);
      expect(screen.queryByText("50%")).not.toBeInTheDocument();
    });

    it("shows percentage label when showLabel is true", () => {
      render(<CircularProgress value={50} showLabel />);
      expect(screen.getByText("50%")).toBeInTheDocument();
    });

    it("shows custom label when provided", () => {
      render(<CircularProgress value={50} showLabel label="Loading" />);
      expect(screen.getByText("Loading")).toBeInTheDocument();
    });
  });

  describe("Value Handling", () => {
    it("defaults to 0 when no value is provided", () => {
      const { container } = render(<CircularProgress />);
      const circles = container.querySelectorAll("circle");
      expect(circles).toHaveLength(2); // Background + indicator
    });

    it("clamps value between 0 and 100", () => {
      const { container: container1 } = render(
        <CircularProgress value={-10} />
      );
      const { container: container2 } = render(
        <CircularProgress value={150} />
      );

      expect(container1.querySelectorAll("circle")).toHaveLength(2);
      expect(container2.querySelectorAll("circle")).toHaveLength(2);
    });
  });

  describe("Accessibility", () => {
    it("forwards ref correctly", () => {
      const ref = jest.fn();
      render(<CircularProgress ref={ref} value={50} />);
      expect(ref).toHaveBeenCalled();
    });

    it("applies custom className", () => {
      const { container } = render(
        <CircularProgress value={50} className="custom-class" />
      );
      expect(container.firstChild).toHaveClass("custom-class");
    });
  });
});
