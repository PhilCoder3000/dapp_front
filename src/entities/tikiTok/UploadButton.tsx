import { FormLabel } from '@mui/material';
import React from 'react';
import { useFirebase } from 'shared/hooks/firebase/useFirebase';
import { StUploadButton } from 'shared/ui/tikiTok';

export function TikiTokUploadButton() {
  const { uploadFile } = useFirebase()
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target && e.target.files) {
      console.log(e.target.files[0])
    }
  }

  return (
    <StUploadButton>
      <FormLabel>
        Click for upload
        <input type="file" hidden onChange={changeHandler} />
      </FormLabel>
    </StUploadButton>
  );
}
