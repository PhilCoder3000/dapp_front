import React from 'react';
import { Button, Container } from '@mui/material';
import { ProfileAvatar } from 'entities/prifile/ProfileAvatar';
import { StTextField } from 'shared/ui/fields/StTextField';
import { useFirebase } from 'shared/hooks/firebase/useFirebase';

function Profile() {
  const { logout } = useFirebase();

  return (
    <Container
      sx={{
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'center',
        '& > .MuiBox-root': {
          m: 3,
        },
        '& > .MuiFormControl-root': {
          m: '5px 0',
        },
      }}
    >
      <ProfileAvatar />
      <StTextField value="first name" />
      <StTextField value="second name" />
      <StTextField value="email" />
      <StTextField value="wallet" />
      <Button variant="outlined" color="warning" onClick={logout}>
        Loguot
      </Button>
    </Container>
  );
}

export default Profile