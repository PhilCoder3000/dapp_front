import React from 'react';
import { Box, CircularProgress } from '@mui/material';

export function Fallback() {
  return (
    <Box sx={{ display: 'flex', width: '100%', height: '100%' }}>
      <CircularProgress size={200} sx={{ margin: 'auto' }} />
    </Box>
  );
}
