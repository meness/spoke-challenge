import { createSlice } from '@reduxjs/toolkit';

const initialState = { tasks: [], task: {} };

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
    setTask: (state, action) => {
      state.task = action.payload;
    },
  },
});

export const { setTasks, updateTask, setTask } = slice.actions;

export default slice.reducer;
