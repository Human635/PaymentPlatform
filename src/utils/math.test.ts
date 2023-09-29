import { divide, isEven, makeSquare, multiply, sum } from "./math";

describe('Тестирование мат операций ', () => {
    test('Зузультат сложения 1 и 2 завно 3', () => {
        expect (sum(1, 2)).toBe(3)
    })
    
    test ('результат умножения 5 и 6 равен 30', () => {
        expect(multiply(5, 6)).toBe(30)
    })
    
    test ('результат возведения в квадрат 9', () => {
        expect(makeSquare(9, 2)).toBe(81)
    })
    
    test ('результат деления 100 на 10', () => {
        expect(divide(100, 10)).toBe(10)
    })
    
    test ('результат проверки на четность числа 100', () => {
        expect(isEven(100)).toBe(true)
    })

})