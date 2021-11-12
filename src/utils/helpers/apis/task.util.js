import Http from '../../../services/Http/http.service';

export const fetchTasks = () => {
  return Http.get('todos');
};

/**
 * Patch the status of the given task.
 *
 * @param {number} taskId
 * @param {boolean} newTaskStatus
 */
export const patchTaskStatus = (taskId, newTaskStatus) => {
  return Http.patch(`todos/${taskId}`, { completed: newTaskStatus });
};

/**
 * Edit the given task.
 *
 * @param {any} editedTask
 */
export const editTask = (editedTask) => {
  return Http.put(`todos/${editedTask.id}`, editedTask);
};

/**
 * Fetch corresponding task.
 *
 * @param {number} taskId
 */
export const fetchTaskById = (taskId) => {
  return Http.get(`todos/${taskId}`);
};

export const addNewTask = (newTask) => {
  return Http.post('todos', newTask);
};
