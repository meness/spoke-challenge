import { memo } from 'react';
import { CircularProgress } from '@mui/material';

const AbsoluteLoading = () => {
  return (
    <CircularProgress
      disableShrink
      sx={{ margin: 'auto', position: 'absolute', left: 0, top: 0, right: 0, bottom: 0 }}
    />
  );
};

AbsoluteLoading.propTypes = {};

export default memo(AbsoluteLoading);
