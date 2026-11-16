import { test } from 'node:test';
import assert from 'node:assert/strict';
import { LibraryConsole } from '../src/library-console.js';

test('the borrow command checks out the requested book', (t) => {
  const checkoutService = { checkout: t.mock.fn() };
  const libraryConsole = new LibraryConsole(checkoutService);

  libraryConsole.runCommand('borrow B42');

  const calls = checkoutService.checkout.mock.calls;
  assert.equal(calls.length, 1);
  assert.equal(calls[0].arguments[0], 'B42');
});