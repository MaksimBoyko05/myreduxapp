import axios from 'axios';
import { toast } from 'react-hot-toast';

export const updateUser = (id, updatedData) => async (dispatch) => {
  try {
    const response = await axios.put(`https://reqres.in/api/users/${id}`, updatedData);
    dispatch({ type: 'UPDATE_USER_SUCCESS', payload: response.data });
    toast.success('User updated successfully!');
  } catch (error) {
    dispatch({ type: 'UPDATE_USER_FAILURE', error: error.message });
    toast.error('Failed to update user!');
  }
};