import { Box, Card, TextField, CardContent } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useEffect, useState } from 'react';
import { isEmpty } from 'lodash';
import { Helmet } from 'react-helmet-async';
import useTask from '../../../hooks/useTask';

const EditTaskPage = () => {
  const [storedTask, handleEditTask] = useTask();
  const [taskTitle, setTaskTitle] = useState();
  const [shouldDisableForm, setShouldDisableForm] = useState(true);
  const [taskTitleHelperText, setTaskTitleHelperText] = useState();

  useEffect(() => {
    setTaskTitle(storedTask.title);
  }, [storedTask]);

  useEffect(() => {
    const isTaskTitleInvalid = isEmpty(taskTitle);

    setShouldDisableForm(isTaskTitleInvalid);
  }, [taskTitle]);

  useEffect(() => {
    if (isEmpty(taskTitle)) setTaskTitleHelperText('Task is required');
    else setTaskTitleHelperText(undefined);
  }, [taskTitle]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    handleEditTask({ title: taskTitle });
  };

  return (
    <Card>
      <CardContent>
        <Box component="form" onSubmit={handleFormSubmit} disabled={shouldDisableForm}>
          <Helmet>
            <title>Edit Task</title>
          </Helmet>
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
            Edit Task
          </LoadingButton>
        </Box>
      </CardContent>
    </Card>
  );
};

EditTaskPage.propTypes = {};

export default EditTaskPage;
