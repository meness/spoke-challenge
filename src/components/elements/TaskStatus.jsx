import { CircularProgress, ToggleButton } from '@mui/material';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { CheckCircle, CheckCircleOutline } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import SAGA_ACTION from '../../saga.actions';

const TaskStatus = ({ taskId, taskStatus }) => {
  const [isPending, setIsPending] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isPending) setIsPending(false);
  }, [taskStatus]);

  const toggleTaskStatus = () => {
    dispatch({ type: SAGA_ACTION.UPDATE_TASK_STATUS, payload: { taskId, taskStatus: !taskStatus } });
    setIsPending(!isPending);
  };

  const toggleIcon = () => {
    if (isPending) return <CircularProgress size={24} />;
    if (taskStatus) return <CheckCircle color="success" />;
    return <CheckCircleOutline color="action" />;
  };

  return (
    <ToggleButton value={taskStatus} onChange={toggleTaskStatus}>
      {toggleIcon()}
    </ToggleButton>
  );
};

TaskStatus.propTypes = {
  taskId: PropTypes.number.isRequired,
  taskStatus: PropTypes.bool.isRequired,
};

export default TaskStatus;
