import React, { useRef, useState } from 'react';
import { CircularProgress, IconButton } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';

interface StProfileAvatarInputProps {
  setAvatar: (avatar: string) => void;
  avatar?: string;
}

export function StProfileAvatarInput({
  avatar,
  setAvatar,
}: StProfileAvatarInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState(false);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsLoading(true);
    const file = e.target.files && e.target.files[0];
    if (file) setAvatar(URL.createObjectURL(file));
    setTimeout(() => {
      setIsLoading(false);
    }, 100);
  };

  const iconButtonClickHandler = () => {
    if (avatar) {
      setAvatar('');
    } else {
      if (inputRef && inputRef.current) {
        inputRef.current.dispatchEvent(new MouseEvent('click'));
      }
    }
  };

  return isLoading ? (
    <CircularProgress
      sx={{
        position: 'absolute',
        top: 'calc(50% - 20px)',
        left: 'calc(50% - 20px)',
      }}
    />
  ) : (
    <>
      <input
        type="file"
        onChange={changeHandler}
        style={{ display: 'none' }}
        ref={inputRef}
      />
      <IconButton
        onClick={iconButtonClickHandler}
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: 0,
          transition: 'all 300ms',
          backgroundColor: '#000',
          '&:hover': {
            opacity: 1,
          },
        }}
      >
        <AddCircleIcon
          color="secondary"
          sx={{
            fontSize: 50,
            transition: 'all 1s',
            transform: avatar ? 'rotate(45deg)' : 'rotate(0deg)',
          }}
        />
      </IconButton>
    </>
  );
}
