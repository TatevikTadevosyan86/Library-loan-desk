import { test } from 'node:test';
import assert from 'node:assert/strict';
import { LoanFactory } from '../src/loan-factory.js';

test('creates a loan due seven days after today', () => {
  const clock = { today: () => 10 };
  const factory = new LoanFactory(clock);

  const loan = factory.createLoan('B42');
  const expected = { bookId: 'B42'};
  assert.equal(loan, expected);

}