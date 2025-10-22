import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./Card";

describe("Card", () => {
  describe("Card Component", () => {
    it("renders correctly", () => {
      render(<Card data-testid="card">Content</Card>);
      expect(screen.getByTestId("card")).toBeInTheDocument();
    });

    it("renders all variants", () => {
      const variants = ["elevated", "outlined", "flat", "ghost"] as const;
      variants.forEach((variant) => {
        const { unmount } = render(
          <Card variant={variant} data-testid={`card-${variant}`} />
        );
        expect(screen.getByTestId(`card-${variant}`)).toBeInTheDocument();
        unmount();
      });
    });

    it("applies interactive styles when interactive", () => {
      render(<Card interactive data-testid="card" />);
      expect(screen.getByTestId("card")).toHaveClass("cursor-pointer");
    });

    it("applies correct padding", () => {
      const paddings = ["none", "sm", "md", "lg"] as const;
      paddings.forEach((padding) => {
        const { unmount } = render(
          <Card padding={padding} data-testid={`card-${padding}`} />
        );
        expect(screen.getByTestId(`card-${padding}`)).toBeInTheDocument();
        unmount();
      });
    });

    it("handles click events when interactive", async () => {
      const handleClick = jest.fn();
      const user = userEvent.setup();

      render(
        <Card interactive onClick={handleClick}>
          Click me
        </Card>
      );
      await user.click(screen.getByText("Click me"));

      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });

  describe("CardHeader", () => {
    it("renders correctly", () => {
      render(<CardHeader data-testid="header">Header</CardHeader>);
      expect(screen.getByTestId("header")).toBeInTheDocument();
    });

    it("applies padding correctly", () => {
      render(<CardHeader padding="lg" data-testid="header" />);
      expect(screen.getByTestId("header")).toBeInTheDocument();
    });
  });

  describe("CardTitle", () => {
    it("renders correctly", () => {
      render(<CardTitle>Test Title</CardTitle>);
      expect(screen.getByText("Test Title")).toBeInTheDocument();
    });

    it("renders as h3 by default", () => {
      render(<CardTitle>Title</CardTitle>);
      expect(screen.getByRole("heading", { level: 3 })).toBeInTheDocument();
    });

    it("applies custom className", () => {
      render(<CardTitle className="custom-class">Title</CardTitle>);
      expect(screen.getByText("Title")).toHaveClass("custom-class");
    });
  });

  describe("CardDescription", () => {
    it("renders correctly", () => {
      render(<CardDescription>Test Description</CardDescription>);
      expect(screen.getByText("Test Description")).toBeInTheDocument();
    });

    it("applies custom className", () => {
      render(
        <CardDescription className="custom-class">Description</CardDescription>
      );
      expect(screen.getByText("Description")).toHaveClass("custom-class");
    });
  });

  describe("CardContent", () => {
    it("renders correctly", () => {
      render(<CardContent data-testid="content">Content</CardContent>);
      expect(screen.getByTestId("content")).toBeInTheDocument();
    });

    it("applies padding correctly", () => {
      render(<CardContent padding="sm" data-testid="content" />);
      expect(screen.getByTestId("content")).toBeInTheDocument();
    });
  });

  describe("CardFooter", () => {
    it("renders correctly", () => {
      render(<CardFooter data-testid="footer">Footer</CardFooter>);
      expect(screen.getByTestId("footer")).toBeInTheDocument();
    });

    it("applies padding correctly", () => {
      render(<CardFooter padding="lg" data-testid="footer" />);
      expect(screen.getByTestId("footer")).toBeInTheDocument();
    });
  });

  describe("Complete Card", () => {
    it("renders all parts together", () => {
      render(
        <Card>
          <CardHeader>
            <CardTitle>Title</CardTitle>
            <CardDescription>Description</CardDescription>
          </CardHeader>
          <CardContent>Content</CardContent>
          <CardFooter>Footer</CardFooter>
        </Card>
      );

      expect(screen.getByText("Title")).toBeInTheDocument();
      expect(screen.getByText("Description")).toBeInTheDocument();
      expect(screen.getByText("Content")).toBeInTheDocument();
      expect(screen.getByText("Footer")).toBeInTheDocument();
    });
  });

  describe("Accessibility", () => {
    it("forwards ref correctly for Card", () => {
      const ref = jest.fn();
      render(<Card ref={ref} />);
      expect(ref).toHaveBeenCalled();
    });

    it("forwards ref correctly for CardHeader", () => {
      const ref = jest.fn();
      render(<CardHeader ref={ref} />);
      expect(ref).toHaveBeenCalled();
    });

    it("forwards ref correctly for CardTitle", () => {
      const ref = jest.fn();
      render(<CardTitle ref={ref}>Title</CardTitle>);
      expect(ref).toHaveBeenCalled();
    });
  });
});
