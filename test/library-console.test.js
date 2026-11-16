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
test('the return command returns the requested book', (t) => {
  const checkoutService = { checkout: t.mock.fn() };
  const returnService = { returnBook: t.mock.fn() };
  const libraryConsole = new LibraryConsole(checkoutService, returnService);

  libraryConsole.runCommand('return B42');

  const calls = returnService.returnBook.mock.calls;
  assert.equal(calls.length, 1);

  const returnedBookId = calls[0].arguments[0];
  assert.equal(returnedBookId, 'B42');
});

test('the return command displays the book ID and late fee', (t) => {
  const checkoutService = { checkout: t.mock.fn() };

  const receipt = { bookId: 'B42', lateFee: 2 };
  const returnService = { returnBook: () => receipt };

  const print = t.mock.fn();
  const libraryConsole = new LibraryConsole(checkoutService, returnService, print);

  libraryConsole.runCommand('return B42');

  const calls = print.mock.calls;
  assert.equal(calls.length, 1);

  const message = calls[0].arguments[0];
  assert.equal(message, 'Book B42 returned. Late fee: 2.');
});
test('the borrow command displays the book ID and due day', (t) => {
  const loan = { bookId: 'B42', checkoutDay: 10, dueDay: 17 };
  const checkoutService = { checkout: () => loan };
  const returnService = { returnBook: t.mock.fn() };
  const print = t.mock.fn();
  const libraryConsole = new LibraryConsole(checkoutService, returnService, print);

  libraryConsole.runCommand('borrow B42');

  const calls = print.mock.calls;
  assert.equal(calls.length, 1);

  const message = calls[0].arguments[0];
  assert.equal(message, 'Book B42 borrowed. Due on day 17.');
});