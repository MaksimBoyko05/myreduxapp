import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask: (state, action) => { state.push(action.payload) },
    removeTask: (state, action) => state.filter((task, index) => index !== action.payload)
  }
});

export const { addTask, removeTask } = tasksSlice.actions;
export default tasksSlice.reducer;
