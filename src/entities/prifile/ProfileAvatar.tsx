import React, { useState } from 'react';
import { StProfileAvatar } from 'shared/ui/photo/StProfileAvatar';
import { StProfileAvatarInput } from 'shared/ui/photo/StProfileAvatarInput';
import { StProfileSvgAvatar } from 'shared/ui/photo/StProfileSvgAvatar';


export function ProfileAvatar() {
  const [avatar, setAvatar] = useState('')
  
  return (
    <StProfileSvgAvatar isShowSvg={!avatar}>
      <StProfileAvatarInput avatar={avatar} setAvatar={setAvatar} />
      <StProfileAvatar src={avatar} />;
    </StProfileSvgAvatar>
  );
}
