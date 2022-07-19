import { firebaseAuth, storage } from 'app/firebase';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { useErrorHandling } from 'app/providers/errorBoundary/ErrorBoundary';
import { useAppStore } from 'shared/hooks/redux';
import { setIsOpenSnackbar } from 'shared/store/snackbar/slice';

export const useFirebase = () => {
  const { dispatch } = useAppStore();
  const { catchError } = useErrorHandling();

  const registerWithEmailAndPassword = async (
    email: string,
    password: string,
  ) => {
    try {
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      dispatch(setIsOpenSnackbar('Registration error'));
    }
  };

  const loginWithEmailAndPassword = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(firebaseAuth, email, password);
    } catch ({ message }) {
      dispatch(
        setIsOpenSnackbar({
          message: message || 'Login error',
          severity: 'error',
        }),
      );
    }
  };

  const uploadFile = async (file: Blob | Uint8Array | ArrayBuffer) => {
    const { currentUser } = getAuth();
    try {
      if (currentUser) {
        const fileRef = ref(storage, 'avatar/' + currentUser.uid + '.jpg');
        await uploadBytes(fileRef, file);
        const photoURL = await getDownloadURL(fileRef);
        updateProfile(currentUser, { photoURL });
      }
    } catch (error) {
      catchError(error, 'firebase error with upload file');
    }
  };

  const downloadFile = async (path: string) => {
    try {
      const url = await getDownloadURL(ref(storage, path));
      return url;
    } catch (error) {
      // catchError(error, 'firebase error with download file');
    }
  };

  const logout = async () => {
    try {
      signOut(firebaseAuth);
    } catch ({ message }) {
      dispatch(
        setIsOpenSnackbar({
          message: message || 'Login error',
          severity: 'error',
        }),
      );
    }
  };

  const deleteAvatar = () => {
    const { currentUser } = getAuth();
    if (currentUser) {
      updateProfile(currentUser, { photoURL: undefined });
    }
  }

  return {
    registerWithEmailAndPassword,
    loginWithEmailAndPassword,
    logout,
    deleteAvatar,
    uploadFile,
    downloadFile,
  };
};
