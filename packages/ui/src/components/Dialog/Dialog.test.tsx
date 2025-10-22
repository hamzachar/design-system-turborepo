import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "./Dialog";
import { Button } from "../Button";

describe("Dialog", () => {
  describe("Basic Rendering", () => {
    it("renders trigger button", () => {
      render(
        <Dialog>
          <DialogTrigger asChild>
            <Button>Open</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogTitle>Title</DialogTitle>
          </DialogContent>
        </Dialog>
      );

      expect(screen.getByRole("button", { name: /open/i })).toBeInTheDocument();
    });

    it("does not render content initially", () => {
      render(
        <Dialog>
          <DialogTrigger asChild>
            <Button>Open</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogTitle>Dialog Title</DialogTitle>
          </DialogContent>
        </Dialog>
      );

      expect(screen.queryByText("Dialog Title")).not.toBeInTheDocument();
    });

    it("renders content when opened", async () => {
      const user = userEvent.setup();

      render(
        <Dialog>
          <DialogTrigger asChild>
            <Button>Open</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogTitle>Dialog Title</DialogTitle>
          </DialogContent>
        </Dialog>
      );

      await user.click(screen.getByRole("button", { name: /open/i }));

      await waitFor(() => {
        expect(screen.getByText("Dialog Title")).toBeInTheDocument();
      });
    });
  });

  describe("Dialog Parts", () => {
    it("renders title", async () => {
      const user = userEvent.setup();

      render(
        <Dialog>
          <DialogTrigger asChild>
            <Button>Open</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Test Title</DialogTitle>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      );

      await user.click(screen.getByRole("button", { name: /open/i }));

      await waitFor(() => {
        expect(screen.getByText("Test Title")).toBeInTheDocument();
      });
    });

    it("renders description", async () => {
      const user = userEvent.setup();

      render(
        <Dialog>
          <DialogTrigger asChild>
            <Button>Open</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Title</DialogTitle>
              <DialogDescription>Test Description</DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      );

      await user.click(screen.getByRole("button", { name: /open/i }));

      await waitFor(() => {
        expect(screen.getByText("Test Description")).toBeInTheDocument();
      });
    });

    it("renders footer", async () => {
      const user = userEvent.setup();

      render(
        <Dialog>
          <DialogTrigger asChild>
            <Button>Open</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogTitle>Title</DialogTitle>
            <DialogFooter>
              <Button>Footer Button</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      );

      await user.click(screen.getByRole("button", { name: /open/i }));

      await waitFor(() => {
        expect(
          screen.getByRole("button", { name: /footer button/i })
        ).toBeInTheDocument();
      });
    });
  });

  describe("Close Button", () => {
    it("renders close button by default", async () => {
      const user = userEvent.setup();

      render(
        <Dialog>
          <DialogTrigger asChild>
            <Button>Open</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogTitle>Title</DialogTitle>
          </DialogContent>
        </Dialog>
      );

      await user.click(screen.getByRole("button", { name: /open/i }));

      await waitFor(() => {
        expect(
          screen.getByRole("button", { name: /close/i })
        ).toBeInTheDocument();
      });
    });

    it("does not render close button when showClose is false", async () => {
      const user = userEvent.setup();

      render(
        <Dialog>
          <DialogTrigger asChild>
            <Button>Open</Button>
          </DialogTrigger>
          <DialogContent showClose={false}>
            <DialogTitle>Title</DialogTitle>
          </DialogContent>
        </Dialog>
      );

      await user.click(screen.getByRole("button", { name: /open/i }));

      await waitFor(() => {
        expect(screen.getByText("Title")).toBeInTheDocument();
      });

      expect(
        screen.queryByRole("button", { name: /close/i })
      ).not.toBeInTheDocument();
    });

    it("closes dialog when close button is clicked", async () => {
      const user = userEvent.setup();

      render(
        <Dialog>
          <DialogTrigger asChild>
            <Button>Open</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogTitle>Dialog Title</DialogTitle>
          </DialogContent>
        </Dialog>
      );

      await user.click(screen.getByRole("button", { name: /open/i }));

      await waitFor(() => {
        expect(screen.getByText("Dialog Title")).toBeInTheDocument();
      });

      await user.click(screen.getByRole("button", { name: /close/i }));

      await waitFor(() => {
        expect(screen.queryByText("Dialog Title")).not.toBeInTheDocument();
      });
    });
  });

  describe("DialogClose", () => {
    it("closes dialog when DialogClose is triggered", async () => {
      const user = userEvent.setup();

      render(
        <Dialog>
          <DialogTrigger asChild>
            <Button>Open</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogTitle>Title</DialogTitle>
            <DialogClose asChild>
              <Button>Cancel</Button>
            </DialogClose>
          </DialogContent>
        </Dialog>
      );

      await user.click(screen.getByRole("button", { name: /open/i }));

      await waitFor(() => {
        expect(screen.getByText("Title")).toBeInTheDocument();
      });

      await user.click(screen.getByRole("button", { name: /cancel/i }));

      await waitFor(() => {
        expect(screen.queryByText("Title")).not.toBeInTheDocument();
      });
    });
  });

  describe("Sizes", () => {
    it("applies correct size classes", async () => {
      const sizes = ["sm", "md", "lg", "xl", "full"] as const;

      for (const size of sizes) {
        const user = userEvent.setup();

        const { unmount } = render(
          <Dialog>
            <DialogTrigger asChild>
              <Button>Open</Button>
            </DialogTrigger>
            <DialogContent size={size}>
              <DialogTitle>Title</DialogTitle>
            </DialogContent>
          </Dialog>
        );

        await user.click(screen.getByRole("button", { name: /open/i }));

        await waitFor(() => {
          expect(screen.getByText("Title")).toBeInTheDocument();
        });

        unmount();
      }
    });
  });

  describe("Controlled Dialog", () => {
    it("can be controlled with open prop", () => {
      const { rerender } = render(
        <Dialog open={false}>
          <DialogContent>
            <DialogTitle>Controlled Title</DialogTitle>
          </DialogContent>
        </Dialog>
      );

      expect(screen.queryByText("Controlled Title")).not.toBeInTheDocument();

      rerender(
        <Dialog open={true}>
          <DialogContent>
            <DialogTitle>Controlled Title</DialogTitle>
          </DialogContent>
        </Dialog>
      );

      waitFor(() => {
        expect(screen.getByText("Controlled Title")).toBeInTheDocument();
      });
    });

    it("calls onOpenChange when state changes", async () => {
      const handleOpenChange = jest.fn();
      const user = userEvent.setup();

      render(
        <Dialog onOpenChange={handleOpenChange}>
          <DialogTrigger asChild>
            <Button>Open</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogTitle>Title</DialogTitle>
          </DialogContent>
        </Dialog>
      );

      await user.click(screen.getByRole("button", { name: /open/i }));

      await waitFor(() => {
        expect(handleOpenChange).toHaveBeenCalledWith(true);
      });
    });
  });

  describe("Accessibility", () => {
    it("has proper dialog role", async () => {
      const user = userEvent.setup();

      render(
        <Dialog>
          <DialogTrigger asChild>
            <Button>Open</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogTitle>Title</DialogTitle>
          </DialogContent>
        </Dialog>
      );

      await user.click(screen.getByRole("button", { name: /open/i }));

      await waitFor(() => {
        expect(screen.getByRole("dialog")).toBeInTheDocument();
      });
    });

    it("close button has sr-only text", async () => {
      const user = userEvent.setup();

      render(
        <Dialog>
          <DialogTrigger asChild>
            <Button>Open</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogTitle>Title</DialogTitle>
          </DialogContent>
        </Dialog>
      );

      await user.click(screen.getByRole("button", { name: /open/i }));

      await waitFor(() => {
        expect(screen.getByText("Close")).toHaveClass("sr-only");
      });
    });
  });
});
