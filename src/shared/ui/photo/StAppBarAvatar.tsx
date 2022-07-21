import { Avatar } from '@mui/material';
import { getRandomSvgPath } from 'features/getRandomSvgAvatar';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from 'shared/hooks/redux';

export function StAppBarAvatar() {
  const { auth } = useAppSelector();
  
  if (!auth.user?.photoURL)
    return (
      <Avatar
      alt="Remy Sharp"
      src={auth.svgAvatar}
      component={Link}
      to="/profile"
    />
    );
  return (
    <Avatar
      alt="Remy Sharp"
      src={auth.user?.photoURL}
      component={Link}
      to="/profile"
    />
  );
}
