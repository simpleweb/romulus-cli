export const APP_INSTALLED = "<%= name %>/APP_INSTALLED";

export const appInstalled = () => ({
  type: APP_INSTALLED as typeof APP_INSTALLED,
});

type AppInstalled = ReturnType<typeof appInstalled>;

export type AppActions = AppInstalled;
