function add(...args) {
  return args.reduce((a, b) => a + b);
}

function sub(...args) {
  return args.reduce((a, b) => a - b);
}

function div(...args) {
  return args.reduce((a, b) => a / b);
}

function mult(...args) {
  return args.reduce((a, b) => a * b);
}

export { add, sub, div, mult };
