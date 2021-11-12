import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect } from 'react';
import { isEmpty } from 'lodash';
import { getTaskByIdSelector } from '../reducers/task/task.selectors';
import { editTaskAction, fetchTaskByIdAction } from '../reducers/task/task.actions';

const useEditTask = () => {
  const { taskId } = useParams();
  const storedTask = useSelector(getTaskByIdSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    // Prevent from refetching task intentionally
    if (!isEmpty(storedTask)) return;

    dispatch(fetchTaskByIdAction(taskId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleEditTask = useCallback(
    (editedTask) => {
      dispatch(editTaskAction({ ...storedTask, ...editedTask }));
    },
    [storedTask, dispatch],
  );

  return [storedTask, handleEditTask];
};

export default useEditTask;
