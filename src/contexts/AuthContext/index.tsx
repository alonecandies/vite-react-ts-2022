import { createContext, useReducer } from 'react';
import { authReducer, AuthState } from 'reducers/AuthReducer';
import AuthActionType from 'reducers/AuthReducer/types';
import { AuthContextDefault, AuthContextProps } from './index.d';

const { TOGGLE_AUTH } = AuthActionType;
const authDefault: AuthState = { isAuthenticated: false, username: '' };

export const AuthContext = createContext<AuthContextDefault>({
  authInfo: authDefault,
  toggleAuth: (username: string) => {},
});

function AuthContextProvider({ children }: AuthContextProps) {
  const [authInfo, dispatch] = useReducer(authReducer, authDefault);

  const toggleAuth = (username: string) => {
    dispatch({ type: TOGGLE_AUTH, payload: username });
  };

  const authDynamic = { authInfo, toggleAuth };

  return <AuthContext.Provider value={authDynamic}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
