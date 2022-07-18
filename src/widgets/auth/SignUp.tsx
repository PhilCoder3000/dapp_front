import { Button, Dialog, FormControl, TextField } from '@mui/material';
import { useFirebase } from 'app/firebase/useFirebase';
import React, { useState } from 'react';
import { StDialogTitle } from 'shared/ui/dialogs/StDialogTitle';

interface SignUpProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SignUp({ isOpen, onClose }: SignUpProps) {
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    nickname: '',
    email: '',
    password: '',
  });

  const { registerWithEmailAndPassword } = useFirebase();

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    registerWithEmailAndPassword(values.email, values.password);
  };

  return (
    <Dialog
      open={isOpen}
      PaperProps={{
        sx: { backgroundColor: (theme) => theme.palette.primary.dark },
      }}
      onClose={onClose}
      maxWidth="md"
    >
      <StDialogTitle title="SignUp" onClose={onClose} />
      <FormControl component="form" onSubmit={submitHandler} sx={{ p: 2 }}>
        <TextField
          label="first name"
          value={values.firstName}
          onChange={(e) =>
            setValues((prev) => ({ ...prev, firstName: e.target.value }))
          }
          margin="normal"
        />
        <TextField
          label="last name"
          value={values.lastName}
          onChange={(e) =>
            setValues((prev) => ({ ...prev, lastName: e.target.value }))
          }
          margin="normal"
        />
        <TextField
          label="nickname"
          value={values.nickname}
          onChange={(e) =>
            setValues((prev) => ({ ...prev, nickname: e.target.value }))
          }
          margin="normal"
        />
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
          required
        />
        <Button type="submit">SignUp</Button>
      </FormControl>
    </Dialog>
  );
}
