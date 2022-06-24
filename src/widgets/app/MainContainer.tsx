import { Box, CssBaseline, Toolbar, Container as MuiContainer, styled } from '@mui/material';
import React from 'react';
import { AppBar } from 'widgets/app/AppBar';
import { Menu } from 'widgets/app/Menu';

type ContainerProps = {
  children: JSX.Element;
};

const StyledBox = styled(Box)(({ theme }) => ({
  background: `linear-gradient(0deg, ${theme.palette.secondary.dark} 10%, ${theme.palette.primary.dark} 90%)`,
  color: theme.palette.text.primary,
  flexGrow: 1,
  overflow: 'auto',
}))

export function Container({ children }: ContainerProps) {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  return (
    <Box sx={{ display: 'flex', width: '100vw', height: '100vh' }}>
      <CssBaseline />
      <AppBar open={open} toggleDrawer={toggleDrawer} />
      <Menu open={open} toggleDrawer={toggleDrawer} />
      <StyledBox
        component="main"
      >
        <Toolbar />
        <MuiContainer>
          {children}
        </MuiContainer>
      </StyledBox>
    </Box>
  );
}
