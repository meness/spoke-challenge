import Http from '../utils/helpers/http.helper';

const Api = {
  fetchTasks: () => {
    return Http.get('todos');
  },

  /**
   * Patch a single field in the given task.
   *
   * @param {number} taskId
   * @param {object} editedTaskField
   */
  patchTask: (taskId, editedTaskField) => {
    return Http.patch(`todos/${taskId}`, editedTaskField);
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
