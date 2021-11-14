import { styled } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

const NoOutlineDataGrid = styled(DataGrid)(() => ({
  '& .MuiDataGrid-cell:focus-within, & .MuiDataGrid-cell:focus': {
    outline: 'none !important',
  },
  '& .MuiDataGrid-columnHeader:focus-within, & .MuiDataGrid-columnHeader:focus': {
    outline: 'none !important',
  },
}));

export default NoOutlineDataGrid;
