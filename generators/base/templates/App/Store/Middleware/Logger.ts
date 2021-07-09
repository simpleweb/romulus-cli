import { createLogger } from "redux-logger";

const blocklist: string[] = [];

export default createLogger({
  predicate: (getState, action) => !blocklist.includes(action.type),
  collapsed: true,
});
