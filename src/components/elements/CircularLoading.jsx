import { CircularProgress } from '@mui/material';

const CircularLoading = () => {
  return <CircularProgress disableShrink sx={{ position: 'absolute', left: '50%', top: '50%' }} />;
};

CircularLoading.propTypes = {};

export default CircularLoading;
