import { Box, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { setUser } from 'shared/store/auth/slice';
import { SignIn } from 'widgets/auth/SignIn';
import { SignUp } from 'widgets/auth/SignUp';
import { useAppStore } from 'shared/hooks/redux';
import { firebaseAuth } from 'app/firebase';
import { onAuthStateChanged } from 'firebase/auth';

export function AuthButtons() {
  const [isOpen, setIsOpen] = useState<null | 'signIn' | 'signUp'>(null);

  // const getUserAvatar = useCallback(async (uid: string) => {
  //   const avatarUrl = await downloadFile('avatar/' + uid + '.jpg');
  //   if (avatarUrl) {
  //     dispatch(setAvatarUrl(avatarUrl));
  //   }
  // }, [dispatch, downloadFile]);

  // useEffect(() => {
  //   if (state.auth.user?.photoURL) getUserAvatar(state.auth.user?.photoURL)
  // }, [getUserAvatar, state.auth.user?.photoURL]);

  return (
    <Box>
      <Button
        onClick={() => setIsOpen('signUp')}
        variant="outlined"
        color="secondary"
        sx={{ marginRight: '5px' }}
      >
        Sign up
      </Button>
      <Button onClick={() => setIsOpen('signIn')} variant="contained">
        Sign in
      </Button>
      <SignUp isOpen={isOpen === 'signUp'} onClose={() => setIsOpen(null)} />
      <SignIn isOpen={isOpen === 'signIn'} onClose={() => setIsOpen(null)} />
    </Box>
  );
}
