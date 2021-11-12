import { createSlice } from '@reduxjs/toolkit';

const initialState = { tasks: [], task: {} };

const slice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    setTasks: (state, action) => {
      state.tasks = action.payload;
    },
    updateTaskStatus: (state, action) => {
      state.tasks = state.tasks.map((task) => {
        if (task.id === action.payload.id) {
          return { ...task, completed: action.payload.completed };
        }

        return task;
      });
    },
    updateTaskTitle: (state, action) => {
      const editedTask = { ...state.task, title: action.payload.title };

      // Update tasks state
      state.tasks = state.tasks.map((task) => {
        if (task.id === action.payload.id) {
          // Set `completed` intentionally to make sure the status doesn't change the first time we fetch the task
          return { ...editedTask, completed: task.completed };
        }

        return task;
      });

      // Update task state
      state.task = editedTask;
    },
    setTask: (state, action) => {
      state.task = action.payload;
    },
    addTask: (state, action) => {
      state.tasks.splice(0, 0, action.payload);
    },
  },
});

export const { setTasks, setTask, updateTaskStatus, updateTaskTitle, addTask } = slice.actions;

export default slice.reducer;
