import { createSelector } from '@reduxjs/toolkit';

const getTasks = (state) => state.task.tasks;
export const selectTasks = createSelector(getTasks, (tasks) => tasks);

const getTask = (state) => state.task.task;
export const selectTask = createSelector(getTask, (task) => task);
