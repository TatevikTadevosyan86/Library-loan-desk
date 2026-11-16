import { test } from 'node:test';
import assert from 'node:assert/strict';
import { LoanRepository } from '../src/loan-repository.js';

test('finds a saved loan by book ID', () => {
  const repository = new LoanRepository();
  const loan = { bookId: 'B42', checkoutDay: 10, dueDay: 17 };
  repository.save(loan);
  const foundLoan = repository.findByBookId('B42');
  assert.equal(foundLoan, loan);
});
test('a removed loan can no longer be found', () => {
  const repository = new LoanRepository();
  const loan = { bookId: 'B42', checkoutDay: 10, dueDay: 17 };
  repository.save(loan);

  repository.remove('B42');

  const foundLoan = repository.findByBookId('B42');
  assert.equal(foundLoan, undefined);
});