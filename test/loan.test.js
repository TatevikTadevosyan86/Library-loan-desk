import { test } from 'node:test';
import assert from 'node:assert/strict';
import { calculateDueDay, createLoan, Loan } from '../src/loan.js';

test('a loan is due seven days after checkout', () => {
  const actual = calculateDueDay(10);
  const expected = 17;
  assert.equal(actual, expected);
});

test('checkout creates a loan record for the book', () => {
  const actual = createLoan('B42', 10);
  const expected = { bookId: 'B42', checkoutDay: 10, dueDay: 17 };
  assert.equal(actual.bookId, expected.bookId);
  assert.equal(actual.checkoutDay, expected.checkoutDay);
  assert.equal(actual.dueDay, expected.dueDay);
});
test('createLoan returns a Loan instance', () => {
  const loan = createLoan('B42', 10);
  const isLoanInstance = loan instanceof Loan;

  assert.equal(isLoanInstance, true);
});