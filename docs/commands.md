# Commands

## `component`

An easy way to scaffold stateless and stateful components.

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

Or if you pass the `--stateful` flag a stateful component will be generated.

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

Either stateless or stateful components get the following accompanying styles.

```js
// @flow
import styled from "styled-components";

export const View = styled.View``;

export const Text = styled.Text``;
```

## `reducer`

An easy way to scaffold a reducer. It creates the reducer itself and a way to keep organise your associated actions.

```
yo react-native:reducer MyReducer
```

## `scene`

An easy way to scaffold a scene. Creates a new scene that is connected to the
Redux store following the container pattern.

```
yo react-native:scene MyScene
```
