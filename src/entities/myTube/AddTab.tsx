import { Button, Grid, Input } from '@mui/material';
import { a11yPropsLabelledby } from 'features/a11y/a11yTabsProps';
import React, { useState } from 'react';
import { useFirebase } from 'shared/hooks/firebase/useFirebase';

interface MyTubeAddDialogProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export function MyTubeAddVideo({
  children,
  index,
  value,
  ...other
}: MyTubeAddDialogProps) {
  const { uploadFile } = useFirebase();
  const [videoURL, setVideoURL] = useState('');

  const uploadHandler = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    if (target && target.files) {
      console.log(target.files.length);
      const url = URL.createObjectURL(target.files[0]);
      setVideoURL(url);
      uploadFile(target.files[0], 'videos/' + target.files[0].name);
    }
  };

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      {...other}
      {...a11yPropsLabelledby('my-tube', index)}
      style={{ padding: 10 }}
    >
      <Grid container spacing={0}>
        <Grid item lg={6}>
          <Button component="label">
            <Input type="file" onChange={uploadHandler} />
          </Button>
        </Grid>
        <Grid item lg={4}>
          {videoURL && (
            <video width="400" controls>
              <source src={videoURL} />
            </video>
          )}
        </Grid>
      </Grid>
    </div>
  );
}
