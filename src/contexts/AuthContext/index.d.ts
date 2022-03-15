import { ReactNode } from 'react';

interface AuthContextProps {
  children: ReactNode;
}

interface AuthContextDefault {
  authInfo: {
    isAuthenticated: boolean;
    username: string;
  };
  toggleAuth: (username: string) => void;
}

export { AuthContextProps, AuthContextDefault };
