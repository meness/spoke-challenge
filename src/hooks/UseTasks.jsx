import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { isEmpty } from 'lodash';
import { selectTasks } from '../reducers/task/task.selectors';
import { fetchTasksAction } from '../reducers/task/task.actions';

const useTasks = () => {
  const storedTasks = useSelector(selectTasks);
  const dispatch = useDispatch();
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    // Prevent from refetching tasks intentionally
    if (!isEmpty(storedTasks)) {
      setIsFetching(false);
      return;
    }

    setIsFetching(true);
    dispatch(fetchTasksAction());
  }, [storedTasks, dispatch]);

  return { storedTasks, isFetching };
};

export default useTasks;
