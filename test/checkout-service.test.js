import { test } from 'node:test';
import assert from 'node:assert/strict';
import { CheckoutService } from '../src/checkout-service.js';

test('checkout service creates a loan record for the book exactly once', (t) => {
  const repository = {save:t.mock.fn()};
  const service = new CheckoutService(repository);
  service.checkout('B42', 10);
  assert.equal(repository.save.mock.calls.length, 1);
})