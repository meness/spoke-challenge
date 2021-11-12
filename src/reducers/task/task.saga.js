import { put, call } from 'redux-saga/effects';
import { fetchTasks, patchTaskStatus, fetchTaskById, editTask, addNewTask } from '../../utils/helpers/apis/task.util';
import { addTask, setTask, setTasks, updateTaskStatus, updateTaskTitle } from './task.slice';

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
    yield put(updateTaskStatus(task.data));
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
    yield put(updateTaskTitle(task.data));
  } catch (e) {
    // TODO: Implement
  }
}

export function* addTaskSaga({ payload }) {
  try {
    const task = yield call(addNewTask, payload);
    yield put(addTask(task.data));
  } catch (e) {
    // TODO: Implement
  }
}
