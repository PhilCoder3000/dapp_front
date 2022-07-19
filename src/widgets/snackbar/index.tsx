import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useAppStore } from 'shared/hooks/redux';
import { closeSnackbar } from 'shared/store/snackbar/slice';
import { Alert, Slide, SlideProps } from '@mui/material';

export function AppSnackbar() {
  const { state, dispatch } = useAppStore();

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(closeSnackbar());
  };

  return (
    <Snackbar
      open={state.snackbar.isOpen}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      action={
        <IconButton
          size="small"
          aria-label="close"
          color="inherit"
          onClick={handleClose}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      }
      TransitionComponent={SlideTransition}
    >
      <Alert severity={state.snackbar.severity} variant="filled">
        {state.snackbar.message}
      </Alert>
    </Snackbar>
  );
}

function SlideTransition(props: SlideProps) {
  return <Slide {...props} direction="up" />;
}
