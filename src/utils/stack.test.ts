//@ts-nocheck
import { Stack } from "./stack";

describe("Проверяем свою реализацию стека", () => {
  const mystack = new Stack();
  test("в стек попадает значение", () => {
    mystack.push(900);

    expect(mystack.length()).toBe(1);
  });

  test("В стеке находится актуальное значение", () => {
    expect(mystack.pick()).toBe(900);
  });

  test("Метод рор удаляет элемент из стека", () => {
    mystack.pop();

    expect(mystack.length()).toBe(0);
  });
});
