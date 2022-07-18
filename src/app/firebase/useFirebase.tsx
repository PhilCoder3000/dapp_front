import { app, firebaseAuth, storage } from 'app/firebase';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
  User,
} from 'firebase/auth';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { useAppStore } from 'app/providers/store';
import { setUser } from 'shared/store/auth/slice';
import { useErrorHandling } from 'app/providers/errorBoundary/ErrorBoundary';
import { useEffect, useState } from 'react';

export const useFirebase = () => {
  const { dispatch } = useAppStore();
  const { catchError } = useErrorHandling();
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(firebaseAuth, (user) =>
      setCurrentUser(user),
    );
    return unsub;
  }, []);

  const registerWithEmailAndPassword = async (
    email: string,
    password: string,
  ) => {
    try {
      await createUserWithEmailAndPassword(
        firebaseAuth,
        email,
        password,
      );
    } catch (error) {
      catchError(error, 'firebase error with registration');
    }
  };

  const loginWithEmailAndPassword = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(
        firebaseAuth,
        email,
        password,
      );
    } catch (error) {
      catchError(error, 'firebase error with login');
    }
  };

  const uploadFile = async (file: Blob | Uint8Array | ArrayBuffer) => {
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

  const downloadFile = async (
    folder: string
  ) => {
    try {
      if (currentUser) {
        const url = await getDownloadURL(
          ref(storage, folder + '/' + currentUser.uid + '.jpg'),
        );
        return url;
      }
    } catch (error) {
      // catchError(error, 'firebase error with download file');
    }
  };

  return {
    app,
    registerWithEmailAndPassword,
    loginWithEmailAndPassword,
    uploadFile,
    downloadFile,
  };
};
