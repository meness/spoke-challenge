import { createAction } from '@reduxjs/toolkit';
import SAGA_TYPE from '../../saga.types';

export const toggleTaskStatusAction = createAction(SAGA_TYPE.UPDATE_TASK_STATUS);

export const fetchTaskByIdAction = createAction(SAGA_TYPE.FETCH_TASK);

export const editTaskAction = createAction(SAGA_TYPE.EDIT_TASK);

export const fetchTasksAction = createAction(SAGA_TYPE.FETCH_TASKS);

export const addTaskAction = createAction(SAGA_TYPE.ADD_TASK);
