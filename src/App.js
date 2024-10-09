import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import Counter from './components/counter';
import Tasks from './components/Tasks';

function App() {
  return (
    <Provider store={store}>
      <div>
        <Counter />
        <Tasks />
      </div>
    </Provider>
  );
}

export default App;
