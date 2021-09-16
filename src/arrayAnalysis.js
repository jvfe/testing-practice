function analyze(arg) {
  return {
    average: avg_arr(arg),
    min: Math.min(...arg),
    max: Math.max(...arg),
    length: arg.length,
  };
}

function avg_arr(arg) {
  const summation = arg.reduce((a, b) => a + b);
  return summation / arg.length;
}

export default analyze;
