import React from 'react';
import { Toolbar, IconButton, Typography, Badge, styled } from '@mui/material';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';

const drawerWidth: number = 240;

interface StyledAppBarProps extends MuiAppBarProps {
  open: boolean;
}

const StyledAppBar = styled(MuiAppBar)<StyledAppBarProps>(
  ({ theme, open }) => ({
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.text.primary,
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }),
);

const StyledTypography = styled(Typography)(({ theme }) => ({
  marginRight: 'auto',
  fontSize: 30,
  fontWeight: 700,
  background: `linear-gradient(45deg, ${theme.palette.secondary.main} 30%, ${theme.palette.primary.light} 90%)`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
}));

type AppBarProps = {
  open: boolean;
  toggleDrawer: () => void;
};

export function AppBar({ open, toggleDrawer }: AppBarProps) {
  return (
    <StyledAppBar position="absolute" open={open} color="default">
      <Toolbar
        sx={{
          pr: '24px',
        }}
      >
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer}
          sx={{
            marginRight: '36px',
            ...(open && { display: 'none' }),
          }}
        >
          <MenuIcon color="secondary" />
        </IconButton>
        <StyledTypography>Best Dapp application</StyledTypography>
        <IconButton color="inherit">
          <Badge badgeContent={4} color="secondary">
            <NotificationsIcon color="info" />
          </Badge>
        </IconButton>
      </Toolbar>
    </StyledAppBar>
  );
}
