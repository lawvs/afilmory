import assert from 'node:assert/strict'
// eslint-disable-next-line test/no-import-node-test
import test from 'node:test'

import { canUsePhotoReactions } from './reaction-availability'

test('photo reactions are hidden in standalone web mode', () => {
  assert.equal(
    canUsePhotoReactions({
      useApi: false,
      useCloud: false,
      useNext: false,
    }),
    false,
  )
})

test('photo reactions are available when an API backend is injected', () => {
  assert.equal(
    canUsePhotoReactions({
      useApi: true,
      useCloud: false,
      useNext: true,
    }),
    true,
  )
})

test('photo reactions are available in cloud mode', () => {
  assert.equal(
    canUsePhotoReactions({
      useApi: false,
      useCloud: true,
      useNext: false,
    }),
    true,
  )
})
