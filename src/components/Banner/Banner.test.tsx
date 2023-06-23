import { fireEvent, render, screen } from "@testing-library/react";
import { Banner } from "./Banner";

describe("<Banner />", () => {
  beforeEach(() => {
    render(<Banner />);
  });

  test("Should render Banner component", async () => {
    const bannerElement = screen.getByTestId("home");
    expect(bannerElement).toBeDefined();
  });

  test('Should render button "Lets connect"', () => {
    const connectButton = screen.getByText("Let's Connect");
    expect(connectButton).toBeDefined();
  });

  test("Should click on button", () => {
    const consoleLogSpy = vi.spyOn(console, "log");
    const connectButton = screen.getByText("Let's Connect");
    fireEvent.click(connectButton);
    expect(consoleLogSpy).toHaveBeenCalledWith("connect");
  });
});
