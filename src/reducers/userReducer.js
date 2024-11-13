const initialState = {
  users: [],
  error: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DELETE_USER_SUCCESS':
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.payload),
      };
    case 'DELETE_USER_FAILURE':
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};