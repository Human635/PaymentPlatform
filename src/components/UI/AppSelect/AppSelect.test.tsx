import { render, screen } from "@testing-library/react";
import { AppSelect } from "./AppSelect";

test("renders select component with options", () => {
  const variants = [
    { value: "en", title: "English" },
    { value: "fr", title: "French" },
    { value: "es", title: "Spanish" },
  ];

  render(<AppSelect variants={variants} />);

  const optionElements = screen.getAllByRole("option");

  expect(optionElements.length).toBe(variants.length);

  optionElements.forEach((optionElement, index) => {
    expect(optionElement).toHaveValue(variants[index].value);
    expect(optionElement).toHaveTextContent(variants[index].title);
  });
});
