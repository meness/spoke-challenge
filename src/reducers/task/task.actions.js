import SAGA_ACTION from '../../saga.actions';

export const toggleTaskStatusAction = (taskId, taskStatus) => {
  return { type: SAGA_ACTION.UPDATE_TASK_STATUS, payload: { taskId, taskStatus } };
};

export const fetchTaskByIdAction = (taskId) => {
  return { type: SAGA_ACTION.FETCH_TASK, payload: taskId };
};

export const editTaskAction = (storedTask, taskTitle) => {
  return { type: SAGA_ACTION.EDIT_TASK, payload: { ...storedTask, title: taskTitle } };
};

export const fetchTasksAction = () => {
  return { type: SAGA_ACTION.FETCH_TASKS };
};
