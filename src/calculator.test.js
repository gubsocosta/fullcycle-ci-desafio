const { sum, sub } = require('./calculator');

test('should sum two numbers', () => {
  expect(sum(2, 3)).toBe(5);
});

test('should subtract two numbers', () => {
  expect(sub(5, 3)).toBe(2);
});
