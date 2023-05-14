const { sum, sub, mult } = require('./calculator');

describe('when sum two numbers', () => {
  it('should throw an exception if any parameter is not a number', () => {
    expect(() => sum(2, 'a')).toThrow('parameter "a" is not a number');
  });

  it('should sum two numbers', () => {
    expect(sum(2, 3)).toBe(5);
  });
});

describe('when substract two numbers', () => {
  it('should throw an exception if any parameter is not a number', () => {
    expect(() => sub(2, 'a')).toThrow('parameter "a" is not a number');
  });

  it('should subtract two numbers', () => {
    expect(sub(5, 3)).toBe(2);
  });
});

describe('when mulltiply two numbers', () => {
  it('should throw an exception if any parameter is not a number', () => {
    expect(() => mult(2, 'a')).toThrow('parameter "a" is not a number');
  });

  it('should multiply two numbers', () => {
    expect(mult(2, 3)).toBe(6);
  });
});
