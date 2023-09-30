//@ts-nocheck
import { AppInput } from "./AppInput";
import { render, screen } from "@testing-library/react";

describe("Тест компонента AppInput", () => {
  const renderAppInput = (iconName, hasError) =>
    render(<AppInput hasError={hasError} iconName={iconName} />);

  test("компонент отображается", () => {
    renderAppInput("Тест");

    const inputElement = screen.getByText("Тест");

    expect(inputElement).toBeInTheDocument();
  });

  // test("AppInput ", () => {
  //   renderAppInput('Ошибка!', true);

  //   const errorMessage = screen.getByText("Ошибка!");

  //   expect(errorMessage).toHaveTextContent('Ошибка!');

  //   // screen.debug();
  // });
});
