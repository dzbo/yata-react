import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";
import { test, expect } from "vitest";

test("can change language", () => {
  render(<App />);

  expect(screen.getByText("Hello React!"));

  fireEvent.click(screen.getByText("DE"));

  expect(screen.getByText("Hallo App!"));
});
