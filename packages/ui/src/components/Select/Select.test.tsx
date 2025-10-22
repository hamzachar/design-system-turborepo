import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./Select";

describe("Select", () => {
  describe("Basic Rendering", () => {
    it("renders trigger with placeholder", () => {
      render(
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select option" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">Option 1</SelectItem>
          </SelectContent>
        </Select>
      );

      expect(screen.getByText("Select option")).toBeInTheDocument();
    });

    it("renders with default value", () => {
      render(
        <Select defaultValue="1">
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">Option 1</SelectItem>
            <SelectItem value="2">Option 2</SelectItem>
          </SelectContent>
        </Select>
      );

      expect(screen.getByText("Option 1")).toBeInTheDocument();
    });
  });

  describe("Interactions", () => {
    it("opens content when trigger is clicked", async () => {
      const user = userEvent.setup();

      render(
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">Option 1</SelectItem>
            <SelectItem value="2">Option 2</SelectItem>
          </SelectContent>
        </Select>
      );

      await user.click(screen.getByRole("combobox"));

      await waitFor(() => {
        expect(
          screen.getByRole("option", { name: "Option 1" })
        ).toBeInTheDocument();
      });
    });

    it("selects item when clicked", async () => {
      const user = userEvent.setup();

      render(
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">Option 1</SelectItem>
            <SelectItem value="2">Option 2</SelectItem>
          </SelectContent>
        </Select>
      );

      await user.click(screen.getByRole("combobox"));

      await waitFor(() => {
        expect(
          screen.getByRole("option", { name: "Option 2" })
        ).toBeInTheDocument();
      });

      await user.click(screen.getByRole("option", { name: "Option 2" }));

      await waitFor(() => {
        expect(screen.getByText("Option 2")).toBeInTheDocument();
      });
    });
  });

  describe("Disabled State", () => {
    it("disables trigger when disabled prop is true", () => {
      render(
        <Select disabled>
          <SelectTrigger>
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">Option 1</SelectItem>
          </SelectContent>
        </Select>
      );

      expect(screen.getByRole("combobox")).toBeDisabled();
    });

    it("disabled items cannot be selected", async () => {
      const user = userEvent.setup();

      render(
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">Option 1</SelectItem>
            <SelectItem value="2" disabled>
              Option 2
            </SelectItem>
          </SelectContent>
        </Select>
      );

      await user.click(screen.getByRole("combobox"));

      await waitFor(() => {
        const disabledOption = screen.getByRole("option", { name: "Option 2" });
        expect(disabledOption).toHaveAttribute("data-disabled");
      });
    });
  });

  describe("Controlled", () => {
    it("can be controlled with value prop", () => {
      const { rerender } = render(
        <Select value="1">
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">Option 1</SelectItem>
            <SelectItem value="2">Option 2</SelectItem>
          </SelectContent>
        </Select>
      );

      expect(screen.getByText("Option 1")).toBeInTheDocument();

      rerender(
        <Select value="2">
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">Option 1</SelectItem>
            <SelectItem value="2">Option 2</SelectItem>
          </SelectContent>
        </Select>
      );

      expect(screen.getByText("Option 2")).toBeInTheDocument();
    });

    it("calls onValueChange when value changes", async () => {
      const handleChange = jest.fn();
      const user = userEvent.setup();

      render(
        <Select onValueChange={handleChange}>
          <SelectTrigger>
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">Option 1</SelectItem>
            <SelectItem value="2">Option 2</SelectItem>
          </SelectContent>
        </Select>
      );

      await user.click(screen.getByRole("combobox"));

      await waitFor(() => {
        expect(
          screen.getByRole("option", { name: "Option 1" })
        ).toBeInTheDocument();
      });

      await user.click(screen.getByRole("option", { name: "Option 1" }));

      await waitFor(() => {
        expect(handleChange).toHaveBeenCalledWith("1");
      });
    });
  });

  describe("Error State", () => {
    it("applies error styling when error prop is true", () => {
      render(
        <Select>
          <SelectTrigger error>
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">Option 1</SelectItem>
          </SelectContent>
        </Select>
      );

      const trigger = screen.getByRole("combobox");
      expect(trigger).toHaveClass("border-error-500");
    });
  });

  describe("Accessibility", () => {
    it("has proper combobox role", () => {
      render(
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">Option 1</SelectItem>
          </SelectContent>
        </Select>
      );

      expect(screen.getByRole("combobox")).toBeInTheDocument();
    });
  });
});
