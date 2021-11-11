import { CircularProgress, IconButton } from '@mui/material';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { CheckCircle, CheckCircleOutline } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import { toggleTaskStatusAction } from '../../reducers/task/task.actions';

const ToggleTaskStatus = ({ taskId, taskStatus }) => {
  const [isPending, setIsPending] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isPending) setIsPending(false);
  }, [taskStatus]);

  const toggleTaskStatus = () => {
    // We don't support undo yet
    if (isPending) return;

    dispatch(toggleTaskStatusAction({ taskId, taskStatus: !taskStatus }));
    setIsPending(!isPending);
  };

  const toggleIcon = () => {
    if (isPending) return <CircularProgress size={24} color="info" />;
    if (taskStatus) return <CheckCircle color="success" />;
    return <CheckCircleOutline color="action" />;
  };

  return (
    <IconButton value={taskStatus} onClick={toggleTaskStatus}>
      {toggleIcon()}
    </IconButton>
  );
};

ToggleTaskStatus.propTypes = {
  taskId: PropTypes.number.isRequired,
  taskStatus: PropTypes.bool.isRequired,
};

export default ToggleTaskStatus;
