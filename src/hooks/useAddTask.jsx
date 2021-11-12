import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { addTaskAction } from '../reducers/task/task.actions';

const useAddTask = () => {
  const dispatch = useDispatch();

  const handleAddTask = useCallback(
    (newTask) => {
      dispatch(addTaskAction(newTask));
    },
    [dispatch],
  );

  return [handleAddTask];
};

export default useAddTask;
