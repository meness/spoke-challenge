import Http from '../utils/helpers/http.helper';

const Api = {
  fetchTasks: () => {
    return Http.get('todos');
  },

  /**
   * Patch the status of the given task.
   *
   * @param {number} taskId
   * @param {boolean} newTaskStatus
   */
  patchTaskStatus: (taskId, newTaskStatus) => {
    return Http.patch(`todos/${taskId}`, { completed: newTaskStatus });
  },

  editTask: (editedTask) => {
    return Http.put(`todos/${editedTask.id}`, editedTask);
  },

  /**
   * Fetch corresponding task.
   *
   * @param {number} taskId
   */
  fetchTaskById: (taskId) => {
    return Http.get(`todos/${taskId}`);
  },

  addNewTask: (newTask) => {
    return Http.post('todos', newTask);
  },
};

export default Api;
