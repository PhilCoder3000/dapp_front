import { Button, Dialog, FormControl, TextField } from '@mui/material';
import { useFirebase } from 'app/firebase/useFirebase';
import React, { useState } from 'react';
import { StDialogTitle } from 'shared/ui/dialogs/StDialogTitle';

interface SignInProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SignIn({ isOpen, onClose }: SignInProps) {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const { loginWithEmailAndPassword } = useFirebase();

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    loginWithEmailAndPassword(values.email, values.password);
  };

  return (
    <Dialog
      open={isOpen}
      PaperProps={{
        sx: {
          backgroundColor: (theme) => theme.palette.primary.main,
          color: (theme) => theme.palette.primary.light,
        },
      }}
      onClose={onClose}
      maxWidth="md"
    >
      <StDialogTitle title="SignUp" onClose={onClose} />
      <FormControl component="form" onSubmit={submitHandler} sx={{ p: 2 }}>
        <TextField
          label="email"
          value={values.email}
          onChange={(e) =>
            setValues((prev) => ({ ...prev, email: e.target.value }))
          }
          margin="normal"
          required
        />
        <TextField
          label="password"
          value={values.password}
          onChange={(e) =>
            setValues((prev) => ({ ...prev, password: e.target.value }))
          }
          margin="normal"
        />
        <Button type="submit">Login</Button>
      </FormControl>
    </Dialog>
  );
}
