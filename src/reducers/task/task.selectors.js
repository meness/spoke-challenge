import { createSelector } from '@reduxjs/toolkit';

const getTasks = (state) => state.task.tasks;
export const getTasksSelector = createSelector(getTasks, (tasks) => tasks);

const getTaskById = (state) => state.task.task;
export const getTaskSelector = createSelector(getTaskById, (task) => task);
