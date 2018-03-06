// @flow
export const <%= reducerConst %>_EXAMPLE = "<%= name %>/<%= reducerConst %>_EXAMPLE";

export type <%= reducer %>Example = {
  type: "<%= name %>/<%= reducerConst %>_EXAMPLE",
};

export const <%= reducerSlug %>Example = ():<%= reducer %>Example => ({
  type: <%= reducerConst %>_EXAMPLE,
});
