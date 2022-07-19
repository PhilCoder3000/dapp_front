import { firebaseAuth } from 'app/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect } from 'react';
import { useAppStore } from 'shared/hooks/redux';
import { setUser } from 'shared/store/auth/slice';
import { StContainer } from 'shared/ui/app/StContainer';

export function AppContainer({ children }: React.PropsWithChildren) {
  const { dispatch } = useAppStore();

  useEffect(() => {
    const unsub = onAuthStateChanged(firebaseAuth, (user) =>
      dispatch(setUser(user?.providerData[0])),
    );
    return unsub;
  }, [dispatch]);

  return <StContainer>{children}</StContainer>;
}
