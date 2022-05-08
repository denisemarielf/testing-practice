const capitalize = require('./capitalize');
const reverseString = require('./reversestring');
const calculator = require('./calculator')
const caesarCipher = require('./caesar-cipher')
const analyzeArray = require('./analize-array')

test('string with the first character capitalized', () => {
  expect(capitalize('banana')).toMatch(/^[A-Z]/);
});

test('reverse string', () => {
  expect(reverseString('banana')).toMatch('ananab');
});

test('addition', () => {
  expect(calculator.add(1,2)).toBe(3)
})

test('substraction', () => {
  expect(calculator.subtract(4,2)).toBe(2)
})

test('divide', () => {
  expect(calculator.divide(9,3)).toBe(3)
})

test('multiply', () => {
  expect(calculator.multiply(5,5)).toBe(25)
})

test('caesarCipher', () => {
  expect(caesarCipher('abcdefghijklmnopqrstuvw, xyz!', 1).match('efghijklmnopqrstuvwxyza, bcd!'))
})

test('analyze object', () => {
  expect(analyzeArray([1,8,3,4,2,6])).toMatchObject({
    average: 4,
    min: 1,
    max: 8,
    length: 6
  })
})