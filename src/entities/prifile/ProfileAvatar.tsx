import { useFirebase } from 'app/firebase/useFirebase';
import { useAppStore } from 'app/providers/store';
import React from 'react';
import { StProfileAvatar } from 'shared/ui/photo/StProfileAvatar';
import { StProfileAvatarInput } from 'shared/ui/photo/StProfileAvatarInput';
import { StProfileSvgAvatar } from 'shared/ui/photo/StProfileSvgAvatar';


export function ProfileAvatar() {
  const { state } = useAppStore();
  const { uploadFile } = useFirebase()

  const uploadAvatar = async (file: File) => {
    await uploadFile(file)
  }
  
  return (
    <StProfileSvgAvatar isShowSvg={!state.auth.avatarUrl}>
      <StProfileAvatarInput avatar={state.auth.avatarUrl} uploadAvatar={uploadAvatar} />
      <StProfileAvatar src={state.auth.avatarUrl} />;

    </StProfileSvgAvatar>
  );
}
