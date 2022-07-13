import React from 'react';
import IconButton from '@mui/material/IconButton';
import { DialogTitle, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface StDialogTitleProps {
  title: string;
  onClose: () => void;
}

export function StDialogTitle({ title, onClose }: StDialogTitleProps) {
  return (
    <DialogTitle sx={{ m: 0, p: 2, width: '500px' }}>
      <Typography variant="h5">{title}</Typography>
      <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
    </DialogTitle>
  )
}