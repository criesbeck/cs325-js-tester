// JSON.stringify() turned out not to return useful strings for NaN, undefined, promises, etc.
export const resultText = (result) => (
  Array.isArray(result)
  ? `[${result.map(resultText).join(', ')}]`
  : typeof result === 'string'
  ? `'${result}'`
  : !(result instanceof Object) || (result instanceof Function) || (result instanceof Promise)
  ? `${result}`
  : `{${Object.keys(result).map(key => `${key}: ${resultText(result[key])}`).join(', ')}}`
);

const argText = inputs => (
  inputs.map(resultText).join(', ')
);

const evalTest = (code, inputs, output) => {
  try {
    return code(...inputs);
  } catch (err) {
    return err.message;
  }
};

const equal = (x, y) => (
  x === y || (
    sameType(x, y) &&
    typeof x === 'object' &&
    Object.keys(x).length === Object.keys(y).length &&
    Object.keys(x).every(i => equal(x[i], y[i]))
  )
);

const sameType = (x, y) => (
  typeof x === typeof y &&
  Array.isArray(x) === Array.isArray(y)
);

const testCaseResult = (exercise, fn, testCase) => {
  const call = `${exercise}(${argText(testCase.inputs)})`;
  const type = testCase.type || 'text';
  const result = fn && evalTest(fn, testCase.inputs);
  const expected = testCase.output;
  const success = fn && equal(expected, result);
  return { call, result, expected, success, type }
};

const exerciseSummary = (results) => (
  results.every(result => result.success === undefined) 
  ? 'not-started'
  : results.every(result => result.success) 
  ? 'passed'
  : 'failed'
);

const exerciseTestResults = (exercise, data, solutions) => {
  const fn = solutions[exercise];
  const results = data.tests.map(testCase => (
    testCaseResult(exercise, fn, testCase)
  ));
  const success = exerciseSummary(results);
  return {
    exercise, data, results, success
  };
};

const moduleSummary = (results) => (
  results.every(result => result.success === 'passed')
  ? 'passed'
  : results.some(result => result.success === 'failed')
  ? 'failed'
  : results.every(result => result.success === 'not-started')
  ? 'not-started'
  : 'mixed'
);

const moduleTestResults = (module, data, solutions) => {
  const results = Object.entries(data.exercises).map(entry => (
    exerciseTestResults(...entry, solutions)
  ));
  const success = moduleSummary(results);
  return { 
    id: module, ...data, success, results
  };
};

export const testSolutions = (modules, solutions) => (
  Object.entries(modules).map(entry => moduleTestResults(...entry, solutions))
);