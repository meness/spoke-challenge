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
