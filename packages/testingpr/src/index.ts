import { type IActionPlugin } from '@rabbitholegg/questdk'

import {
  mint,
  getSupportedChainIds,
  getSupportedTokenAddresses,
} from './Testingpr.js'

export const Testingpr: IActionPlugin = {
  pluginId: 'testingpr',
  getSupportedTokenAddresses,
  getSupportedChainIds,
  mint,
}
