import React, { createContext, useContext, useEffect, useReducer } from "react";
import Keychain from "<%= name %>/App/Helpers/Keychain";
import reducer, { AuthenticationState } from "./reducer";

const KEYCHAIN_KEY = "@authenticationToken";

const AuthenticationContext = createContext<AuthenticationContextState | null>(
  null,
);

export function AuthenticationProvider({
  children,
}: AuthenticationProviderProps) {
  const [state, dispatch] = useReducer(reducer, {
    isLoading: true,
    isLoggedIn: false,
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const login: LoginFunction = async (fields) => {
    // @TODO replace this hard coded token from an API
    const token: AuthenticationToken = {
      access_token: "romulus",
    };

    await Keychain.set(KEYCHAIN_KEY, token);

    dispatch({ type: "LOGIN" });
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const register: RegisterFunction = async (fields) => {
    // @TODO register your user
  };

  async function logout() {
    dispatch({ type: "LOGOUT" });

    await Keychain.unset(KEYCHAIN_KEY);
  }

  useEffect(() => {
    (async () => {
      const token = await getToken();
      dispatch({ type: "RESTORE", isLoggedIn: !!token });
    })();
  }, []);

  return (
    <AuthenticationContext.Provider
      value={{ ...state, register, login, logout }}>
      {children}
    </AuthenticationContext.Provider>
  );
}

export async function getToken(): Promise<AuthenticationToken> {
  const token = await Keychain.get(KEYCHAIN_KEY);
  return token;
}

export function useAuthentication() {
  return useContext(AuthenticationContext) as AuthenticationContextState;
}

interface AuthenticationToken {
  access_token: string;
}

type LoginFunction = (fields: {
  username: string;
  password: string;
}) => Promise<void>;

type RegisterFunction = (fields: {
  username: string;
  password: string;
}) => Promise<void>;

interface AuthenticationContextState extends AuthenticationState {
  login: LoginFunction;
  register: RegisterFunction;
  logout: () => Promise<void>;
}

interface AuthenticationProviderProps {
  children: React.ReactNode;
}
