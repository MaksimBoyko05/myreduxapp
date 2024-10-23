import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import YourComponent from './YourComponent';
import NewUserForm from './NewUserForm';
import UpdateUserForm from './UpdateUserForm';
import { Toaster } from 'react-hot-toast';
import DeleteUserButton from './DeleteUserButton';

function App() {
  return (
    <Provider store={store}>
      <div>
      <Toaster />
        <YourComponent />
        <NewUserForm />
        <UpdateUserForm />
        <DeleteUserButton />
      </div>
    </Provider>
  );
}

export default App;