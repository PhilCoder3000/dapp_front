import { Container, styled } from '@mui/material';

export const StContainer = styled(Container)(({ theme }) => ({
  position: 'relative',
  marginLeft: '30px',
  padding: '24px',
  width: 'calc(100% - 350px)',
  border: `1px solid ${theme.palette.secondary.main}`,
  borderRadius: '5px',
  overflow: 'auto',
}))