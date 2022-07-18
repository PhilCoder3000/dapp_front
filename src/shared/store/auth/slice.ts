import { createSlice } from '@reduxjs/toolkit';

interface IInitialState {
  email: string;
  token: string;
  id: string;
  avatarUrl: string;
}

export const auth = createSlice({
  name: 'auth',
  initialState: {} as IInitialState,
  reducers: {
    setUser(state, { payload }) {
      state.email = payload.email;
      state.token = payload.token;
      state.id = payload.id;
    },
    removeUser(state, { payload }) {
      state.email = ''
      state.token = ''
      state.id = ''
    },
    setAvatarUrl(state, { payload }) {
      state.avatarUrl = payload;
    }
  },
});

export const { setUser, removeUser, setAvatarUrl } = auth.actions;
