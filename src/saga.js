import { takeLatest, takeEvery } from 'redux-saga/effects';
import {
  addTaskSaga,
  editTaskSaga,
  fetchTaskSaga,
  fetchTasksSaga,
  editTaskStatusSaga,
} from './reducers/task/task.saga';
import SAGA_TYPE from './saga.types';

function* mySaga() {
  yield takeLatest(SAGA_TYPE.FETCH_TASKS, fetchTasksSaga);
  yield takeEvery(SAGA_TYPE.EDIT_TASK_STATUS, editTaskStatusSaga);
  yield takeLatest(SAGA_TYPE.EDIT_TASK, editTaskSaga);
  yield takeLatest(SAGA_TYPE.FETCH_TASK, fetchTaskSaga);
  yield takeLatest(SAGA_TYPE.ADD_TASK, addTaskSaga);
}

export default mySaga;
