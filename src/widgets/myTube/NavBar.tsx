import { Tabs, Tab, Box, Typography } from '@mui/material';
import { MyTubeAddVideo } from 'entities/myTube/AddTab';
import { MyTubeVideoTab } from 'entities/myTube/VideoTab';
import { a11yPropsControls } from 'features/a11y/a11yTabsProps';
import React, { useState } from 'react';

export function MyTubeNavBar() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          color="secondary"
        >
          <Tab label="Item One" {...a11yPropsControls('my-tube', 0)} />
          <Tab label="Item Two" {...a11yPropsControls('my-tube', 1)} />
          <Tab label="Item Three" {...a11yPropsControls('my-tube', 2)} />
        </Tabs>
      </Box>
      <MyTubeVideoTab value={value} index={0} />
      <MyTubeAddVideo value={value} index={1} />
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
  );
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
