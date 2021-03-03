import { createLogger } from "redux-logger";

const blacklist: string[] = [];

export default createLogger({
  predicate: (getState, action) => !blacklist.includes(action.type),
  collapsed: true,
});
