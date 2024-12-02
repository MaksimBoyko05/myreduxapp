import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Counter from './Counter';

describe('Counter Component', () => {
  test('відображає початкове значення лічильника', () => {
    render(<Counter />);
    const counterText = screen.getByText(/Лічильник: 0/i);
    expect(counterText).toBeInTheDocument();
  });

  test('збільшує значення при натисканні кнопки "Збільшити"', () => {
    render(<Counter />);
    const incrementButton = screen.getByTestId('increment-button');
    
    fireEvent.click(incrementButton);
    expect(screen.getByText(/Лічильник: 1/i)).toBeInTheDocument();
    
    fireEvent.click(incrementButton);
    expect(screen.getByText(/Лічильник: 2/i)).toBeInTheDocument();
  });

  test('скидає значення до 0 при натисканні кнопки "Скинути"', () => {
    render(<Counter />);
    const incrementButton = screen.getByTestId('increment-button');
    const resetButton = screen.getByTestId('reset-button');
    
    // Збільшуємо значення
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    expect(screen.getByText(/Лічильник: 2/i)).toBeInTheDocument();
    
    // Скидаємо значення
    fireEvent.click(resetButton);
    expect(screen.getByText(/Лічильник: 0/i)).toBeInTheDocument();
  });
});