import { TikiTokUploadButton } from 'entities/tikiTok/UploadButton';
import React from 'react';
import { StContainer } from 'shared/ui/tikiTok';

export function TikiTokContent() {
  return (
    <StContainer>
      <TikiTokUploadButton />
      Hello
    </StContainer>
  );
}
