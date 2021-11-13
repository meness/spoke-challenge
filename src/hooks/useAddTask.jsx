import { useDispatch } from 'react-redux';
import { useCallback, useEffect, useState } from 'react';
import { addTaskAction } from '../reducers/task/task.actions';
import useTasks from './UseTasks';

const useAddTask = () => {
  const dispatch = useDispatch();
  const storedTasks = useTasks();
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    setIsAdding(false);
  }, [storedTasks]);

  const handleAddTask = useCallback(
    (newTask) => {
      setIsAdding(true);
      dispatch(addTaskAction(newTask));
    },
    [dispatch],
  );

  return { handleAddTask, isAdding };
};

export default useAddTask;
