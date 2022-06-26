import { createAsyncThunk } from '@reduxjs/toolkit';

const { ethereum } = window;

export const connectWallet = createAsyncThunk('connectWallet', async () => {
  const accounts = await ethereum.request<string[]>({
    method: 'eth_requestAccounts',
  });
  return accounts ? accounts[0] : 'Connect error';
});

export const checkIfConnectWallet = createAsyncThunk(
  'checkIfConnectWallet',
  async () => {
      const accounts = await ethereum.request<string[]>({
        method: 'eth_accounts',
      });
      return accounts ? accounts[0] : '';
  },
);
