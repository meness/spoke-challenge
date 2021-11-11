import { put, call } from 'redux-saga/effects';
import { fetchTasks, patchTaskStatus, fetchTaskById, editTask } from '../../utils/helpers/apis/task.util';
import { setTask, setTasks, updateTask } from './task.slice';

export function* fetchTasksSaga() {
  try {
    const tasks = yield call(fetchTasks);
    yield put(setTasks(tasks.data));
  } catch (e) {
    // TODO: Implement
  }
}

export function* updateTaskStatusSaga({ payload }) {
  try {
    const { taskId, taskStatus } = payload;
    const task = yield call(patchTaskStatus, taskId, taskStatus);
    yield put(updateTask(task.data));
  } catch (e) {
    // TODO: Implement
  }
}

export function* fetchTaskByIdSaga({ payload }) {
  try {
    const tasks = yield call(fetchTaskById, payload);
    yield put(setTask(tasks.data));
  } catch (e) {
    // TODO: Implement
  }
}

export function* editTaskSaga({ payload }) {
  try {
    const task = yield call(editTask, payload);
    yield put(updateTask(task.data));
  } catch (e) {
    // TODO: Implement
  }
}
