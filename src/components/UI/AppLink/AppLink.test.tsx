//@ts-nocheck
import { AppLink } from "./AppLink";
import { render, screen } from "@testing-library/react";

describe("Тестируем компонетeнт AppLink", () => {
  const renderAppLink = (linkLabel, hasIcon) =>
    render(<AppLink linkLabel={linkLabel} hasIcon={hasIcon} />);

  test("Компонент отображается", () => {
    renderAppLink("Тест");

    const linkElement = screen.getByText("Тест");

    expect(linkElement).toBeInTheDocument();

    // screen.debug();
  });

  test("AppLink отображается с иконкой arrow", () => {
    renderAppLink('Тест', true);

    const appLinkElement = screen.getByTestId("Тест");
    const linkElementIcon = screen.getByTestId("arrow-icon");

    expect(appLinkElement).toBeInTheDocument();
    expect(linkElementIcon).toBeInTheDocument();

    // screen.debug();
  });
});
