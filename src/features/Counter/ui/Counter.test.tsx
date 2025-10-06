import Counter from "@/features/Counter/ui/Counter";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

describe("Counter 컴포넌트", () => {
  it("초기 렌더링 시 Count: 0을 표시해야 한다", () => {
    render(<Counter />);
    expect(screen.getByText(/Count:\s*0/i)).toBeInTheDocument();
  });

  it("증가 버튼 클릭 시 카운트가 1 증가해야 한다", async () => {
    render(<Counter />);
    const user = userEvent.setup();
    const incBtn = screen.getByRole("button", { name: /증가/i });

    await user.click(incBtn);

    expect(screen.getByText(/Count:\s*1/i)).toBeInTheDocument();
  });
});
