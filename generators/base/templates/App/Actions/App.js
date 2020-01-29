export const APP_INSTALLED = '<%= name %>/APP_INSTALLED';

export type AppInstalled = {
  type: '<%= name %>/APP_INSTALLED',
};

export const appInstalled = (): AppInstalled => ({
  type: APP_INSTALLED,
});
