import { app } from 'app/firebase';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { useAppStore } from 'app/providers/store';
import { setUser } from 'shared/store/auth/slice';
import { useErrorHandling } from 'app/providers/errorBoundary/ErrorBoundary';

export const useFirebase = () => {
  const { dispatch } = useAppStore();
  const { catchError } = useErrorHandling();
  const registerWithEmailAndPassword = async (
    email: string,
    password: string,
  ) => {
    try {
      const firebaseAuth = getAuth();
      const { user } = await createUserWithEmailAndPassword(
        firebaseAuth,
        email,
        password,
      );
      dispatch(
        setUser({
          email: user.email,
          id: user.uid,
        }),
      );
    } catch (error) {
      catchError(error, 'firebase error');
    }
  };

  const loginWithEmailAndPassword = async (email: string, password: string) => {
    try {
      const firebaseAuth = getAuth();
      const { user } = await signInWithEmailAndPassword(
        firebaseAuth,
        email,
        password,
      );
      dispatch(
        setUser({
          email: user.email,
          id: user.uid,
          token: user.getIdTokenResult(),
        }),
      );
    } catch (error) {
      catchError(error, 'firebase error');
    }
  };

  return { app, registerWithEmailAndPassword, loginWithEmailAndPassword };
};
