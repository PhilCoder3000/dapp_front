import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { transactionsApi } from 'shared/api/transactions/api';
import { transactions } from 'shared/store/transactions/slice';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from 'shared/store/auth/slice';

export const store = configureStore({
  reducer: {
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

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector = () =>
  useSelector<RootState, RootState>((state) => state);
export const useAppStore = () => ({ dispatch: useAppDispatch(), state: useAppSelector()})