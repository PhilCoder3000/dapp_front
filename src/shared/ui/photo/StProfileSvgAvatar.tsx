import { Box } from '@mui/material';
import React from 'react';
import { useAppSelector } from 'shared/hooks/redux';

interface StProfileAvgAvatarProps extends React.PropsWithChildren {
  isShowSvg: boolean;
}

export function StProfileSvgAvatar({
  children,
  isShowSvg,
}: StProfileAvgAvatarProps) {
  const { auth } = useAppSelector()

  return (
    <Box
      sx={{
        position: 'relative',
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        border: (theme) => `1px solid ${theme.palette.primary.light}`,
        overflow: 'hidden',
      }}
    >
      {isShowSvg && (
        <img
          src={auth.svgAvatar}
          onError={(event) => {
            event.preventDefault(); 
            event.currentTarget.src=auth.svgAvatar;
          }}
          alt="avatar"
          width="100%"
          height="100%"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        />
      )}
      {children}
    </Box>
  );
}
