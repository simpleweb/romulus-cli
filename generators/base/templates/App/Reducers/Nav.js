// @flow
import { RootNavigator } from '<%= name %>/App/Router';
import { REHYDRATE } from 'redux-persist/lib/constants';

type State = any;

type Action = any;

const initialState = RootNavigator.router.getStateForAction(
  RootNavigator.router.getActionForPathAndParams('Launch')
);

const reducer = (state: State = initialState, action: Action): State => {
  if (action.type === REHYDRATE) {
    return RootNavigator.router.getStateForAction(
      RootNavigator.router.getActionForPathAndParams('Launch')
    );
  } else {
    const nextState = RootNavigator.router.getStateForAction(action, state);
    return nextState || state;
  }
};

export default reducer;
