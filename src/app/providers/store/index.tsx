import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { transactionsApi } from 'shared/api/transactions/api';
import { transactions } from 'shared/store/transactions/slice';
import { auth } from 'shared/store/auth/slice';
import { snackbar } from 'shared/store/snackbar/slice';
import React from 'react';
import { Provider } from 'react-redux';

const store = configureStore({
  reducer: {
    snackbar: snackbar.reducer,
    transactions: transactions.reducer,
    [transactionsApi.reducerPath]: transactionsApi.reducer,
    auth: auth.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(transactionsApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const StoreProvider = ({ children }: React.PropsWithChildren) => (
  <Provider store={store}>{children}</Provider>
);
