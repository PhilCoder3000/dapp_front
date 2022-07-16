import { Box } from '@mui/material';
import React from 'react';
import { SvgAvatar, SvgAvatarIcons } from 'shared/ui/icons/SvgAvatar';

interface StProfileAvgAvatarProps extends React.PropsWithChildren {
  isShowSvg: boolean;
}

export function StProfileSvgAvatar({
  children,
  isShowSvg,
}: StProfileAvgAvatarProps) {
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
        <SvgAvatar
          icon={getRandomIcon()}
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

const icons = ['avocado', 'cloud', 'coffee', 'draw-love', 'sloth'];
const getRandomIcon = () => {
  const index = Math.floor(Math.random() * 5);
  return icons[index] as SvgAvatarIcons;
};
