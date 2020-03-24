interface ReducerAction {
  type: string;
}

type RootStackParamList = {
  Main: undefined;
  Styleguide: undefined;
};

type Environment = "development" | "staging" | "edge" | "production" | "live";
