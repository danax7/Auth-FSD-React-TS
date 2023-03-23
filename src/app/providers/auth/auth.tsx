import { ReactNode, useState } from 'react';
import { AuthContext } from '@global/contexts/AuthContext/AuthContext';
import { getFromSessionStorage, setToSessionStorage } from '@global/helpers/sessionStorageFunctions';

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuth, setIsAuth] = useState<boolean>(getFromSessionStorage('isAuth', false));

  const authme = () => {
    debugger;
    setIsAuth(true);
    setToSessionStorage('isAuth', true);
  };

  const disauthme = () => {
    debugger;
    setIsAuth(false);
    setToSessionStorage('isAuth', false);
  };

  return <AuthContext.Provider value={{ isAuth, authme, disauthme }}>{children}</AuthContext.Provider>;
};
