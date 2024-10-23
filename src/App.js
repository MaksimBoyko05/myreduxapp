import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import YourComponent from './YourComponent';
import NewUserForm from './NewUserForm';

function App() {
  return (
    <Provider store={store}>
      <div>
        <YourComponent />
        <NewUserForm />
      </div>
    </Provider>
  );
}

export default App;