import { Accordion } from "./Accordion";
import { render, screen, fireEvent } from "@testing-library/react";

describe("<Accordion/>", () => {
  beforeEach(() => {
    render(
      <Accordion titleCard="Hola Accordion">
        <h3>My title</h3>
        <p>Test example of some content</p>
      </Accordion>
    );
  });

  test("Should render component <Accordion/>", () => {
    expect(screen.getByTitle("accordion")).toBeDefined();
  });

  test("Should title to be showing all the time", () => {
    expect(screen.getByText("Hola Accordion")).toBeDefined();
  });

  test("Should Accordion content not to be showing at the start", () => {
    expect(screen.queryByText(/content/i)).toBeNull();
  });

  test("Should show content after click on title", () => {
    const button = screen.getByText("Open");
    fireEvent.click(button);

    expect(screen.queryByText(/content/i)).toBeDefined();
  });

  test("Should hide content after click on title", () => {
    const button = screen.getByText("Open");
    fireEvent.click(button);
    fireEvent.click(button);

    expect(screen.queryByText(/content/i)).toBeNull();
  });
});
