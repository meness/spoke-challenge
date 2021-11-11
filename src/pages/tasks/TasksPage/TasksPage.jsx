import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DataGrid } from '@mui/x-data-grid';
import { Helmet } from 'react-helmet-async';
import Box from '@mui/material/Box';
import { Title, Done } from '@mui/icons-material';
import { getTasksSelector } from '../../../reducers/task/task.selector';
import ToggleTaskStatus from '../../../components/elements/ToggleTaskStatus';
import SAGA_ACTION from '../../../saga.actions';
import IconicText from '../../../components/elements/IconicText';

const columns = [
  {
    field: 'title',
    headerName: <IconicText icon={Title} text="Title" />,
    flex: 1,
  },
  {
    field: 'status',
    headerName: <IconicText icon={Done} text="Status" />,
    flex: 0.2,
    renderCell: ({ row }) => {
      return <ToggleTaskStatus taskId={row.id} taskStatus={row.completed} />;
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
          pageSize={10}
          autoHeight
          disableColumnMenu
          density="comfortable"
          disableSelectionOnClick
        />
      </Box>
    </>
  );
};

TasksPage.propTypes = {};

export default TasksPage;
