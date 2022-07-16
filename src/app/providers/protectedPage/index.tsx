import { useAppSelector } from 'app/providers/store';
import React from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedPageProps {
  children: React.ReactElement
}

export function ProtectedPage({ children }: ProtectedPageProps) {
  const { auth } = useAppSelector()
  // if (!auth.token) {
  //   return <Navigate to="/" />
  // }
  return children
}