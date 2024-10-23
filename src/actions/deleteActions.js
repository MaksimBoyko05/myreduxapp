import axios from 'axios';
import { toast } from 'react-hot-toast';

export const deleteUser = (id) => async (dispatch) => {
  try {
    await axios.delete(`https://reqres.in/api/users/${id}`);
    dispatch({ type: 'DELETE_USER_SUCCESS', payload: id });
    toast.success('User deleted successfully!');
  } catch (error) {
    dispatch({ type: 'DELETE_USER_FAILURE', error: error.message });
    toast.error('Failed to delete user!');
  }
};