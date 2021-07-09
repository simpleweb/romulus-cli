import * as Keychain from "react-native-keychain";

const STORAGE_KEY = "@<%= name %>";

async function set(key: string, value: string | Object) {
  const store = await getStore();

  store[key] = value;

  return await Keychain.setGenericPassword(STORAGE_KEY, JSON.stringify(store));
}

async function get(key: string) {
  const store = await getStore();
  return store[key];
}

async function unset(key: string) {
  const store = await getStore();

  delete store[key];

  return await Keychain.setGenericPassword(STORAGE_KEY, JSON.stringify(store));
}

async function getStore() {
  const store = await Keychain.getGenericPassword();
  return store ? JSON.parse(store.password) : {};
}

export default {
  set,
  get,
  unset,
};
