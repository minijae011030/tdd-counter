import Counter from "@/features/Counter/ui/Counter";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Counter", () => {
  test("초기값은 0이어야 한다", () => {
    render(<Counter />);
    expect(screen.getByText("Count: 0")).toBeInTheDocument();
  });

  test("버튼 클릭 시 값이 증가해야 한다", () => {
    render(<Counter />);
    fireEvent.click(screen.getByText("증가"));
    expect(screen.getByText("Count: 1")).toBeInTheDocument();
  });
});
