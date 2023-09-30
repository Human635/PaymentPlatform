//@ts-nocheck
import { render, screen } from "@testing-library/react";
import { AppImage } from "./AppImage";

describe("Тестируем компонент AppImage", () => {
  const renderAppImage = (src, altSrc) => render(<AppImage imgSrc={src} imgAlt={altSrc} />);

  test("Компонент отображается", () => {
    renderAppImage("test.png", "test-img");

    const imgElement = screen.getByAltText("test-img");

    expect(imgElement).toBeInTheDocument();

    // screen.debug();
  });

  test("Компонент отображается с правильным url картинки", () => {
    renderAppImage("test.png", "test-img");

    const imgElement = screen.getByAltText("test-img");

    expect(imgElement).toHaveAttribute("src", "./img/test.png");

    // screen.debug();
  });
});
