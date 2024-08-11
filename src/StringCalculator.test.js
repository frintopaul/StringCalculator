import { render, screen } from '@testing-library/react';
import { calc } from './StringCalculator.js';

test('should return 0 for an empty string', () => {
  expect(calc("")).toBe(0);
});

test('should return the number for a single number string', () => {
  expect(calc("1")).toBe(1);
  expect(calc("2")).toBe(2);
});

test('should return the sum of two numbers separated by a comma', () => {
  expect(calc("1,2")).toBe(3);
});

test('should handle newlines as separators', () => {
  expect(calc("1\n2,3")).toBe(6);
});

test('should throw an error for invalid input', () => {
  expect(() => calc("1,\n")).toThrow("Invalid input");
});

test('should handle any number of numbers', () => {
  const input = "1,2,3,4,5"; // 5 numbers
  expect(calc(input)).toBe(15); // Sum is 15

  const largeInput = Array(100).fill(1).join(','); // 100 '1's
  expect(calc(largeInput)).toBe(100); // Sum is 100

  const mixedInput = "1,2,3\n4,5,6"; // Mixed delimiters
  expect(calc(mixedInput)).toBe(21); // Sum is 21
});