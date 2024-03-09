import {
  type IActionPlugin,
} from '@rabbitholegg/questdk'

import {
  swap,
  getSupportedChainIds,
  getSupportedTokenAddresses,
} from './Appa.js'

export const Appa: IActionPlugin = {
  pluginId: "appa",
  getSupportedTokenAddresses,
  getSupportedChainIds,
  swap, 
}
