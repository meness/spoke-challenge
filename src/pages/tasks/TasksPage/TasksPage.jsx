import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DataGrid } from '@mui/x-data-grid';
import { Helmet } from 'react-helmet-async';
import { IconButton, Box, Tooltip, Paper } from '@mui/material';
import { Title, CheckCircle, Edit } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { getTasksSelector } from '../../../reducers/task/task.selectors';
import ToggleTaskStatus from '../../../components/elements/ToggleTaskStatus';
import IconicText from '../../../components/elements/IconicText';
import { fetchTasksAction } from '../../../reducers/task/task.actions';

const TasksPage = () => {
  const dispatch = useDispatch();
  const storedTasks = useSelector(getTasksSelector);
  const navigate = useNavigate();
  const columns = [
    {
      field: 'title',
      headerName: <IconicText icon={Title} text="Title" />,
      flex: 1,
    },
    {
      field: 'status',
      headerName: (
        <Tooltip title="Status" placement="top">
          <CheckCircle />
        </Tooltip>
      ),
      flex: 1,
      headerAlign: 'center',
      align: 'center',
      renderCell: ({ row }) => {
        return <ToggleTaskStatus taskId={row.id} taskStatus={row.completed} />;
      },
    },
    {
      field: 'edit',
      headerName: (
        <Tooltip title="Edit" placement="top">
          <Edit />
        </Tooltip>
      ),
      flex: 0.2,
      sortable: false,
      headerAlign: 'center',
      align: 'center',
      renderCell: ({ row }) => {
        return (
          <IconButton color="primary" onClick={() => navigate(`${row.id}`, { replace: false })}>
            <Edit />
          </IconButton>
        );
      },
    },
  ];

  useEffect(() => {
    dispatch(fetchTasksAction());
  }, []);

  return (
    <>
      <Helmet>
        <title>Tasks</title>
      </Helmet>
      <Box style={{ height: 400, width: '100%' }} component={Paper}>
        <Box sx={{ display: 'flex', height: '100%' }}>
          <Box flexGrow={1}>
            <DataGrid
              rows={storedTasks}
              columns={columns}
              pageSize={10}
              disableColumnMenu
              density="comfortable"
              disableSelectionOnClick
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

TasksPage.propTypes = {};

export default TasksPage;
