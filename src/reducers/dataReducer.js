const initialState = {
    data: [],
    loading: false,
    error: null,
  };
  
  const dataReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_DATA_REQUEST':
        return { ...state, loading: true };
      case 'FETCH_DATA_SUCCESS':
        return { ...state, loading: false, data: action.payload };
      case 'FETCH_DATA_FAILURE':
        return { ...state, loading: false, error: action.error };
      case 'ADD_USER_SUCCESS':
        return { ...state, data: [...state.data, action.payload] };
      case 'ADD_USER_FAILURE':
        return { ...state, error: action.error };
      default:
        return state;
    }
  };
  
  export default dataReducer;
  