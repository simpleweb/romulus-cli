import { APP_INSTALLED, AppActions } from "<%= name %>/App/Actions/App";

interface State {
  installed: boolean;
}

const initialState: State = {
  installed: false,
};

const reducer = (
  state = initialState,
  action: AppActions,
): State => {
  switch (action.type) {
    case APP_INSTALLED:
      return {
        ...state,
        installed: true,
      };

    default:
      return state;
  }
};

export default reducer;
