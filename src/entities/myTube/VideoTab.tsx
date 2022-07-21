import { Grid, Box, Typography } from '@mui/material';
import { a11yPropsLabelledby } from 'features/a11y/a11yTabsProps';
import React, { useState } from 'react';
import { wrapPromise } from 'shared/api/suspender';
import { getUrlFilesList } from 'shared/api/firebase';

interface MyTubeVideoTabProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const { fetch } = wrapPromise(getUrlFilesList('videos/'));

export function MyTubeVideoTab({
  children,
  index,
  value,
  ...other
}: MyTubeVideoTabProps) {
  const [listURL] = useState<string[] | undefined>(fetch);

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      {...other}
      {...a11yPropsLabelledby('my-tube', index)}
    >
      <Grid container spacing={2}>
        {listURL &&
          listURL.map((item, index) => (
            <React.Fragment key={index}>
              <Grid item lg={4} sx={{ p: 2 }}>
                <video key={index} width="400" controls>
                  <source src={item} />
                </video>
              </Grid>
              <Grid item lg={8}>
                <Box sx={{ padding: '0 50px' }}>
                  <Typography>описание</Typography>
                  <Typography>лайки</Typography>
                  <Typography>комменты</Typography>
                </Box>
              </Grid>
            </React.Fragment>
          ))}
      </Grid>
    </div>
  );
}
