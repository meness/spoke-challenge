import { takeLatest } from 'redux-saga/effects';
import { fetchTasksSaga, updateTaskStatus } from './reducers/task/task.saga';

function* mySaga() {
  yield takeLatest('FETCH_TASKS', fetchTasksSaga);
  yield takeLatest('UPDATE_TASK_STATUS', updateTaskStatus);
}

export default mySaga;
