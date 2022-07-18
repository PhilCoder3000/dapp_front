import { Box, Button } from '@mui/material';
import { useFirebase } from 'app/firebase/useFirebase';
import { useAppStore } from 'app/providers/store';
import React, { useCallback, useEffect, useState } from 'react';
import { setAvatarUrl } from 'shared/store/auth/slice';
import { SignIn } from 'widgets/auth/SignIn';
import { SignUp } from 'widgets/auth/SignUp';

export function AuthButtons() {
  const [isOpen, setIsOpen] = useState<null | 'signIn' | 'signUp'>(null);
  const { state, dispatch } = useAppStore();
  const { downloadFile } = useFirebase();

  const getUserAvatar = useCallback(async () => {
    const avatarUrl = await downloadFile('avatar');
    if (avatarUrl) {
      dispatch(setAvatarUrl(avatarUrl));
    }
  }, [dispatch, downloadFile]);

  useEffect(() => {
    if (!state.auth.avatarUrl) getUserAvatar()
  }, [getUserAvatar, state.auth.avatarUrl]);

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
