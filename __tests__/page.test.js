/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import Home from "../src/app/page";

// Mock next/image for Jest
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} alt={props.alt} />;
  },
}));

describe("Home Page", () => {
  test("renders main hero heading", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      level: 1,
      name: /ieee dholakpur — build the future/i,
    });

    expect(heading).toBeInTheDocument();
  });

  test("renders navigation links", () => {
    render(<Home />);

    const navSchedule = screen.getByRole("link", { name: "Schedule" });
    const navSpeakers = screen.getByRole("link", { name: "Speakers" });
    const navRegister = screen.getByRole("link", { name: "Register" });

    expect(navSchedule).toBeInTheDocument();
    expect(navSpeakers).toBeInTheDocument();
    expect(navRegister).toBeInTheDocument();
  });

  test("renders speakers names", () => {
    render(<Home />);

    expect(screen.getByText("Dr. Priya Saxena")).toBeInTheDocument();
    expect(screen.getByText("Karan Mehta")).toBeInTheDocument();
    expect(screen.getByText("Nisha Verma")).toBeInTheDocument();
  });

  test("renders footer copyright text", () => {
    render(<Home />);

    const footerText = screen.getByText(/©\s*\d{4}\s*ieee dholakpur/i);
    expect(footerText).toBeInTheDocument();
  });
});
