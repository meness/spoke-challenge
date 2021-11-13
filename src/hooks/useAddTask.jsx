import { useDispatch } from 'react-redux';
import { useCallback, useEffect, useState } from 'react';
import { isEmpty } from 'lodash';
import { addTaskAction } from '../reducers/task/task.actions';
import useTasks from './UseTasks';

const useAddTask = () => {
  const dispatch = useDispatch();
  const storedTasks = useTasks();
  const [isAdding, setIsAdding] = useState(false);
  const [taskTitle, setTaskTitle] = useState();
  const [isFormDisabled, setIsFormDisabled] = useState(true);

  useEffect(() => {
    setIsAdding(false);
  }, [storedTasks]);

  useEffect(() => {
    const isTaskTitleInvalid = isEmpty(taskTitle);

    setIsFormDisabled(isTaskTitleInvalid);
  }, [taskTitle]);

  const handleAddTask = useCallback(
    (e) => {
      if (!isEmpty(e)) {
        e.preventDefault();
        e.stopPropagation();
      }

      setIsAdding(true);
      dispatch(addTaskAction({ title: taskTitle, userId: 1, completed: false }));
    },
    [dispatch, taskTitle],
  );

  return { handleAddTask, isAdding, taskTitle, setTaskTitle, isFormDisabled };
};

export default useAddTask;
