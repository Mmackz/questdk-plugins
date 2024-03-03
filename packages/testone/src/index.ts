import { type IActionPlugin } from '@rabbitholegg/questdk'

import {
  mint,
  getSupportedChainIds,
  getSupportedTokenAddresses,
} from './TestOne.js'

export const TestOne: IActionPlugin = {
  pluginId: 'testone',
  getSupportedTokenAddresses,
  getSupportedChainIds,
  mint,
}
