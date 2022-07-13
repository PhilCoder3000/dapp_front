import { Box, Button } from '@mui/material';
import React, { useState } from 'react';
import { SignIn } from 'widgets/auth/SignIn';
import { SignUp } from 'widgets/auth/SignUp';

export function AuthButtons() {
  const [isOpen, setIsOpen] = useState<null | 'signIn' | 'signUp'>(null)
  return (
    <Box>
      <Button onClick={() => setIsOpen('signUp')} variant="outlined" color="secondary" sx={{ marginRight: '5px'}}>Sign up</Button>
      <Button onClick={() => setIsOpen('signIn')} variant="contained">Sign in</Button>
      <SignUp isOpen={isOpen === 'signUp'} onClose={() => setIsOpen(null)} />
      <SignIn isOpen={isOpen === 'signIn'} onClose={() => setIsOpen(null)} />
    </Box>
  )
}