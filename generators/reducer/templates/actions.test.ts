import { <%= reducerSlug %>Example } from "./<%= reducer %>";

it("<%= reducerSlug %>Example() should return correct action", () => {
  const action = {
    type: "<%= name %>/<%= reducerConst %>_EXAMPLE",
  };

  expect(<%= reducerSlug %>Example()).toEqual(action);
});
