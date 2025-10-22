import { render, screen } from "@testing-library/react";
import {
  Skeleton,
  SkeletonText,
  SkeletonAvatar,
  SkeletonButton,
  SkeletonCard,
} from "./Skeleton";

describe("Skeleton", () => {
  describe("Basic Rendering", () => {
    it("renders correctly", () => {
      render(<Skeleton data-testid="skeleton" />);
      expect(screen.getByTestId("skeleton")).toBeInTheDocument();
    });

    it("applies animate-pulse class", () => {
      render(<Skeleton data-testid="skeleton" />);
      expect(screen.getByTestId("skeleton")).toHaveClass("animate-pulse");
    });

    it("renders all variants", () => {
      const variants = ["default", "light", "dark"] as const;
      variants.forEach((variant) => {
        const { unmount } = render(
          <Skeleton variant={variant} data-testid={`skeleton-${variant}`} />
        );
        expect(screen.getByTestId(`skeleton-${variant}`)).toBeInTheDocument();
        unmount();
      });
    });

    it("renders all shapes", () => {
      const shapes = ["rectangle", "circle", "rounded"] as const;
      shapes.forEach((shape) => {
        const { unmount } = render(
          <Skeleton shape={shape} data-testid={`skeleton-${shape}`} />
        );
        expect(screen.getByTestId(`skeleton-${shape}`)).toBeInTheDocument();
        unmount();
      });
    });
  });

  describe("Dimensions", () => {
    it("applies width style", () => {
      render(<Skeleton width="200px" data-testid="skeleton" />);
      expect(screen.getByTestId("skeleton")).toHaveStyle({ width: "200px" });
    });

    it("applies height style", () => {
      render(<Skeleton height="100px" data-testid="skeleton" />);
      expect(screen.getByTestId("skeleton")).toHaveStyle({ height: "100px" });
    });

    it("applies both width and height", () => {
      render(<Skeleton width="200px" height="100px" data-testid="skeleton" />);
      const skeleton = screen.getByTestId("skeleton");
      expect(skeleton).toHaveStyle({ width: "200px", height: "100px" });
    });
  });

  describe("Multiple Skeletons", () => {
    it("renders single skeleton by default", () => {
      const { container } = render(<Skeleton />);
      const skeletons = container.querySelectorAll(".animate-pulse");
      expect(skeletons).toHaveLength(1);
    });

    it("renders multiple skeletons when count is specified", () => {
      const { container } = render(<Skeleton count={3} />);
      const skeletons = container.querySelectorAll(".animate-pulse");
      expect(skeletons).toHaveLength(3);
    });

    it("applies containerClassName when count > 1", () => {
      const { container } = render(
        <Skeleton count={2} containerClassName="custom-container" />
      );
      expect(container.firstChild).toHaveClass("custom-container");
    });
  });

  describe("SkeletonText", () => {
    it("renders correctly", () => {
      render(<SkeletonText data-testid="skeleton-text" />);
      expect(screen.getByTestId("skeleton-text")).toBeInTheDocument();
    });

    it("has rounded shape", () => {
      render(<SkeletonText data-testid="skeleton-text" />);
      expect(screen.getByTestId("skeleton-text")).toHaveClass("rounded-lg");
    });

    it("has default height", () => {
      render(<SkeletonText data-testid="skeleton-text" />);
      expect(screen.getByTestId("skeleton-text")).toHaveStyle({
        height: "1rem",
      });
    });
  });

  describe("SkeletonAvatar", () => {
    it("renders correctly", () => {
      render(<SkeletonAvatar data-testid="skeleton-avatar" />);
      expect(screen.getByTestId("skeleton-avatar")).toBeInTheDocument();
    });

    it("has circle shape", () => {
      render(<SkeletonAvatar data-testid="skeleton-avatar" />);
      expect(screen.getByTestId("skeleton-avatar")).toHaveClass("rounded-full");
    });

    it("has default dimensions", () => {
      render(<SkeletonAvatar data-testid="skeleton-avatar" />);
      const avatar = screen.getByTestId("skeleton-avatar");
      expect(avatar).toHaveStyle({ width: "2.5rem", height: "2.5rem" });
    });

    it("accepts custom dimensions", () => {
      render(
        <SkeletonAvatar
          width="64px"
          height="64px"
          data-testid="skeleton-avatar"
        />
      );
      const avatar = screen.getByTestId("skeleton-avatar");
      expect(avatar).toHaveStyle({ width: "64px", height: "64px" });
    });
  });

  describe("SkeletonButton", () => {
    it("renders correctly", () => {
      render(<SkeletonButton data-testid="skeleton-button" />);
      expect(screen.getByTestId("skeleton-button")).toBeInTheDocument();
    });

    it("has rounded shape", () => {
      render(<SkeletonButton data-testid="skeleton-button" />);
      expect(screen.getByTestId("skeleton-button")).toHaveClass("rounded-lg");
    });

    it("has default dimensions", () => {
      render(<SkeletonButton data-testid="skeleton-button" />);
      const button = screen.getByTestId("skeleton-button");
      expect(button).toHaveStyle({ width: "6rem", height: "2.5rem" });
    });
  });

  describe("SkeletonCard", () => {
    it("renders correctly", () => {
      render(<SkeletonCard data-testid="skeleton-card" />);
      expect(screen.getByTestId("skeleton-card")).toBeInTheDocument();
    });

    it("renders multiple skeleton elements", () => {
      const { container } = render(<SkeletonCard />);
      const skeletons = container.querySelectorAll(".animate-pulse");
      expect(skeletons.length).toBeGreaterThan(1);
    });
  });

  describe("Accessibility", () => {
    it("forwards ref correctly", () => {
      const ref = jest.fn();
      render(<Skeleton ref={ref} />);
      expect(ref).toHaveBeenCalled();
    });

    it("applies custom className", () => {
      render(<Skeleton className="custom-class" data-testid="skeleton" />);
      expect(screen.getByTestId("skeleton")).toHaveClass("custom-class");
    });

    it("spreads additional props", () => {
      render(<Skeleton data-custom="value" data-testid="skeleton" />);
      expect(screen.getByTestId("skeleton")).toHaveAttribute(
        "data-custom",
        "value"
      );
    });
  });
});
