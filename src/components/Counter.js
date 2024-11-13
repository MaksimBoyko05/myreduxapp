import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prev => prev + 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="p-4 border rounded-lg shadow-sm">
      <h2 className="text-xl font-bold mb-4">Лічильник: {count}</h2>
      <div className="space-x-2">
        <button
          onClick={increment}
          className="bg-blue-500 text-white px-4 py-2 rounded"
          data-testid="increment-button"
        >
          Збільшити
        </button>
        <button
          onClick={reset}
          className="bg-gray-500 text-white px-4 py-2 rounded"
          data-testid="reset-button"
        >
          Скинути
        </button>
      </div>
    </div>
  );
};

export default Counter;