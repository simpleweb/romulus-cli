# Commands

## `component`

The `component` command lets you scaffold new stateless and stateful components
with a consistent structure and style.

```
yo react-native:component MyComponent
yo react-native:component MyComponent --stateful
```

This will generate two files:
* `App/Components/MyComponent/index.js`
* `App/Components/MyComponent/styles.js`

By default this stateless component will be generated.

```js
// @flow
import * as React from 'react';
import { View, Text } from "./styles";

type Props = {};

const MyComponent = (props: Props): React.Node => (
  <View>
    <Text>MyComponent</Text>
  </View>
);

export default MyComponent;
```

Or if you pass the `--stateful` flag, a stateful component will be generated.

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

Either stateless or stateful components get the same accompanying styles.

```js
// @flow
import styled from "styled-components";

export const View = styled.View``;

export const Text = styled.Text``;
```

## `reducer`

Creates a reducer and associated actions.

```
yo react-native:reducer MyReducer
```

This will generate two files:
* `App/Reducers/MyReducer.js`
* `App/Actions/MyReducer.js`

You will have to then add your reducer manually into the
`persistCombineReducers` function in `App/Reducers/index.js`.

> It’s also good practice to export all of your actions into the main action
creator in `App/Actions/index.js`

The reducer itself will come with some example state and some good examples for
how to add Flow types to your reducers.

```js
// @flow
import { MYREDUCER_EXAMPLE, type MyReducerExample } from "MyApp/App/Actions/MyReducer";

type State = {
  +value: boolean,
};

type Action = MyReducerExample;

const initialState: State = {
  value: false,
};

const reducer = (state: State = initialState, action: Action): State => {
  switch(action.type) {
    case MYREDUCER_EXAMPLE:
      return {
        ...state,
        value: true,
      };

    default:
      return state;
  }
};

export default reducer;
```

The actions come with a constant, action creator and type expected from the
action creator.

```js
// @flow
export const MYREDUCER_EXAMPLE = "MyApp/MYREDUCER_EXAMPLE";

export type MyReducerExample = {
  type: "MyApp/MYREDUCER_EXAMPLE",
};

export const myreducerExample = ():MyReducerExample => ({
  type: MYREDUCER_EXAMPLE,
});
```

## `scene`

An easy way to scaffold a scene. Creates a new scene that is connected to the
Redux store following the container pattern.

```
yo react-native:scene MyScene
```

This will generate two files:
* `App/Scenes/MyScene/index.js`
* `App/Scenes/MyScene/Container.js`

You will have to then import this scene into `App/Scenes/index.js`.

The `index.js` contains a presentational view of the scene.

```js
// @flow
import * as React from "react";
import Layout from "MyApp/App/Components/Layout";
import Text from "MyApp/App/Components/Text";

type Props = {};

const MyScene = (props: Props): React.Node => (
  <Layout.Center>
    <Text>MyScene</Text>
  </Layout.Center>
);

export default MyScene;
```

The `Container.js` typically will connect the Redux store and provide data to
the presentational component.

```js
// @flow
import * as React from "react";
import { connect } from "react-redux";
import MyScene from "MyApp/App/Scenes/MyScene";

class MySceneContainer extends React.Component<{}> {
  render(): React.Node {
    return <MyScene />;
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MySceneContainer);
```
