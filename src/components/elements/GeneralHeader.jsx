import { AppBar, Toolbar, Typography, Box, IconButton } from '@mui/material';
import { GitHub } from '@mui/icons-material';
import { memo } from 'react';

const GeneralHeader = () => {
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Typography variant="h6" color="inherit" component="div">
          ⚡ Todo
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Box>
          <IconButton
            size="large"
            edge="end"
            onClick={() => {
              window.open('https://github.com/meness/spoke-challenge', '_blank');
            }}
            color="inherit"
          >
            <GitHub />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

GeneralHeader.propTypes = {};

export default memo(GeneralHeader);
