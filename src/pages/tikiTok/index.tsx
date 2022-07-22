import { Container } from '@mui/material';
import React from 'react';
import { TikiTokContent } from 'widgets/tikiTok/Content';
import { TikiTokSideBar } from 'widgets/tikiTok/SideBar';

export function TikiTok() {
  return (
    <Container sx={{
      display: 'flex'
    }}>
      <TikiTokSideBar />
      <TikiTokContent />
    </Container>
  );
}
