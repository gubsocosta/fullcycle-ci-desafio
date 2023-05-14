const calculator = require('./calculator');

test('should sum two numbers', () => {
  expect(calculator.sum(2, 3)).toBe(5);
});

test('should subtract two numbers', () => {
  expect(calculator.sub(5, 3)).toBe(2);
});
