export const STARGATE_BRIDGE_ABI = [
  {
    inputs: [
      { internalType: 'uint16', name: '_dstChainId', type: 'uint16' },
      {
        internalType: 'address payable',
        name: '_refundAddress',
        type: 'address',
      },
      { internalType: 'bytes', name: '_toAddress', type: 'bytes' },
      { internalType: 'uint256', name: '_amountLD', type: 'uint256' },
      { internalType: 'uint256', name: '_minAmountLD', type: 'uint256' },
    ],
    name: 'swapETH',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint16', name: '_dstChainId', type: 'uint16' },
      { internalType: 'uint256', name: '_srcPoolId', type: 'uint256' },
      { internalType: 'uint256', name: '_dstPoolId', type: 'uint256' },
      {
        internalType: 'address payable',
        name: '_refundAddress',
        type: 'address',
      },
      { internalType: 'uint256', name: '_amountLD', type: 'uint256' },
      { internalType: 'uint256', name: '_minAmountLD', type: 'uint256' },
      {
        components: [
          { internalType: 'uint256', name: 'dstGasForCall', type: 'uint256' },
          { internalType: 'uint256', name: 'dstNativeAmount', type: 'uint256' },
          { internalType: 'bytes', name: 'dstNativeAddr', type: 'bytes' },
        ],
        internalType: 'struct IStargateRouter.lzTxObj',
        name: '_lzTxParams',
        type: 'tuple',
      },
      { internalType: 'bytes', name: '_to', type: 'bytes' },
      { internalType: 'bytes', name: '_payload', type: 'bytes' },
    ],
    name: 'swap',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
] as const
