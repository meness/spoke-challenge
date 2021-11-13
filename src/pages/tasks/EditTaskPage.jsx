import { Box, Card, TextField, CardContent } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useEffect, useState } from 'react';
import { isEmpty } from 'lodash';
import { Helmet } from 'react-helmet-async';
import useEditTask from '../../hooks/useEditTask';

const EditTaskPage = () => {
  const { handleEditTask, taskTitle, setTaskTitle, isFormDisabled, isEditing } = useEditTask();
  const [taskTitleHelperText, setTaskTitleHelperText] = useState();

  useEffect(() => {
    if (isEmpty(taskTitle)) setTaskTitleHelperText('Task is required');
    else setTaskTitleHelperText(undefined);
  }, [taskTitle]);

  return (
    <Card>
      <CardContent>
        <Box component="form" onSubmit={handleEditTask} disabled={isFormDisabled}>
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
            loading={isEditing}
            type="submit"
            color="primary"
            variant="contained"
            disabled={isFormDisabled}
            sx={{ marginBlockStart: 3 }}
          >
            Save Changes
          </LoadingButton>
        </Box>
      </CardContent>
    </Card>
  );
};

EditTaskPage.propTypes = {};

export default EditTaskPage;
