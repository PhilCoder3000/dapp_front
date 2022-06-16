import { Copyright } from '@mui/icons-material';
import { Box, CssBaseline, Toolbar, Container, styled } from '@mui/material';
import React from 'react';
import { CustomAppBar } from './CustomAppBar';
import { CustomMenu } from './CustomMenu';

type MainContainerProps = {
  children: JSX.Element;
};

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
}))

export function MainContainer({ children }: MainContainerProps) {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <CustomAppBar open={open} toggleDrawer={toggleDrawer} />
      <CustomMenu open={open} toggleDrawer={toggleDrawer} />
      <StyledBox
        component="main"
        sx={{
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
        }}
      >
        <Toolbar />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          {children}
          <Copyright sx={{ pt: 4 }} />
        </Container>
      </StyledBox>
    </Box>
  );
}
