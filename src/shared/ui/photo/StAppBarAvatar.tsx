import { Avatar } from '@mui/material';
import { useAppSelector } from 'app/providers/store';
import React from 'react';
import { Link } from 'react-router-dom';

export function StAppBarAvatar() {
  const { auth } = useAppSelector()
  if (!auth.avatarUrl) return null
  return (
    <Avatar alt="Remy Sharp" src={auth.avatarUrl} component={Link} to="/profile" />
  )
} 