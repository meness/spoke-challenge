/* eslint-disable import/prefer-default-export */
import { createSelector } from '@reduxjs/toolkit';

const getTasks = (state) => state.task.tasks;
export const getTasksSelector = createSelector(getTasks, (tasks) => tasks);
