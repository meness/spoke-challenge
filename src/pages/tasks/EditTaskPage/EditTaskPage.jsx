import { Box, Card, TextField, CardContent } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { isEmpty } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import { getTaskByIdSelector } from '../../../reducers/task/task.selectors';
import { editTaskAction, fetchTaskByIdAction } from '../../../reducers/task/task.actions';

const EditTaskPage = () => {
  const storedTask = useSelector(getTaskByIdSelector);
  const [taskTitle, setTaskTitle] = useState();
  const { taskId } = useParams();
  const [shouldDisableForm, setShouldDisableForm] = useState(true);
  const [taskTitleHelperText, setTaskTitleHelperText] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTaskByIdAction(taskId));
  }, []);

  useEffect(() => {
    if (isEmpty(storedTask)) return;

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

    dispatch(editTaskAction(storedTask, taskTitle));
  };

  return (
    <Card>
      <CardContent>
        <Box component="form" onSubmit={handleFormSubmit} disabled={shouldDisableForm}>
          <Helmet>
            <title>Edit Task {taskId}</title>
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
            autoFocus
            onChange={(e) => setTaskTitle(e.target.value)}
            multiline
          />
          <LoadingButton
            loading={false}
            type="submit"
            color="secondary"
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
