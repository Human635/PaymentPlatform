import React from "react";
import { render, screen } from "@testing-library/react";
import { AppButton, IButtonProps } from "./AppButton";

describe("AppButton", () => {
  const buttonProps: IButtonProps = {
    buttonLabel: "Test Button",
    isDisabled: false,
  };

  it("renders button with correct label", () => {
    render(<AppButton {...buttonProps} />);
    const buttonElement = screen.getByText(buttonProps.buttonLabel);
    expect(buttonElement).toBeInTheDocument();
  });

  it("renders disabled button when isDisabled is true", () => {
    const disabledButtonProps: IButtonProps = {
      ...buttonProps,
      isDisabled: true,
    };
    render(<AppButton {...disabledButtonProps} />);
    const buttonElement = screen.getByText(disabledButtonProps.buttonLabel);
    expect(buttonElement).toBeDisabled();
  });
});
