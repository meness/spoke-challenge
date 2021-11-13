import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect, useState } from 'react';
import { isEmpty } from 'lodash';
import { selectTask } from '../reducers/task/task.selectors';
import { editTaskAction, fetchTaskAction } from '../reducers/task/task.actions';

const useEditTask = () => {
  const { taskId } = useParams();
  const storedTask = useSelector(selectTask);
  const [taskTitle, setTaskTitle] = useState();
  const [isFormDisabled, setIsFormDisabled] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    // Prevent from refetching task intentionally
    if (!isEmpty(storedTask)) return;

    dispatch(fetchTaskAction(taskId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const isTaskTitleInvalid = isEmpty(taskTitle);

    setIsFormDisabled(isTaskTitleInvalid);
  }, [taskTitle]);

  useEffect(() => {
    if (isEmpty(storedTask)) return;

    setTaskTitle(storedTask.title);
    setIsEditing(false);
  }, [storedTask]);

  const handleEditTask = useCallback(
    (e) => {
      if (!isEmpty(e)) {
        e.preventDefault();
        e.stopPropagation();
      }

      setIsEditing(true);
      dispatch(editTaskAction({ ...storedTask, title: taskTitle }));
    },
    [storedTask, dispatch, taskTitle],
  );

  return { storedTask, handleEditTask, taskTitle, setTaskTitle, isFormDisabled, isEditing };
};

export default useEditTask;
