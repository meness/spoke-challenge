import { takeLatest, takeEvery } from 'redux-saga/effects';
import { editTaskSaga, fetchTaskByIdSaga, fetchTasksSaga, updateTaskStatusSaga } from './reducers/task/task.saga';
import SAGA_ACTION from './saga.actions';

function* mySaga() {
  yield takeLatest(SAGA_ACTION.FETCH_TASKS, fetchTasksSaga);
  yield takeEvery(SAGA_ACTION.UPDATE_TASK_STATUS, updateTaskStatusSaga);
  yield takeLatest(SAGA_ACTION.EDIT_TASK, editTaskSaga);
  yield takeLatest(SAGA_ACTION.FETCH_TASK, fetchTaskByIdSaga);
}

export default mySaga;
