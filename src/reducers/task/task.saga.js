import { put, call } from 'redux-saga/effects';
import Api from '../../services/api.service';
import { addTask, setTask, setTasks, updateTaskStatus, updateTaskTitle } from './task.slice';

export function* fetchTasksSaga() {
  try {
    const tasks = yield call(Api.fetchTasks);
    yield put(setTasks(tasks.data));
  } catch (e) {
    // TODO: Implement
  }
}

export function* editTaskStatusSaga({ payload }) {
  try {
    const { id, ...completed } = payload;
    const task = yield call(Api.patchTask, id, completed);
    yield put(updateTaskStatus(task.data));
  } catch (e) {
    // TODO: Implement
  }
}

export function* fetchTaskByIdSaga({ payload }) {
  try {
    const tasks = yield call(Api.fetchTaskById, payload);
    yield put(setTask(tasks.data));
  } catch (e) {
    // TODO: Implement
  }
}

export function* editTaskSaga({ payload }) {
  try {
    const task = yield call(Api.editTask, payload);
    yield put(updateTaskTitle(task.data));
  } catch (e) {
    // TODO: Implement
  }
}

export function* addTaskSaga({ payload }) {
  try {
    const task = yield call(Api.addTask, payload);
    yield put(addTask(task.data));
  } catch (e) {
    // TODO: Implement
  }
}
