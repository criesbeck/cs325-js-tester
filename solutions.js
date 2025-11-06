// How to export solution functions from another file
// export * from './solutions/warmup.js';

// How to import and export the extensible match() function and additional matchers
// Assumes match() is defined in match-core.js and additional matchers in matchers.js
//
// import { addMatchers, match} from './solutions/match-core.js';
// import * as matchers from './solutions/matchers.js';
// addMatchers(matchers);
// export { match};

// Example of exporting directly from solutions.js
export const sumOfSquares = (x, y) => x + y;