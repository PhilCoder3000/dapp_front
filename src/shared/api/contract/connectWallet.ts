import { createAsyncThunk } from '@reduxjs/toolkit';
import { wrapTryCatch } from 'shared/api/utils/wrapTryCatch';

const { ethereum } = window;

export const connectWallet = createAsyncThunk('connectWallet', async () => {
  async function func() {
    const accounts = await ethereum.request<string[]>({
      method: 'eth_requestAccounts',
    });
    return accounts ? accounts[0] : 'Connect error';
  }
  return wrapTryCatch(func);
});

export const checkIfConnectWallet = createAsyncThunk(
  'checkIfConnectWallet',
  async () => {
    async function func() {
      const accounts = await ethereum.request<string[]>({
        method: 'eth_accounts',
      });
      return accounts ? accounts[0] : '';
    }
    return wrapTryCatch(func);
  },
);
