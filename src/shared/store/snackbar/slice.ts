import { AlertColor } from '@mui/material';
import { createSlice } from '@reduxjs/toolkit';

interface IState {
  isOpen: boolean;
  message: string;
  severity: AlertColor;
}

const initialState: IState = {
  isOpen: false,
  message: '',
  severity: 'info',
};

export const snackbar = createSlice({
  name: 'snackbar',
  initialState,
  reducers: {
    setIsOpenSnackbar(state, { payload }) {
      state.isOpen = true;
      state.message = payload.message;
      state.severity = payload.severity;
    },
    closeSnackbar(state) {
      state.isOpen = false;
      state.message = '';
      state.severity = 'info';
    },
  },
});

export const { setIsOpenSnackbar, closeSnackbar } = snackbar.actions;
