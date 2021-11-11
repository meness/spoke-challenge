import SAGA_TYPE from '../../saga.types';

export const toggleTaskStatusAction = (taskId, taskStatus) => {
  return { type: SAGA_TYPE.UPDATE_TASK_STATUS, payload: { taskId, taskStatus } };
};

export const fetchTaskByIdAction = (taskId) => {
  return { type: SAGA_TYPE.FETCH_TASK, payload: taskId };
};

export const editTaskAction = (storedTask, taskTitle) => {
  return { type: SAGA_TYPE.EDIT_TASK, payload: { ...storedTask, title: taskTitle } };
};

export const fetchTasksAction = () => {
  return { type: SAGA_TYPE.FETCH_TASKS };
};
