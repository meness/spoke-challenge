import PropTypes from 'prop-types';
import { Fade, Modal, Box, Typography, Backdrop, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useEffect, useState } from 'react';
import { isEmpty } from 'lodash';
import useAddTask from '../../hooks/useAddTask';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const AddNewTaskModal = ({ open, onClose }) => {
  const [handleAddTask] = useAddTask();
  const [taskTitle, setTaskTitle] = useState();
  const [shouldDisableForm, setShouldDisableForm] = useState(true);
  const [taskTitleHelperText, setTaskTitleHelperText] = useState();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    handleAddTask({ title: taskTitle, userId: 1, completed: false });
  };

  useEffect(() => {
    const isTaskTitleInvalid = isEmpty(taskTitle);

    setShouldDisableForm(isTaskTitleInvalid);
  }, [taskTitle]);

  useEffect(() => {
    if (isEmpty(taskTitle)) setTaskTitleHelperText('Task is required');
    else setTaskTitleHelperText(undefined);
  }, [taskTitle]);

  return (
    <Modal
      open={open}
      onClose={onClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <Typography id="transition-modal-title" variant="h6" component="h2">
            Add New Task
          </Typography>
          <Box component="form" onSubmit={handleFormSubmit} disabled={shouldDisableForm} sx={{ marginBlockStart: 2 }}>
            <TextField
              required
              fullWidth
              id="task-title"
              value={taskTitle}
              error={isEmpty(taskTitle)}
              helperText={taskTitleHelperText}
              label="Task"
              variant="outlined"
              placeholder="Write anything…"
              autoFocus
              onChange={(e) => setTaskTitle(e.target.value)}
              multiline
            />
            <LoadingButton
              loading={false}
              type="submit"
              color="primary"
              variant="contained"
              disabled={shouldDisableForm}
              sx={{ mt: 3, mb: 2 }}
            >
              Add Task
            </LoadingButton>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
};

AddNewTaskModal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
};

AddNewTaskModal.defaultProps = {
  open: false,
  onClose: undefined,
};

export default AddNewTaskModal;
