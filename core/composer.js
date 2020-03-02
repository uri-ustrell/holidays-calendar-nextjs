export const compose = (...functions) => args => functions.reduce((arg, fn) => fn(arg), args);
