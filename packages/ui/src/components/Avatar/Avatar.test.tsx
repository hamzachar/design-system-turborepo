import { render, screen, waitFor } from "@testing-library/react";
import { Avatar } from "./Avatar";

describe("Avatar", () => {
  describe("Image Rendering", () => {
    it("renders with image when src is provided", async () => {
      render(
        <Avatar
          src="https://via.placeholder.com/150"
          alt="Test User"
          delayMs={0}
        />
      );

      // Check that fallback appears
      await waitFor(() => {
        expect(screen.getByText("TU")).toBeInTheDocument();
      });
    });

    it("shows fallback when image fails to load", async () => {
      render(<Avatar src="invalid-url.jpg" alt="John Doe" delayMs={0} />);

      await waitFor(() => {
        expect(screen.getByText("JD")).toBeInTheDocument();
      });
    });

    it("shows fallback immediately when no src provided", async () => {
      render(<Avatar alt="Jane Smith" delayMs={0} />);

      await waitFor(() => {
        expect(screen.getByText("JS")).toBeInTheDocument();
      });
    });
  });

  describe("Fallback Initials", () => {
    it("generates initials from alt text", async () => {
      render(<Avatar alt="John Doe" delayMs={0} />);

      await waitFor(() => {
        expect(screen.getByText("JD")).toBeInTheDocument();
      });
    });

    it("generates initials from multi-word names", async () => {
      render(<Avatar alt="Mary Jane Watson" delayMs={0} />);

      await waitFor(() => {
        expect(screen.getByText("MJ")).toBeInTheDocument();
      });
    });

    it("uses custom fallback when provided", async () => {
      render(<Avatar fallback="AB" delayMs={0} />);

      await waitFor(() => {
        expect(screen.getByText("AB")).toBeInTheDocument();
      });
    });

    it("shows question mark when no alt or fallback", async () => {
      render(<Avatar delayMs={0} />);

      await waitFor(() => {
        expect(screen.getByText("?")).toBeInTheDocument();
      });
    });

    it("limits initials to 2 characters", async () => {
      render(<Avatar alt="A B C D" delayMs={0} />);

      await waitFor(() => {
        expect(screen.getByText("AB")).toBeInTheDocument();
      });
    });
  });

  describe("Status Indicator", () => {
    it("renders online status", async () => {
      render(<Avatar alt="User" status="online" delayMs={0} />);

      await waitFor(() => {
        expect(screen.getByLabelText("Status: online")).toBeInTheDocument();
      });
    });

    it("renders offline status", async () => {
      render(<Avatar alt="User" status="offline" delayMs={0} />);

      await waitFor(() => {
        expect(screen.getByLabelText("Status: offline")).toBeInTheDocument();
      });
    });

    it("renders away status", async () => {
      render(<Avatar alt="User" status="away" delayMs={0} />);

      await waitFor(() => {
        expect(screen.getByLabelText("Status: away")).toBeInTheDocument();
      });
    });

    it("renders busy status", async () => {
      render(<Avatar alt="User" status="busy" delayMs={0} />);

      await waitFor(() => {
        expect(screen.getByLabelText("Status: busy")).toBeInTheDocument();
      });
    });

    it("does not render status when not provided", async () => {
      render(<Avatar alt="User" delayMs={0} />);

      await waitFor(() => {
        const statusElement = screen.queryByLabelText(/Status:/);
        expect(statusElement).not.toBeInTheDocument();
      });
    });
  });

  describe("Sizes", () => {
    it("applies xs size", async () => {
      const { container } = render(<Avatar size="xs" alt="User" delayMs={0} />);
      await waitFor(() => {
        expect(container.firstChild).toHaveClass("h-6", "w-6");
      });
    });

    it("applies sm size", async () => {
      const { container } = render(<Avatar size="sm" alt="User" delayMs={0} />);
      await waitFor(() => {
        expect(container.firstChild).toHaveClass("h-8", "w-8");
      });
    });

    it("applies md size by default", async () => {
      const { container } = render(<Avatar alt="User" delayMs={0} />);
      await waitFor(() => {
        expect(container.firstChild).toHaveClass("h-10", "w-10");
      });
    });

    it("applies lg size", async () => {
      const { container } = render(<Avatar size="lg" alt="User" delayMs={0} />);
      await waitFor(() => {
        expect(container.firstChild).toHaveClass("h-12", "w-12");
      });
    });

    it("applies xl size", async () => {
      const { container } = render(<Avatar size="xl" alt="User" delayMs={0} />);
      await waitFor(() => {
        expect(container.firstChild).toHaveClass("h-16", "w-16");
      });
    });

    it("applies xxl size", async () => {
      const { container } = render(
        <Avatar size="xxl" alt="User" delayMs={0} />
      );
      await waitFor(() => {
        expect(container.firstChild).toHaveClass("h-24", "w-24");
      });
    });
  });

  describe("Accessibility", () => {
    it("forwards ref correctly", () => {
      const ref = jest.fn();
      render(<Avatar ref={ref} alt="User" delayMs={0} />);
      expect(ref).toHaveBeenCalled();
    });

    it("applies custom className", async () => {
      const { container } = render(
        <Avatar className="custom-class" alt="User" delayMs={0} />
      );
      await waitFor(() => {
        expect(container.firstChild).toHaveClass("custom-class");
      });
    });
  });
});
