import { NavBar } from "./NavBar";
import { render, screen } from "@testing-library/react";

describe("<NavBar />", () => {
  beforeEach(() => {
    render(<NavBar />);
  });

  test("Should render NavBar component", () => {
    expect(screen.queryByText(/navbar/i)).toBeDefined();
  });
});
