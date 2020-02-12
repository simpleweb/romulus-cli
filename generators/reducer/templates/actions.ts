export const <%= reducerConst %>_EXAMPLE = "<%= name %>/<%= reducerConst %>_EXAMPLE";

export const <%= reducerSlug %>Example = () => ({
  type: <%= reducerConst %>_EXAMPLE as typeof <%= reducerConst %>_EXAMPLE,
});

type <%= reducer %>Example = ReturnType<typeof <%= reducerSlug %>Example>;

export type <%= reducer %>Actions = <%= reducer %>Example;
