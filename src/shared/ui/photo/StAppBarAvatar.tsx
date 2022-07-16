import { Avatar } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

import avatar from '__mock__/avatar.jpg'

export function StAppBarAvatar() {
  return (
    <Avatar alt="Remy Sharp" src={avatar} component={Link} to="/profile" />
  )
} 