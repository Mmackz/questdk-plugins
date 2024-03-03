import { type BurnActionParams } from '@rabbitholegg/questdk'
import {
  createTestCase,
  type TestParams,
} from '@rabbitholegg/questdk-plugin-utils'

// values are placeholders, replace with actual values from your test transaction
export const BURN_TEST: TestParams<BurnActionParams> = {
  transaction: {
    chainId: 1,
    from: '0x0',
    hash: '0x0',
    input: '0x0',
    to: '0x0',
    value: '0',
  },
  params: {
    chainId: 1,
    contractAddress: '0x0',
    tokenId: 0,
    amount: '0',
  },
}

export const passingTestCases = [
  createTestCase(BURN_TEST, 'this is a demo test'),
]

export const failingTestCases = [
  createTestCase(BURN_TEST, 'when chainId is not correct', { chainId: 99 }),
]
