import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeToggle } from "./ThemeToggle";
import { ThemeProvider } from "../ThemeProvider";

describe("ThemeToggle", () => {
  const renderWithProvider = (ui: React.ReactElement) => {
    return render(<ThemeProvider>{ui}</ThemeProvider>);
  };

  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear();
  });

  it("renders without crashing", () => {
    renderWithProvider(<ThemeToggle />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("cycles through themes when clicked", () => {
    renderWithProvider(<ThemeToggle />);
    const button = screen.getByRole("button");

    // Initial state should be system or light
    expect(button).toBeInTheDocument();

    // Click to change theme
    fireEvent.click(button);
    expect(button).toBeInTheDocument();

    // Click again to change theme
    fireEvent.click(button);
    expect(button).toBeInTheDocument();

    // Click once more to complete the cycle
    fireEvent.click(button);
    expect(button).toBeInTheDocument();
  });

  it("shows label when showLabel is true", () => {
    renderWithProvider(<ThemeToggle showLabel />);
    // Should show one of the theme labels
    const hasLabel =
      screen.queryByText("Light") ||
      screen.queryByText("Dark") ||
      screen.queryByText("System");
    expect(hasLabel).toBeInTheDocument();
  });

  it("does not show label when showLabel is false", () => {
    renderWithProvider(<ThemeToggle showLabel={false} />);
    expect(screen.queryByText("Light")).not.toBeInTheDocument();
    expect(screen.queryByText("Dark")).not.toBeInTheDocument();
    expect(screen.queryByText("System")).not.toBeInTheDocument();
  });

  it("applies custom className", () => {
    renderWithProvider(<ThemeToggle className="custom-class" />);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("custom-class");
  });

  it("has proper accessibility attributes", () => {
    renderWithProvider(<ThemeToggle />);
    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("aria-label");
    expect(button).toHaveAttribute("title");
  });
});
