import { click } from "@testing-library/user-event/dist/click";
import { Counter } from "./Counter";
import { fireEvent,  render, screen } from "@testing-library/react";

describe('Тестируем компонент counter', () => {
    test('Счетчик отображается с начальным значением', () => { 
        render(<Counter />) 
        const counterElement = screen.getByText('Счетчик: 0')
        expect(counterElement).toBeInTheDocument()
    })

    test('Счетчик увеличивается по клику', () => { 
        render(<Counter />) 
        const increaseButton = screen.getByText('Увеличить')
        const counterElement = screen.getByText('Счетчик: 0')

        fireEvent.click(increaseButton)

        expect(counterElement).toHaveTextContent('Счетчик: 1')
    })

    test('10  кликов по кнопке увеличивают счетчик на 10', () => {
        render(<Counter />) 
        const increaseButton = screen.getByText('Увеличить')
        const counterElement = screen.getByText('Счетчик: 0')

        for (let i = 0; i < 10; i++) {
            fireEvent.click(increaseButton)
        }
        expect(counterElement).toHaveTextContent('Счетчик: 10')
    })
})