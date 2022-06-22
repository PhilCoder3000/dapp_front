import React from 'react';
import {
  Divider,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  Toolbar,
} from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { mainListItems, secondaryListItems } from 'widgets/app/listItems';

const Drawer = styled(MuiDrawer)(({ theme, open }) => ({
  '& .MuiDrawer-paper': {
    background: `linear-gradient(30deg, ${theme.palette.secondary.dark} 30%, ${theme.palette.primary.dark} 90%)`,
    borderRight: `1px solid ${theme.palette.primary.main}`,
    color: theme.palette.secondary.main,
    fontWeight: 300,
    position: 'relative',
    whiteSpace: 'nowrap',
    width: theme.spacing(30),
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: 'border-box',
    ...(!open && {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9),
      },
    }),
    '& span': {
      fontWeight: 600,
    },
  },
}));

type CustomMenuProps = {
  open: boolean;
  toggleDrawer: () => void;
};

export function Menu({ open, toggleDrawer }: CustomMenuProps) {
  return (
    <Drawer variant="permanent" open={open}>
      <Toolbar
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          px: [1],
        }}
      >
        <IconButton onClick={toggleDrawer}>
          <ChevronLeftIcon color="secondary" />
        </IconButton>
      </Toolbar>
      <Divider color="#001f74" />
      <List component="nav">
        {mainListItems.map((item) => (
          <ListItemButton key={item}>
            <ListItemIcon>
              <DashboardIcon color="secondary" />
            </ListItemIcon>
            <ListItemText primary={item} />
          </ListItemButton>
        ))}
        <Divider sx={{ my: 1 }} color="#001f74" />
        {secondaryListItems.map((item) => (
          <ListItemButton key={item}>
            <ListItemIcon>
              <DashboardIcon color="secondary" />
            </ListItemIcon>
            <ListItemText primary={item} />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
}
