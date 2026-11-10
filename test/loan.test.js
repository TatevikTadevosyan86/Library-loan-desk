import { test } from 'node:test';
import assert from 'node:assert/strict';
import { calculateDueDay } from '../src/loan.js';

test('a loan is due seven days after checkout', () => {
  const actual = calculateDueDay(10);
  const expected = 17;
  assert.equal(actual, expected);
});


