import { GridActionsCellItem } from '@mui/x-data-grid';
import { Helmet } from 'react-helmet-async';
import { Box, Tooltip, Paper, Button } from '@mui/material';
import { Title, CheckCircle, Edit } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useMemo, useState } from 'react';
import ToggleTaskStatus from '../../components/elements/ToggleTaskStatus';
import IconicText from '../../components/elements/IconicText';
import useTasks from '../../hooks/UseTasks';
import AddNewTaskModal from '../../components/elements/AddNewTaskModal';
import NoOutlineDataGrid from '../../components/elements/NoOutlineDataGrid';

const TasksPage = () => {
  const { storedTasks, isFetching } = useTasks();
  const navigate = useNavigate();
  const [tablePageSize, setTablePageSize] = useState(10);
  const [isAddNewTaskModalOpen, setIsAddNewTaskModalOpen] = useState(false);
  const columns = useMemo(
    () => [
      {
        field: 'status',
        type: 'boolean',
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
        field: 'title',
        headerName: <IconicText icon={Title} text="Task" />,
        flex: 1,
        sortable: false,
      },
      {
        field: 'actions',
        type: 'actions',
        getActions: (params) => [
          <GridActionsCellItem
            icon={<Edit />}
            onClick={() => navigate(`${params.id}`, { replace: false })}
            label="Edit"
            color="action"
          />,
        ],
        width: 100,
        sortable: false,
        headerAlign: 'center',
        align: 'center',
      },
    ],
    [navigate],
  );

  return (
    <>
      <Helmet>
        <title>Tasks</title>
      </Helmet>
      <Box sx={{ marginBlockEnd: 1, display: 'flex', alignItems: 'center', justifyContent: 'end' }}>
        <Button variant="contained" onClick={() => setIsAddNewTaskModalOpen(true)}>
          Add New Task
        </Button>
      </Box>
      <Box style={{ height: 400, width: '100%' }} component={Paper}>
        <Box sx={{ display: 'flex', height: '100%' }}>
          <Box flexGrow={1}>
            <NoOutlineDataGrid
              rows={storedTasks}
              loading={isFetching}
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
      <AddNewTaskModal open={isAddNewTaskModalOpen} onClose={() => setIsAddNewTaskModalOpen(false)} />
    </>
  );
};

TasksPage.propTypes = {};

export default TasksPage;
