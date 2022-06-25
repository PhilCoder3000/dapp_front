import { createSlice } from '@reduxjs/toolkit';
import {
  checkIfConnectWallet,
  connectWallet,
} from 'shared/api/contract/connectWallet';

interface TransactionsState {
  account: string;
}

export const transactions = createSlice({
  name: 'transactions',
  initialState: {} as TransactionsState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(connectWallet.fulfilled, (state, { payload }) => {
      if (payload) state.account = payload;
    });
    builder.addCase(checkIfConnectWallet.fulfilled, (state, { payload }) => {
      if (payload) state.account = payload;
    });
  },
});

export const {} = transactions.actions;
