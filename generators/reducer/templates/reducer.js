// @flow
import { <%= reducerConst %>_EXAMPLE } from '<%= name %>/App/Actions/<%= reducer %>';

type State = {
};

type Action = {
  type: string,
};

const initialState = {
};

const reducer = (state: State = initialState, action: Action): State => {
  switch(action.type) {
    default:
      return state;
  }
};

export default reducer;
