# Commands

These commands rely on the original structure created by `romulus init`.

## Component

Creates a new component.

```
romulus component MyComponent
```

This will generate three files:

- `App/Components/MyComponent/index.tsx`
- `App/Components/MyComponent/index.test.tsx`
- `App/Components/MyComponent/styles.ts`

By default this component will be generated.

```js
import React from "react";
import { View, Text } from "./styles";

interface Props {}

function MyComponent() {
  return (
    <View>
      <Text>MyComponent</Text>
    </View>
  );
};

export default MyComponent;
```

Components get accompanying styles.

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

Creates a new reducer, actions and tests.

```
romulus reducer Settings
```

This will generate four files:

- `App/Reducers/Settings.ts`
- `App/Reducers/Settings.test.ts`
- `App/Actions/Settings.ts`
- `App/Actions/Settings.test.ts`

You will then have to manually add your reducer the `persistCombineReducers`
function in `App/Reducers/index.ts`.

> It’s also good practice to export all of your actions into the main action
> creator in `App/Actions/index.ts`

The reducer comes with some example state and guides for managing types.

```js
import {
  SETTINGS_EXAMPLE,
  SettingsActions,
} from "Remulus/App/Actions/Settings";

interface State {
  value: boolean;
}

const initialState: State = {
  value: false,
};

const reducer = (
  state = initialState,
  action: SettingsActions,
): State => {
  switch (action.type) {
    case SETTINGS_EXAMPLE:
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

The actions come with a constant, action creator and a type expected from the
action creator.

```js
export const SETTINGS_EXAMPLE = "MyApp/SETTINGS_EXAMPLE";

export const settingsExample = () => ({
  type: SETTINGS_EXAMPLE as typeof SETTINGS_EXAMPLE,
});

type SettingsExample = ReturnType<typeof settingsExample>;

export type SettingsActions = SettingsExample;
```

## Screen

Creates a new screen.

```
romulus screen Home
```

This will generate this file:

- `App/Screens/Home/index.tsx`

You should then import this screen into `App/Screens/index.ts` so it can be
easily added to the router.

```js
import React from "react";
import { NavigationStackScreenComponent } from "react-navigation-stack";
import Layout from "Remulus/App/Components/Layout";
import Text from "Remulus/App/Components/Text";

const Home: NavigationStackScreenComponent = ({ navigation }) => {
  return (
    <Layout.Center>
      <Text>Home</Text>
    </Layout.Center>
  );
};

export default Home;
```
