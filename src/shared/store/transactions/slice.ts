import { createSlice } from '@reduxjs/toolkit';
import { connectWallet } from 'shared/api/contract/connectWallet';

interface TransactionsState {
  accountAddress: string;
}

export const transactions = createSlice({
  name: 'transactions',
  initialState: {} as TransactionsState,
  reducers: {
    setAccountAddress: (state, { payload }) => {
      state.accountAddress = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(connectWallet.fulfilled, (state, { payload }) => {
      if (payload) state.accountAddress = payload;
    });
  },
});

export const { setAccountAddress } = transactions.actions;
