import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('відображає заголовок додатку', () => {
    render(<App />);
    const headerElement = screen.getByText(/Тестовий додаток з лічильником/i);
    expect(headerElement).toBeInTheDocument();
  });

  test('відображає компонент лічильника', () => {
    render(<App />);
    const counterText = screen.getByText(/Лічильник: 0/i);
    expect(counterText).toBeInTheDocument();
  });
});