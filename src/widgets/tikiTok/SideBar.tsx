import { Cloud } from '@mui/icons-material';
import HomeIcon from '@mui/icons-material/Home';
import {
  MenuItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Fab,
} from '@mui/material';
import React from 'react';
import NavigationIcon from '@mui/icons-material/Navigation';
import { StMenuList, StPaper, StDivider } from 'shared/ui/tikiTok';
import { popularTopicsList } from 'features/tikiTok/popularTopicsList';

export function TikiTokSideBar() {
  return (
    <StPaper>
      <StMenuList color="primary">
        <MenuItem>
          <ListItemIcon>
            <HomeIcon fontSize="medium" color="secondary" />
          </ListItemIcon>
          <ListItemText>For You</ListItemText>
        </MenuItem>
        <StDivider />
        <MenuItem>
          <ListItemText>Popular Topics</ListItemText>
        </MenuItem>
        <MenuItem
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
          }}
        >
          {popularTopicsList.map(({ label, icon }) => (
            <Fab
              key={label}
              variant="extended"
              size="small"
              color="secondary"
              sx={{
                margin: '5px',
                textTransform: 'capitalize'
              }}
            >
              {icon}
              {label}
            </Fab>
          ))}
        </MenuItem>
        <StDivider />
        <MenuItem>
          <ListItemText>Suggested accounts</ListItemText>
        </MenuItem>
      </StMenuList>
    </StPaper>
  );
}
