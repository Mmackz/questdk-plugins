import { Balancer } from '@rabbitholegg/questdk-plugin-balancer'
import { Kote } from '@rabbitholegg/questdk-plugin-kote'
import { ENTRYPOINT } from './contract-addresses'
import {
  type IntentParams,
  type MintIntentParams,
  type IActionPlugin,
  type ActionParams,
  ActionType,
  type BridgeActionParams,
  type DelegateActionParams,
  type MintActionParams,
  type OptionsActionParams,
  PluginActionNotImplementedError,
  type QuestActionParams,
  type StakeActionParams,
  type SwapActionParams,
  type TransactionFilter,
  type VoteActionParams,
} from '@rabbitholegg/questdk-plugin-utils'
import type { Address, PublicClient } from 'viem'

export const plugins: Record<string, IActionPlugin> = {
  [Balancer.pluginId]: Balancer,
  [Kote.pluginId]: Kote,
}

export const getPlugin = (pluginId: string) => {
  const plugin = plugins[pluginId]
  if (!plugin) {
    throw new Error(`Unknown plugin "${pluginId}"`)
  }
  return plugin
}

export const getTxIntent = (
  plugin: IActionPlugin,
  actionType: ActionType,
  params: IntentParams,
) => {
  switch (actionType) {
    case ActionType.Mint:
      if (plugin.getMintIntent !== undefined) {
        return plugin.getMintIntent(params as unknown as MintIntentParams)
      } else {
        throw new PluginActionNotImplementedError()
      }
    default:
      throw new Error(`Unknown action type "${actionType}"`)
  }
}

export const getTxSimulation = (
  plugin: IActionPlugin,
  actionType: ActionType,
  params: IntentParams,
  value: bigint,
  client?: PublicClient,
  account?: Address,
) => {
  switch (actionType) {
    case ActionType.Mint:
      if (plugin.simulateMint !== undefined) {
        return plugin.simulateMint(
          params as unknown as MintIntentParams,
          value,
          account,
          client,
        )
      } else {
        throw new PluginActionNotImplementedError()
      }
    default:
      throw new Error(`Unknown action type "${actionType}"`)
  }
}

export const getProjectFees = (
  plugin: IActionPlugin,
  actionType: ActionType,
  params: ActionParams,
) => {
  switch (actionType) {
    case ActionType.Mint:
      if (plugin.mint && plugin.getProjectFees) {
        return plugin.getProjectFees(params as unknown as MintActionParams)
      } else {
        throw new PluginActionNotImplementedError()
      }
    default:
      throw new Error(`Unknown action type "${actionType}"`)
  }
}

export const executePlugin = (
  plugin: IActionPlugin,
  actionType: ActionType,
  params: ActionParams,
): Promise<TransactionFilter | PluginActionNotImplementedError> => {
  switch (actionType) {
    case ActionType.Bridge:
      if (plugin.bridge === undefined) {
        return Promise.reject(new PluginActionNotImplementedError())
      } else return plugin.bridge(params as unknown as BridgeActionParams)
    case ActionType.Swap:
      if (plugin.swap === undefined) {
        return Promise.reject(new PluginActionNotImplementedError())
      } else return plugin.swap(params as unknown as SwapActionParams)
    case ActionType.Mint:
      if (plugin.mint === undefined) {
        return Promise.reject(new PluginActionNotImplementedError())
      } else return plugin.mint(params as unknown as MintActionParams)
    case ActionType.Delegate: {
      if (plugin.delegate === undefined) {
        return Promise.reject(new PluginActionNotImplementedError())
      } else return plugin.delegate(params as unknown as DelegateActionParams)
    }
    case ActionType.Quest: {
      if (plugin.quest === undefined) {
        return Promise.reject(new PluginActionNotImplementedError())
      } else return plugin.quest(params as unknown as QuestActionParams)
    }
    case ActionType.Stake: {
      if (plugin.stake === undefined) {
        return Promise.reject(new PluginActionNotImplementedError())
      } else return plugin.stake(params as unknown as StakeActionParams)
    }
    case ActionType.Options: {
      if (plugin.options === undefined) {
        return Promise.reject(new PluginActionNotImplementedError())
      } else return plugin.options(params as unknown as OptionsActionParams)
    }
    case ActionType.Vote: {
      if (plugin.vote === undefined) {
        return Promise.reject(new PluginActionNotImplementedError())
      } else return plugin.vote(params as unknown as VoteActionParams)
    }
    default:
      throw new Error(`Unknown action type "${actionType}"`)
  }
}

export const getIndexedContracts = (_chainId: number) => {
  return [ENTRYPOINT]
}
