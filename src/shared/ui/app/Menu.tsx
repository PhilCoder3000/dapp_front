import React from 'react';
import {
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  ListSubheaderProps,
  styled,
  Toolbar,
} from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { Link } from 'react-router-dom';
import { web3ListItems, web2ListItems } from 'pages';
import HailIcon from '@mui/icons-material/Hail';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';

const Drawer = styled(MuiDrawer)(({ theme, open }) => ({
  '& .MuiDrawer-paper': {
    background: 'transparent',
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

const StListSubhead = styled(ListSubheader)<ListSubheaderProps>(
  ({ theme }) => ({
    background: theme.palette.secondary.dark,
    fontSize: '18px',
    fontWeight: 600,
  }),
);

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
      <ListItemButton component={Link} to={'/'} sx={{ maxHeight: '48px' }}>
        <ListItemIcon>
          <HailIcon color="secondary" />
        </ListItemIcon>
        <ListItemText primary="About Me" />
      </ListItemButton>
      <List subheader={<StListSubhead>Web 2.0</StListSubhead>}>
        {web2ListItems.map(({ label, path }) => (
          <ListItemButton key={label} component={Link} to={path}>
            <ListItemIcon>
              <OndemandVideoIcon color="secondary" />
            </ListItemIcon>
            <ListItemText primary={label} />
          </ListItemButton>
        ))}
      </List>
      <List subheader={<StListSubhead>Web 3.0</StListSubhead>}>
        {web3ListItems.map(({ label, path }) => (
          <ListItemButton key={label} component={Link} to={path}>
            <ListItemIcon>
              <DashboardIcon color="secondary" />
            </ListItemIcon>
            <ListItemText primary={label} />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
}
