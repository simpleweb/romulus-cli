import { APP_INSTALLED, AppInstalled } from '<%= name %>/App/Actions/App';

type State = {
  installed: boolean,
};

type Action = AppInstalled;

const initialState: State = {
  installed: false,
};

const reducer = (state: State = initialState, action: Action): State => {
  switch(action.type) {
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
