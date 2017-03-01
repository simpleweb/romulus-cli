// @flow

const log = (...args: any) => {
  if (console.log) {
    console.log(...args);
  }
};

const success = (message: string, ...rest: any) => {
  log(
    `%c${message}`, "color: white; background-color: green;",
    ...rest
  );
};

const error = (message: string, ...rest: any) => {
  log(
    `%c${message}`, "color: white; background-color: red;",
    ...rest
  );
};

const warn = (message: string, ...rest: any) => {
  log(
    `%c${message}`, "color: white; background-color: orange;",
    ...rest
  );
};

export {
  log,
  success,
  error,
  warn,
};
