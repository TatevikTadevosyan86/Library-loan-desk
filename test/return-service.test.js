import { test } from 'node:test';
import assert from 'node:assert/strict';
import { ReturnService,ReturnReceipt } from '../src/return-service.js';

test('returning a borrowed book removes its active loan', (t) => {
  const existingLoan = { bookId: 'B42', checkoutDay: 10, dueDay: 17 };
  const repository = {
    findByBookId: () => existingLoan,
    remove: t.mock.fn(),
  };
  const clock = { today: () => 17 };
  const service = new ReturnService(repository, clock);

  service.returnBook('B42');

  const calls = repository.remove.mock.calls;
  assert.equal(calls.length, 1);

  const removedBookId = calls[0].arguments[0];
  assert.equal(removedBookId, 'B42');
});

test('returning a book two days late gives a receipt with a fee of 2', (t) => {
  const existingLoan = { bookId: 'B42', checkoutDay: 10, dueDay: 17 };
  const repository = {
    findByBookId: () => existingLoan,
    remove: t.mock.fn(),
  };
  const clock = { today: () => 19 };
  const service = new ReturnService(repository, clock);

  const receipt = service.returnBook('B42');

assert.equal(receipt instanceof ReturnReceipt, true);
assert.equal(receipt.bookId, 'B42');
assert.equal(receipt.lateFee, 2);
});