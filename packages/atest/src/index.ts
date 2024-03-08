import {
  type IActionPlugin,
} from '@rabbitholegg/questdk'

import {
  mint,
  getSupportedChainIds,
  getSupportedTokenAddresses,
} from './Atest.js'

export const Atest: IActionPlugin = {
  pluginId: "atest",
  getSupportedTokenAddresses,
  getSupportedChainIds,
  mint, 
}
