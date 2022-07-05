import {
  Box,
  CssBaseline,
  Toolbar,
  Container as MuiContainer,
  styled,
} from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';
import { AppBar } from 'shared/ui/app/AppBar';
import { Menu } from 'shared/ui/app/Menu';

type ContainerProps = {
  children: JSX.Element;
};

const StyledBox = styled(Box)(({ theme }) => ({
  background: 'transparent',
  color: theme.palette.text.primary,
  flexGrow: 1,
  overflow: 'auto',
}));

const animations = {
  initial: {
    opacity: 0,
    background: 'linear-gradient(30deg, #020331 30%, #220b61 90%)',
  },
  animate: {
    opacity: 1,
    background: 'linear-gradient(30deg, #020331 30%, #220b61 90%)',
  },
  exit: { opacity: 0 },
};

export function Container({ children }: ContainerProps) {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  return (
    <motion.div
      style={{ display: 'flex', width: '100vw', height: '100vh' }}
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <CssBaseline />
      <AppBar open={open} toggleDrawer={toggleDrawer} />
      <Menu open={open} toggleDrawer={toggleDrawer} />
      <StyledBox component="main">
        <Toolbar />
        <MuiContainer>{children}</MuiContainer>
      </StyledBox>
    </motion.div>
  );
}
