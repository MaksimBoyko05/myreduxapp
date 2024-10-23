import axios from 'axios';

export const fetchData = () => async (dispatch) => {
  dispatch({ type: 'FETCH_DATA_REQUEST' });
  try {
    const response = await axios.get('https://reqres.in/api/users');
    dispatch({ type: 'FETCH_DATA_SUCCESS', payload: response.data.data });
  } catch (error) {
    dispatch({ type: 'FETCH_DATA_FAILURE', error: error.message });
  }
};