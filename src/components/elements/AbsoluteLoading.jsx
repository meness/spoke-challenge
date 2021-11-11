import { CircularProgress } from '@mui/material';

const AbsoluteLoading = () => {
  return <CircularProgress disableShrink sx={{ position: 'absolute', left: '50%', top: '50%' }} />;
};

AbsoluteLoading.propTypes = {};

export default AbsoluteLoading;
