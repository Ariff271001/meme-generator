import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import Main from "./Main";

describe("Main", () => {
  test("diplay the top and bottom text lines and the meme image", () => {
    render(<Main />);

    expect(screen.getByText("One does not simply")).toBeInTheDocument();
    expect(screen.getByText("Walk into Mordor")).toBeInTheDocument();
    expect(screen.getByRole("img").src).toContain(
      "http://i.imgflip.com/1bij.jpg",
    );
  });

  test("testing input label, input field and submit button", () => {
    render(<Main />)

    expect(screen.getByText("Top Text")).toBeInTheDocument()
    expect(screen.getByText("Bottom Text")).toBeInTheDocument()
    expect(screen.getByPlaceholderText("One does not simply")).toBeInTheDocument()
    expect(screen.getByPlaceholderText("Walk into Mordor")).toBeInTheDocument()
    expect(screen.getByRole("button").textContent).toContain("Get a new meme image 🖼")
  });
});
