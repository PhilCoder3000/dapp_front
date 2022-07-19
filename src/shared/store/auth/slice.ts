import { createSlice } from '@reduxjs/toolkit';
import { UserInfo } from 'firebase/auth';

interface IInitialState {
  user: UserInfo | undefined;
}

export const auth = createSlice({
  name: 'auth',
  initialState: {} as IInitialState,
  reducers: {
    setUser(state, { payload }) {
      state.user = payload;
    },
    removeUser(state, { payload }) {
      state.user = undefined;
    },
    setAvatarUrl(state, { payload }) {
      // state.avatarUrl = payload;
    },
  },
});

export const { setUser, removeUser, setAvatarUrl } = auth.actions;
