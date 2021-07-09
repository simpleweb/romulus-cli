export interface AuthenticationState {
  isLoading: boolean;
  isLoggedIn: boolean;
}

export type AuthenticationReducerActions =
  | { type: "LOGIN" }
  | { type: "RESTORE"; isLoggedIn: boolean }
  | { type: "LOGOUT" };

function reducer(
  state: AuthenticationState,
  action: AuthenticationReducerActions,
) {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isLoggedIn: true,
      };
    case "LOGOUT":
      return {
        ...state,
        isLoggedIn: false,
      };
    case "RESTORE":
      return {
        ...state,
        isLoggedIn: action.isLoggedIn,
        isLoading: false,
      };
    default:
      throw new Error("Invalid or missing Authentication action");
  }
}

export default reducer;
