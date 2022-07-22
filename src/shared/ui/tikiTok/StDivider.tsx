import { Divider, styled } from '@mui/material';

export const StDivider = styled(Divider)(({ theme }) => ({
  borderColor: theme.palette.secondary.main
}))