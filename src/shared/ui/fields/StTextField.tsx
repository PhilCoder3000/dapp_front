import { styled, TextField, TextFieldProps } from '@mui/material';
import React from 'react';

type StTextFieldProps = TextFieldProps;

const StyledTextField = styled(TextField)<StTextFieldProps>(({ theme }) => ({
  background: theme.palette.primary.dark,
  borderRadius: '10px',
  width: '700px',
  '& span': {
    fontWeight: 700,
    color: theme.palette.secondary.main,
  },
}));

export function StTextField(props: StTextFieldProps) {
  return <StyledTextField fullWidth {...props} />;
}
