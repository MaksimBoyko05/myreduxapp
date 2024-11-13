import axios from 'axios';

export const addUser = (userData) => async (dispatch) => {
  try {
    const response = await axios.post('https://reqres.in/api/users', userData);
    dispatch({ type: 'ADD_USER_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'ADD_USER_FAILURE', error: error.message });
  }
};