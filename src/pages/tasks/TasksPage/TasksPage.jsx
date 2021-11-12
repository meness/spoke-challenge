import { DataGrid } from '@mui/x-data-grid';
import { Helmet } from 'react-helmet-async';
import { IconButton, Box, Tooltip, Paper } from '@mui/material';
import { Title, CheckCircle, Edit } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ToggleTaskStatus from '../../../components/elements/ToggleTaskStatus';
import IconicText from '../../../components/elements/IconicText';
import useTasks from '../../../hooks/UseTasks';

const TasksPage = () => {
  const storedTasks = useTasks();
  const navigate = useNavigate();
  const [tablePageSize, setTablePageSize] = useState(10);
  const columns = [
    {
      field: 'title',
      headerName: <IconicText icon={Title} text="Title" />,
      flex: 1,
      sortable: false,
    },
    {
      field: 'status',
      headerName: (
        <Tooltip title="Status" placement="top">
          <CheckCircle />
        </Tooltip>
      ),
      width: 100,
      headerAlign: 'center',
      align: 'center',
      valueGetter: ({ row }) => row.completed,
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
      width: 100,
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
              pageSize={tablePageSize}
              onPageSizeChange={(newPageSize) => setTablePageSize(newPageSize)}
              rowsPerPageOptions={[10, 25, 50]}
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
