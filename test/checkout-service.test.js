import { test } from 'node:test';
import assert from 'node:assert/strict';
import { CheckoutService } from '../src/checkout-service.js';

test('checkout saves a loan once when the book is available', (t) => {
  const repository = {
    save:t.mock.fn()
  , findByBookId: () => undefined};
  const service = new CheckoutService(repository);
  service.checkout('B42', 10);
  assert.equal(repository.save.mock.calls.length, 1);
})

test('checkout does not save another loan for an already borrowed book', (t) => {
  
  const repository = {
    save: t.mock.fn(),
    findByBookId: () => ({ bookId: 'B42', checkoutDay: 10, dueDay: 17 }),
  };
  const service = new CheckoutService(repository);
  service.checkout('B42', 11);
  assert.equal(repository.save.mock.calls.length, 0);
});

test('checkout saves the loan supplied by the factory', (t) => {
  const loanFromFactory = { bookId: 'B42', checkoutDay: 10, dueDay: 17 };
  const factory = {
    create: () => loanFromFactory
  };
  const repository = {
    save: t.mock.fn(),
    findByBookId: () => undefined,
  };
  const service = new CheckoutService(repository,factory);
  service.checkout('B42', 10);

  const savedLoan = repository.save.mock.calls[0].arguments[0];
  assert.equal(savedLoan, loanFromFactory);
});