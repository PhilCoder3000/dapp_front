import { Paper, styled } from '@mui/material';

export const StPaper = styled(Paper)(({ theme }) => ({
  width: '320px', 
  maxWidth: '100%',
  background: 'transparent',
  border: `1px solid ${theme.palette.secondary.main}`
}))