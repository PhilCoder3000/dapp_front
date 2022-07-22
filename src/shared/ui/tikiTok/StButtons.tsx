import { ButtonProps, FormControl, styled } from '@mui/material';

export const StUploadButton = styled(FormControl)<ButtonProps>(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(1),
  right: theme.spacing(1),
  '& .MuiFormLabel-root': {
    padding: theme.spacing(1, 2),
    background: theme.palette.secondary.main,
    color: theme.palette.primary.dark,
    borderRadius: '5px',
    cursor: 'pointer',
  }
}))