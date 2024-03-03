import { apply } from '@rabbitholegg/questdk/filter'
import { describe, expect, test } from 'vitest'
import { passingTestCases, failingTestCases } from './test-transactions'
import { burn } from './Testpr'

describe('Given the testpr plugin', () => {
  describe('When handling the burn action', () => {
    describe('should pass filter with valid transactions', () => {
      passingTestCases.forEach((testCase) => {
        const { transaction, description, params } = testCase
        test(description, async () => {
          const filter = await burn(params)
          expect(apply(transaction, filter)).to.be.false
        })
      })
    })

    describe('should not pass filter with invalid transactions', () => {
      failingTestCases.forEach((testCase) => {
        const { transaction, description, params } = testCase
        test(description, async () => {
          const filter = await burn(params)
          expect(apply(transaction, filter)).to.be.false
        })
      })
    })
  })
})
