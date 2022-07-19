import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from 'shared/hooks/redux';

interface ProtectedPageProps {
  children: React.ReactElement
}

export function ProtectedPage({ children }: ProtectedPageProps) {
  const { auth } = useAppSelector()
  if (!auth.user) {
    return <Navigate to="/" />
  }
  return children
}