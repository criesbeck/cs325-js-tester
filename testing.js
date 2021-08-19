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

const caseTestResult = (exercise, fn, testCase) => {
  const call = `${exercise}(${argText(testCase.inputs)})`;
  const type = testCase.type || 'text';
  const result = fn && evalTest(fn, testCase.inputs);
  const expected = testCase.output;
  const success = fn && equal(expected, result);
  return { call, result, expected, success, type }
};

const exerciseTestResults = (exercise, data, solutions) => {
  const fn = solutions[exercise];
  const results = data.tests.map(testCase => (
    caseTestResult(exercise, fn, testCase)
  ));
  const success = !fn 
    ? 'not-started'
    : results.every(result => result.success) 
    ? 'passed'
    : 'failed';
  return {
    exercise, data, results, success
  };
};

const moduleTestResults = (module, data, solutions) => {
  const results = Object.entries(data.exercises).map(entry => (
    exerciseTestResults(...entry, solutions)
  ));
  const success = results.every(result => result.success === 'passed')
    ? 'passed'
    : results.every(result => result.success === 'failed')
    ? 'failed'
    : results.every(result => result.success === 'not-started')
    ? 'not-started'
    : 'mixed';
  return { 
    id: module, ...data, success, results
  };
};

export const testSolutions = (modules, solutions) => (
  Object.entries(modules).map(entry => moduleTestResults(...entry, solutions))
);