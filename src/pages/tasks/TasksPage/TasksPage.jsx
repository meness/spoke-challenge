import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DataGrid } from '@mui/x-data-grid';
import { Helmet } from 'react-helmet-async';
import Box from '@mui/material/Box';
import { getTasksSelector } from '../../../reducers/task/task.selector';
import TaskStatus from '../../../components/elements/TaskStatus';
import SAGA_ACTION from '../../../saga.actions';

const columns = [
  { field: 'title', headerName: 'Title', flex: 1 },
  {
    field: 'status',
    headerName: 'Status',
    flex: 1,
    filterable: false,
    renderCell: ({ row }) => {
      return <TaskStatus taskId={row.id} taskStatus={row.completed} />;
    },
  },
];

const TasksPage = () => {
  const dispatch = useDispatch();
  const storedTasks = useSelector(getTasksSelector);

  useEffect(() => {
    dispatch({ type: SAGA_ACTION.FETCH_TASKS });
  }, []);

  return (
    <>
      <Helmet>
        <title>Tasks</title>
      </Helmet>
      <Box>
        <DataGrid
          rows={storedTasks}
          columns={columns}
          pageSize={5}
          autoHeight
          autoPageSize
          density="comfortable"
          disableSelectionOnClick
        />
      </Box>
    </>
  );
};

TasksPage.propTypes = {};

export default TasksPage;
