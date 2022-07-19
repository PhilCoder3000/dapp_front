import React from 'react';
import { useAppStore } from 'shared/hooks/redux';
import { useFirebase } from 'shared/hooks/useFirebase';
import { StProfileAvatar } from 'shared/ui/photo/StProfileAvatar';
import { StProfileAvatarInput } from 'shared/ui/photo/StProfileAvatarInput';
import { StProfileSvgAvatar } from 'shared/ui/photo/StProfileSvgAvatar';

export function ProfileAvatar() {
  const { state } = useAppStore();
  const { uploadFile } = useFirebase();

  const uploadAvatar = async (file: File) => {
    await uploadFile(file);
  };

  return (
    <StProfileSvgAvatar isShowSvg={!state.auth.user?.photoURL}>
      <StProfileAvatarInput
        avatar={state.auth.user?.photoURL}
        uploadAvatar={uploadAvatar}
      />
      <StProfileAvatar src={state.auth.user?.photoURL} />;
    </StProfileSvgAvatar>
  );
}
