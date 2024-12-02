import React from 'react';
import Counter from './components/Counter';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold text-center mb-8">
          Тестовий додаток з лічильником
        </h1>
        <Counter />
      </div>
    </div>
  );
}

export default App;