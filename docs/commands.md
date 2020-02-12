# Commands

These commands rely on the original structure created by `romulus init`.

## Component

Creates a new _stateless_ or _stateful_ component.

```
romulus component MyComponent
romulus component MyComponent --stateful
```

This will generate three files:

- `App/Components/MyComponent/index.tsx`
- `App/Components/MyComponent/index.test.tsx`
- `App/Components/MyComponent/styles.ts`

By default this stateless component will be generated.

```js
import React from "react";
import { View, Text } from "./styles";

interface Props {}

const MyComponent: React.FC<Props> = () => {
  return (
    <View>
      <Text>MyComponent</Text>
    </View>
  );
};

export default MyComponent;
```

If you pass the `--stateful` flag this stateful component will be generated.

```js
// @flow
import * as React from "react";
import { View, Text } from "./styles";

type State = {};

type Props = {};

class MyComponent extends React.Component<Props, State> {
  state = {};

  render(): React.Node {
    return (
      <View>
        <Text>MyComponent</Text>
      </View>
    );
  }
}

export default MyComponent;
```

Both types of components get the same accompanying styles.

```js
import styled from "styled-components/native";

export const View = styled.View``;

export const Text = styled.Text``;
```

And a test is generated for you as well.

```js
import React from "react";
import { render } from "test-utilities";
import MyComponent from "./index";

it("renders the text passed as children", () => {
  const { getByText } = render(<MyComponent />);
  expect(getByText("MyComponent")).toBeDefined();
});
```

## Reducer

Creates a new reducer and associated actions.

```
romulus reducer MyReducer
```

This will generate two files:

- `App/Reducers/MyReducer.js`
- `App/Actions/MyReducer.js`

You will then have to manuall add your reducer the `persistCombineReducers`
function in `App/Reducers/index.js`.

> It’s also good practice to export all of your actions into the main action
> creator in `App/Actions/index.js`

The reducer comes with some example state (that you should change) and guides
for adding Flow types.

```js
// @flow
import {
  MYREDUCER_EXAMPLE,
  type MyReducerExample
} from "MyApp/App/Actions/MyReducer";

type State = {
  +value: boolean
};

type Action = MyReducerExample;

const initialState: State = {
  value: false
};

const reducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case MYREDUCER_EXAMPLE:
      return {
        ...state,
        value: true
      };

    default:
      return state;
  }
};

export default reducer;
```

The actions come with a constant, action creator and a type expected from the
action creator.

```js
// @flow
export const MYREDUCER_EXAMPLE = "MyApp/MYREDUCER_EXAMPLE";

export type MyReducerExample = {
  type: "MyApp/MYREDUCER_EXAMPLE"
};

export const myreducerExample = (): MyReducerExample => ({
  type: MYREDUCER_EXAMPLE
});
```

## Screen

Creates a new screen that is connected to the Redux store following the container
pattern.

```
romulus screen MyScreen
```

This will generate two files:

- `App/Screens/MyScreen/index.js`
- `App/Screens/MyScreen/Container.js`

You should then import this screen into `App/Screens/index.js` so it can be easily
added to the router.

The `index.js` file contains a presentational view of the screen.

```js
// @flow
import * as React from "react";
import Layout from "MyApp/App/Components/Layout";
import Text from "MyApp/App/Components/Text";

type Props = {};

const MyScreen = (props: Props): React.Node => (
  <Layout.Center>
    <Text>MyScreen</Text>
  </Layout.Center>
);

export default MyScreen;
```

The `Container.js` file connects to the Redux store and provides data to the
presentational component.

```js
// @flow
import * as React from "react";
import { connect } from "react-redux";
import MyScreen from "MyApp/App/Screens/MyScreen";

class MyScreenContainer extends React.Component<{}> {
  render(): React.Node {
    return <MyScreen />;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyScreenContainer);
```
