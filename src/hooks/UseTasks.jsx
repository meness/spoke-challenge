import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { isEmpty } from 'lodash';
import { getTasksSelector } from '../reducers/task/task.selectors';
import { fetchTasksAction } from '../reducers/task/task.actions';

const useTasks = () => {
  const storedTasks = useSelector(getTasksSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    // Prevent from refetching tasks intentionally
    if (!isEmpty(storedTasks)) return;

    dispatch(fetchTasksAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return storedTasks;
};

export default useTasks;
