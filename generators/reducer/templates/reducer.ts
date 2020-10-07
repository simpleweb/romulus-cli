import { <%= reducerConst %>_EXAMPLE, <%= reducer %>Actions } from "<%= name %>/App/Actions/<%= reducer %>";

interface State {
  value: boolean;
};

const initialState: State = {
  value: false,
};

const reducer = (
  state = initialState,
  action: <%= reducer %>Actions,
): State => {
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
