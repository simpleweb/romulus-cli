import { createLogger } from 'redux-logger';

const blacklist = [
  // If you wish to remove actions from the
  // logger, they should be added here
];

const Logger = createLogger({
  predicate: (getState, action) => !blacklist.includes(action.type)
});

module.exports = Logger;
