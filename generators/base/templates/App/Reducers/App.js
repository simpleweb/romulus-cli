import { APP_INSTALLED, type AppInstalled } from '<%= name %>/App/Actions/App';

type State = {
  +installed: bool,
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
