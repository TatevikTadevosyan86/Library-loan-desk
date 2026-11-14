import { test } from 'node:test';
import assert from 'node:assert/strict';
import { calculateLateFee } from '../src/return.js';

test('a book returned on its due day has no late fee', (t) => {
  const actual = calculateLateFee(17, 17);
  const expected = 0;
  assert.equal(actual, expected);
});