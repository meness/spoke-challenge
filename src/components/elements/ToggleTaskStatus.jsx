import { CircularProgress, IconButton } from '@mui/material';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { CheckCircle, CheckCircleOutline } from '@mui/icons-material';
import { useCallback, useEffect, useState } from 'react';
import { toggleTaskStatusAction } from '../../reducers/task/task.actions';

const ToggleTaskStatus = ({ taskId, taskStatus }) => {
  const [isPending, setIsPending] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsPending((currentIsPending) => {
      if (currentIsPending) return !currentIsPending;
      return currentIsPending;
    });
  }, [taskStatus]);

  const toggleTaskStatus = () => {
    // We don't support undo yet
    if (isPending) return;

    dispatch(toggleTaskStatusAction({ taskId, taskStatus: !taskStatus }));
    setIsPending(!isPending);
  };

  const toggleIcon = useCallback(() => {
    if (isPending) return <CircularProgress size={24} color="info" />;
    if (taskStatus) return <CheckCircle color="success" />;
    return <CheckCircleOutline color="action" />;
  }, [isPending, taskStatus]);

  return (
    <IconButton disabled={isPending} value={taskStatus} onClick={toggleTaskStatus}>
      {toggleIcon()}
    </IconButton>
  );
};

ToggleTaskStatus.propTypes = {
  taskId: PropTypes.number.isRequired,
  taskStatus: PropTypes.bool.isRequired,
};

export default ToggleTaskStatus;
