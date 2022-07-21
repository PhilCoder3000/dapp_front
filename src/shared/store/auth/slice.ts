import { createSlice } from '@reduxjs/toolkit';
import { UserInfo } from 'firebase/auth';
import { getRandomSvgPath } from 'features/getRandomSvgAvatar';

interface IInitialState {
  user: UserInfo;
  svgAvatar: string;
}

const emptyUser: UserInfo = {
  displayName: '',
  email: '',
  phoneNumber: '',
  photoURL: '',
  providerId: '',
  uid: '',
}

const init = (): IInitialState => {
  const svgAvatar = getRandomSvgPath();
  return {
    user: emptyUser,
    svgAvatar,
  };
};

export const auth = createSlice({
  name: 'auth',
  initialState: init,
  reducers: {
    setUser(state, { payload }) {
      state.user = payload;
    },
    removeUser(state, { payload }) {
      state.user = emptyUser;
    },
    updateUser(state, { payload }) {
      state.user = {
        ...state.user,
        ...payload,
      }
    },
  },
});

export const { setUser, removeUser, updateUser } = auth.actions;
