import { AppDispatch, RootState } from 'app/providers/store';
import { useDispatch, useSelector } from 'react-redux';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector = () =>
  useSelector<RootState, RootState>((state) => state);
export const useAppStore = () => ({ dispatch: useAppDispatch(), state: useAppSelector()})