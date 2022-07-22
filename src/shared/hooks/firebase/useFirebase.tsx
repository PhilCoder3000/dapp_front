import { firebaseAuth, storage } from 'app/firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from 'firebase/storage';
import { useErrorHandling } from 'app/providers/errorBoundary/ErrorBoundary';
import { useAppStore } from 'shared/hooks/redux';
import { setIsOpenSnackbar } from 'shared/store/snackbar/slice';
import { updateUser } from 'shared/store/auth/slice';
import { getUrlFilesList } from 'shared/api/firebase';

export const useFirebase = () => {
  const { state, dispatch } = useAppStore();
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

  const uploadFile = async (
    file: Blob | Uint8Array | ArrayBuffer,
    path: string,
  ) => {
    const { currentUser } = firebaseAuth;
    try {
      if (currentUser) {
        const fileRef = ref(storage, path);
        await uploadBytes(fileRef, file);
        const url = await getDownloadURL(fileRef);
        return url;
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

  const addAvatar = async (file: Blob | Uint8Array | ArrayBuffer) => {
    if (firebaseAuth.currentUser) {
      const photoURL = await uploadFile(
        file,
        'avatar/' + firebaseAuth.currentUser.uid + '.jpg',
      );
      await updateProfile(firebaseAuth.currentUser, {
        photoURL,
        displayName: 'Jane Q. User',
      });
      dispatch(updateUser({ photoURL }));
    }
  };

  const deleteAvatar = async () => {
    try {
      if (firebaseAuth.currentUser) {
        await deleteFile('avatar/' + firebaseAuth.currentUser.uid + '.jpg');
        await updateProfile(firebaseAuth.currentUser, {
          photoURL: null,
          displayName: 'Jane Q. User',
        });
      }
    } catch (error) {
      console.log(error);
    }
    dispatch(updateUser({ photoURL: null }));
  };

  const deleteFile = async (path: string) => {
    const desertRef = ref(storage, path);
    await deleteObject(desertRef);
  };

  return {
    auth: firebaseAuth,
    registerWithEmailAndPassword,
    loginWithEmailAndPassword,
    logout,
    deleteFile,
    addAvatar,
    deleteAvatar,
    uploadFile,
    downloadFile,
    getUrlFilesList,
  };
};
