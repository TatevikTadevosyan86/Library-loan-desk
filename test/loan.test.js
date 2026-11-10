import { test } from 'node:test';
import assert from 'node:assert/strict';
import { calculateDueDay, createLoan } from '../src/loan.js';

test('a loan is due seven days after checkout', () => {
  const actual = calculateDueDay(10);
  const expected = 17;
  assert.equal(actual, expected);
});

test('checkout creates a loan record for the book', () => {
  const actual = createLoan('B42', 10);
  const expected = { bookId: 'B42', checkoutDay: 10, dueDay: 17 };
  assert.deepEqual(actual, expected);
});
