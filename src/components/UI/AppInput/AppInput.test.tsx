import React from "react";
import { render, screen } from "@testing-library/react";
import { AppInput } from "./AppInput";

describe("AppInput", () => {
  test("renders without error message and icon", () => {
    render(<AppInput />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();
    const errorMessageElement = screen.queryByText("Ошибка!");
    expect(errorMessageElement).toBeNull();
    const iconElement = screen.queryByTestId("input-icon");
    expect(iconElement).toBeNull();
  });

  test("renders with error message and without icon", () => {
    render(<AppInput hasError={true} />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();
    const errorMessageElement = screen.getByText("Ошибка!");
    expect(errorMessageElement).toBeInTheDocument();
    const iconElement = screen.queryByTestId("input-icon");
    expect(iconElement).toBeNull();
  });

  test("renders with icon and without error message", () => {
    render(<AppInput iconName="icon" />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();
    const errorMessageElement = screen.queryByText("Ошибка!");
    expect(errorMessageElement).toBeNull();
  });

  test("renders with error message and icon", () => {
    render(<AppInput hasError={true} iconName="icon" />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();
    const errorMessageElement = screen.getByText("Ошибка!");
    expect(errorMessageElement).toBeInTheDocument();
  });
});
