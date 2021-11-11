import { takeLatest, takeEvery } from 'redux-saga/effects';
import { editTaskSaga, fetchTaskByIdSaga, fetchTasksSaga, updateTaskStatusSaga } from './reducers/task/task.saga';
import SAGA_TYPE from './saga.types';

function* mySaga() {
  yield takeLatest(SAGA_TYPE.FETCH_TASKS, fetchTasksSaga);
  yield takeEvery(SAGA_TYPE.UPDATE_TASK_STATUS, updateTaskStatusSaga);
  yield takeLatest(SAGA_TYPE.EDIT_TASK, editTaskSaga);
  yield takeLatest(SAGA_TYPE.FETCH_TASK, fetchTaskByIdSaga);
}

export default mySaga;
