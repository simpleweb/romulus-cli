export const APP_INSTALLED = "<%= name %>/APP_INSTALLED";

interface AppInstalled {
  type: typeof APP_INSTALLED;
}

export const appInstalled = (): AppInstalled => ({
  type: APP_INSTALLED,
});

export type AppActions = AppInstalled;
