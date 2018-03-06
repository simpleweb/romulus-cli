// @flow
import { <%= reducerConst %>_EXAMPLE } from "<%= name %>/App/Actions/<%= reducer %>";
import type { <%= reducer %>Example } from "<%= name %>/App/Actions/<%= reducer %>";

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
      (action: empty);
      return state;
  }
};

export default reducer;
