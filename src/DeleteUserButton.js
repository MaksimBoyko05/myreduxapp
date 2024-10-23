import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteUser } from './actions/deleteActions';

const DeleteUserButton = ({ userId }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteUser(userId));
  };

  return <button onClick={handleDelete}>Delete User</button>;
};

export default DeleteUserButton;