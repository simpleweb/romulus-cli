// @flow
import { <%= reducerConst %>_EXAMPLE, type <%= reducer %>Example } from "<%= name %>/App/Actions/<%= reducer %>";

type State = {
  +value: boolean,
};

type Action = <%= reducer %>Example;

const initialState: State = {
  value: false,
};

const reducer = (state: State = initialState, action: Action): State => {
  switch(action.type) {
    case <%= reducerConst %>_EXAMPLE:
      return {
        ...state,
        value: true,
      };

    default:
      return state;
  }
};

export default reducer;
