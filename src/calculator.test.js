const calculator = require('./calculator');

test('should sum two numbers', () => {
  expect(calculator.sum(2, 3)).toBe(5);
});

test('should subtract two numbers', () => {
  expect(calculator.sub(5, 3)).toBe(2);
});

test('should multiply two numbers', () => {
  expect(calculator.mult(2, 3)).toBe(6);
});
