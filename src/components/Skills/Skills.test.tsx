import { render, screen } from "@testing-library/react";
import { Skills } from "./Skills";

describe("<Skills />", () => {
  beforeEach(() => {
    render(<Skills />);
  });

  test("Should render the Skills component", () => {
    const skillsSection = screen.getByTestId("skills-section");
    const title = screen.getByText("Skills");
    const description = screen.getByText(
      "Mostly of my skills are for the frontend development, but also I have been prepared for the backend, stay tuned for the new ones."
    );

    expect(skillsSection).toBeDefined();
    expect(title).toBeDefined();
    expect(description).toBeDefined();
  });
});
