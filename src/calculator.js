function areAllParametersNumbers(...parameters) {
  parameters.forEach(parameter => {
    if(typeof parameter !== 'number') {
        throw new Error(`parameter "${parameter}" is not a number`)
    }
  })
}

function sum(a, b) {
  areAllParametersNumbers(a, b)
  return a + b;
}

function sub(a, b) {
  areAllParametersNumbers(a, b)
  return a - b;
}


function mult(a, b) {
  areAllParametersNumbers(a, b)
  return a * b;
}

module.exports = { sum, sub, mult }
