import { Box, Card, TextField, CardContent } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { isEmpty } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import SAGA_ACTION from '../../../saga.actions';
import { getTaskByIdSelector } from '../../../reducers/task/task.selector';

const EditTaskPage = () => {
  const storedTask = useSelector(getTaskByIdSelector);
  const [taskTitle, setTaskTitle] = useState();
  const { taskId } = useParams();
  const [shouldDisableForm, setShouldDisableForm] = useState(true);
  const [taskTitleHelperText, setTaskTitleHelperText] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: SAGA_ACTION.FETCH_TASK, payload: taskId });
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

    dispatch({ type: SAGA_ACTION.EDIT_TASK, payload: { ...storedTask, title: taskTitle } });
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
