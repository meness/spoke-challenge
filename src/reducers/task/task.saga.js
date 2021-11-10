import { put, call } from 'redux-saga/effects';
import { fetchTasks, patchTaskStatus } from '../../utils/helpers/apis/task.util';
import { setTasks, updateTask } from './task.slice';

export function* fetchTasksSaga() {
  try {
    const tasks = yield call(fetchTasks);
    yield put(setTasks(tasks.data));
  } catch (e) {
    // TODO: Implement
  }
}

export function* updateTaskStatus(action) {
  try {
    const { taskId, taskStatus } = action.payload;
    const task = yield call(patchTaskStatus, taskId, taskStatus);
    yield put(updateTask(task.data));
  } catch (e) {
    // TODO: Implement
  }
}
