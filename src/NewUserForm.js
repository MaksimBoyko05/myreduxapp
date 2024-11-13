import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from './actions/postActions';

const NewUserForm = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser({ name }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />
      <button type="submit">Add User</button>
    </form>
  );
};

export default NewUserForm;