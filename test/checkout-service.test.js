import { test } from 'node:test';
import assert from 'node:assert/strict';
import { CheckoutService } from '../src/checkout-service.js';

test('checkout service creates a loan record for the book exactly once', (t) => {
  const repository = {save:t.mock.fn()};
  const service = new CheckoutService(repository);
  service.checkout('B42', 10);
  assert.equal(repository.save.mock.calls.length, 1);
})

test('checkout does not save another loan for an already borrowed book', (t) => {
  const existingLoan = { bookId: 'B42', checkoutDay: 10, dueDay: 17 };
  const repository = {
    save: t.mock.fn(),
    findByBookId: () => existingLoan
  };
  const service = new CheckoutService(repository);
  service.checkout('B42', 11);
  assert.equal(repository.save.mock.calls.length, 0);
});