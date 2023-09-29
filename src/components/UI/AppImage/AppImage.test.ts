//@ts-nocheck
import { AppImage } from "./AppImage";
import { render, screen } from "@testing-library/react";

// describe("Тестируем компонент AppImage", () => {
//   const renderAppImage = (src, altSrc) =>
//     render(<AppImage altSrc={alt} src={src} />);

//   test("Компонент отображается", () => {
//     renderAppImage("test.png", "test-img");

//     const imgElement = screen.getByAltText("img");

//     expect(imgElement).toBeInTheDocument();

//     // screen.debug();
//   });

//   test("Компонент отображается с правильным url картинки", () => {
//     renderAppImage("test.png", "test-img");

//     const imgElement = screen.getByAltText("img");

//     expect(imgElement).toHaveAttribute("src", "./img/test.png");

//     // screen.debug();
//   });
// });
