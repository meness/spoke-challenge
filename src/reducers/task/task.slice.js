import { createSlice } from '@reduxjs/toolkit';

const initialState = { tasks: [], task: {} };

const slice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    setTasks: (state, { payload }) => {
      state.tasks = payload;
    },
    editTaskStatus: (state, { payload }) => {
      state.tasks = state.tasks.map((task) => {
        if (task.id === payload.id) {
          return { ...task, completed: payload.completed };
        }

        return task;
      });
    },
    updateTaskTitle: (state, { payload }) => {
      const editedTask = { ...state.task, title: payload.title };

      // Update tasks state
      state.tasks = state.tasks.map((task) => {
        if (task.id === payload.id) {
          // Set `completed` intentionally to make sure the status doesn't change the first time we fetch the task
          return { ...editedTask, completed: task.completed };
        }

        return task;
      });

      // Update task state
      state.task = editedTask;
    },
    setTask: (state, { payload }) => {
      state.task = payload;
    },
    addTask: (state, { payload }) => {
      state.tasks.splice(0, 0, payload);
    },
  },
});

export const { setTasks, setTask, editTaskStatus, updateTaskTitle, addTask } = slice.actions;

export default slice.reducer;
