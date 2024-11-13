import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateUser } from './actions/updateActions';

const UpdateUserForm = ({ userId, currentName }) => {
  const [name, setName] = useState(currentName || '');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser(userId, { name }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter new name"
      />
      <button type="submit">Update User</button>
    </form>
  );
};

export default UpdateUserForm;