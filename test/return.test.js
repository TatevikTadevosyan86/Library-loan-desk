import { test } from 'node:test';
import assert from 'node:assert/strict';
import { calculateLateFee } from '../src/return.js';

test('a book returned on its due day has no late fee', () => {
  const actual = calculateLateFee(17, 17);
  const expected = 0;
  assert.equal(actual, expected);
});

test('returning a book two days late costs 2 fee units',() => {
  const actual = calculateLateFee (17, 19)
  const expected = 2
  assert.equal(actual, expected)
})

test('returning a book before its due day costs nothing',() => {
  const actual = calculateLateFee (19, 17)
  const expected = 0
  assert.equal(actual, expected)
})