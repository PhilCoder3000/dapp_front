import React from 'react';
import { Box, BoxProps, CircularProgress, styled } from '@mui/material';

export function Fallback() {
  return (
    <Box sx={{ display: 'flex', width: '100%', height: '100%', marginTop: '20vh' }}>
      <CircularProgress size={200} sx={{ margin: 'auto' }} />
    </Box>
  );
}

const StBox = styled(Box)<BoxProps>(({ theme }) => ({
  position: 'absolute',
  top: '0px',
  left: '0px',
  margin: '0',
  padding: '0',
  width: '100vw',
  height: '100vh',
  display: 'flex',
  background: '#000',
  overflow: 'hidden',
}))

export function AppFallback() {
  return (
    <StBox>
      <CircularProgress size={200} sx={{ margin: 'auto' }} />
    </StBox>
  )
}