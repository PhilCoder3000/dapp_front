import { styled } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';
import { useAppSelector } from 'shared/hooks/redux';

interface StProfileAvatarProps {
  src?: string | null;
}

const animations = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

const Img = styled(motion.img)(({ theme }) => ({
  margin: '0 auto',
  width: '200px',
  height: 'auto',
  border: `1px solid ${theme.palette.primary.light}`,
  borderRadius: '50%',
  zIndex: 1,
}));

export function StProfileAvatar({ src }: StProfileAvatarProps) {
  const { auth } = useAppSelector()
  if (src)
    return (
      <Img
        srcSet={src + ', ' + auth.svgAvatar}
        alt="avatar"
        variants={animations}
        initial="initial"
        animate="animate"
        exit="initial"
      />
    );
  return null;
}
