import React, { useEffect, useState } from 'react';
import { Toolbar, IconButton, Typography, styled, Button } from '@mui/material';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import { connectWallet } from 'shared/api/contract/connectWallet';
import { setAccountAddress } from 'shared/store/transactions/slice';
import { fetchData } from 'shared/api/fetchData';
import { AuthButtons } from 'widgets/auth';
import { StAppBarAvatar } from 'shared/ui/photo/StAppBarAvatar';
import { useFirebase } from 'shared/hooks/useFirebase';
import { AppSnackbar } from 'widgets/snackbar';
import { useAppSelector } from 'shared/hooks/redux';

const drawerWidth: number = 240;

interface StyledAppBarProps extends MuiAppBarProps {
  open: boolean;
}

const StyledAppBar = styled(MuiAppBar)<StyledAppBarProps>(
  ({ theme, open }) => ({
    background: 'transparent',
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

const resource = fetchData();

export function AppBar({ open, toggleDrawer }: AppBarProps) {
  const {} = useFirebase();
  const { auth } = useAppSelector();
  // const { transactions } = useAppSelector();
  // const [accountAddress] = useState(resource.wallet.read)
  // const dispatch = useAppDispatch();

  // useEffect(() => {
  //   if (!transactions.accountAddress && accountAddress) {
  //     dispatch(setAccountAddress(accountAddress))
  //     console.log('🚀 ~ file: AppBar.tsx ~ line 61 ~ useEffect ~ accountAddress', accountAddress);
  //   }
  // }, [accountAddress, dispatch, transactions.accountAddress])

  // const connectWalletHandler = () => {
  //   dispatch(connectWallet());
  // };

  return (
    <>
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
          <StyledTypography>
            Oasis - Dapp Application for everyone
          </StyledTypography>
          {/* <Button
          variant="contained"
          onClick={connectWalletHandler}
          sx={{ textTransform: 'capitalize' }}
        >
        {transactions.accountAddress
          ? `${transactions.accountAddress.slice(
                0,
                5,
              )}...${transactions.accountAddress.slice(-5)}`
              : 'Connect wallet'}
        </Button> */}
          {auth.user ? <StAppBarAvatar /> : <AuthButtons />}
        </Toolbar>
      </StyledAppBar>
      <AppSnackbar />
    </>
  );
}
