import { takeLatest } from 'redux-saga/effects';
import { fetchTasksSaga, updateTaskStatusSaga } from './reducers/task/task.saga';
import SAGA_ACTION from './saga.actions';

function* mySaga() {
  yield takeLatest(SAGA_ACTION.FETCH_TASKS, fetchTasksSaga);
  yield takeLatest(SAGA_ACTION.UPDATE_TASK_STATUS, updateTaskStatusSaga);
}

export default mySaga;
