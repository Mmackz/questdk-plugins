import { type IActionPlugin } from '@rabbitholegg/questdk'

import {
  burn,
  getSupportedChainIds,
  getSupportedTokenAddresses,
} from './Testpr.js'

export const Testpr: IActionPlugin = {
  pluginId: 'testpr',
  getSupportedTokenAddresses,
  getSupportedChainIds,
  burn,
}
