import { createSlice } from '@reduxjs/toolkit';

const initialState = { tasks: [] };

const slice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    setTasks: (state, action) => {
      state.tasks = action.payload;
    },
    updateTask: (state, action) => {
      state.tasks = state.tasks.map((task) => {
        if (task.id === action.payload.id) {
          return action.payload;
        }

        return task;
      });
    },
  },
});

export const { setTasks, updateTask } = slice.actions;

export default slice.reducer;
