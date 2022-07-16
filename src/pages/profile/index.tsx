import { Container } from '@mui/material';
import { ProfileAvatar } from 'entities/prifile/ProfileAvatar';
import React from 'react';
import { StTextField } from 'shared/ui/fields/StTextField';

export function Profile() {
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
    </Container>
  );
}
