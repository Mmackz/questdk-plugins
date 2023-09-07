import {
  ETH_LAYER_ZERO_CHAIN_ID,
  BNB_LAYER_ZERO_CHAIN_ID,
  AVALANCHE_LAYER_ZERO_CHAIN_ID,
  POLYGON_LAYER_ZERO_CHAIN_ID,
  ARBITRUM_LAYER_ZERO_CHAIN_ID,
  OPTIMISM_LAYER_ZERO_CHAIN_ID,
  FANTOM_LAYER_ZERO_CHAIN_ID,
  METIS_LAYER_ZERO_CHAIN_ID,
  KAVA_LAYER_ZERO_CHAIN_ID,
  LINEA_LAYER_ZERO_CHAIN_ID,
  BASE_LAYER_ZERO_CHAIN_ID,
} from './chain-ids.js'

export const ETHEREUM_ETH_ROUTER = '0x150f94B44927F078737562f0fcF3C95c01Cc2376'
export const ETHEREUM_ROUTER = '0x8731d54E9D02c286767d56ac03e8037C07e01e98'
export const BNB_ROUTER = '0x4a364f8c717cAAD9A442737Eb7b8A55cc6cf18D8'
export const AVALANCHE_ROUTER = '0x45A01E4e04F14f7A4a6702c74187c5F6222033cd'
export const POLYGON_ROUTER = '0x45A01E4e04F14f7A4a6702c74187c5F6222033cd'
export const ARBITRUM_ETH_ROUTER = '0xbf22f0f184bCcbeA268dF387a49fF5238dD23E40'
export const ARBITRUM_ROUTER = '0x53Bf833A5d6c4ddA888F69c22C88C9f356a41614'
export const OPTIMISM_ETH_ROUTER = '0xB49c4e680174E331CB0A7fF3Ab58afC9738d5F8b'
export const OPTIMISM_ROUTER = '0xB0D502E938ed5f4df2E681fE6E419ff29631d62b'
export const FANTOM_ROUTER = '0xAf5191B0De278C7286d6C7CC6ab6BB8A73bA2Cd6'
export const METIS_ROUTER = '0x2F6F07CDcf3588944Bf4C42aC74ff24bF56e7590'
export const BASE_ETH_ROUTER = '0x50B6EbC2103BFEc165949CC946d739d5650d7ae4'
export const BASE_ROUTER = '0x45f1A95A4D3f3836523F5c83673c797f4d4d263B'
export const LINEA_ETH_ROUTER = '0x8731d54E9D02c286767d56ac03e8037C07e01e98'
export const LINEA_ROUTER = '0x2F6F07CDcf3588944Bf4C42aC74ff24bF56e7590'
export const KAVA_ROUTER = '0x2F6F07CDcf3588944Bf4C42aC74ff24bF56e7590'

// For some chains the ETH router is different than the router; in cases where it's not we populate with the router address
export const CHAIN_ID_TO_ETH_ROUTER_ADDRESS = {
  [ETH_LAYER_ZERO_CHAIN_ID]: ETHEREUM_ETH_ROUTER,
  [BNB_LAYER_ZERO_CHAIN_ID]: BNB_ROUTER,
  [AVALANCHE_LAYER_ZERO_CHAIN_ID]: AVALANCHE_ROUTER,
  [POLYGON_LAYER_ZERO_CHAIN_ID]: POLYGON_ROUTER,
  [ARBITRUM_LAYER_ZERO_CHAIN_ID]: ARBITRUM_ETH_ROUTER,
  [OPTIMISM_LAYER_ZERO_CHAIN_ID]: OPTIMISM_ETH_ROUTER,
  [FANTOM_LAYER_ZERO_CHAIN_ID]: FANTOM_ROUTER,
  [METIS_LAYER_ZERO_CHAIN_ID]: METIS_ROUTER,
  [KAVA_LAYER_ZERO_CHAIN_ID]: KAVA_ROUTER,
  [LINEA_LAYER_ZERO_CHAIN_ID]: LINEA_ETH_ROUTER,
  [BASE_LAYER_ZERO_CHAIN_ID]: BASE_ETH_ROUTER,
} as const

export const CHAIN_ID_TO_ROUTER_ADDRESS = {
  [ETH_LAYER_ZERO_CHAIN_ID]: ETHEREUM_ROUTER,
  [BNB_LAYER_ZERO_CHAIN_ID]: BNB_ROUTER,
  [AVALANCHE_LAYER_ZERO_CHAIN_ID]: AVALANCHE_ROUTER,
  [POLYGON_LAYER_ZERO_CHAIN_ID]: POLYGON_ROUTER,
  [ARBITRUM_LAYER_ZERO_CHAIN_ID]: ARBITRUM_ROUTER,
  [OPTIMISM_LAYER_ZERO_CHAIN_ID]: OPTIMISM_ROUTER,
  [FANTOM_LAYER_ZERO_CHAIN_ID]: FANTOM_ROUTER,
  [METIS_LAYER_ZERO_CHAIN_ID]: METIS_ROUTER,
  [KAVA_LAYER_ZERO_CHAIN_ID]: KAVA_ROUTER,
  [LINEA_LAYER_ZERO_CHAIN_ID]: LINEA_ROUTER,
  [BASE_LAYER_ZERO_CHAIN_ID]: BASE_ROUTER,
} as const


export const CHAIN_AND_POOL_TO_TOKEN_ADDRESS = {
  [ETH_LAYER_ZERO_CHAIN_ID]: {
    '0xdf0770dF86a8034b3EFEf0A1Bb3c889B8332FF56': 1,
    '0x38ea452219524bb87e18de1c24d3bb59510bd783': 2,
    '0x0Faf1d2d3CED330824de3B8200fc8dc6E397850d': 3,
    '0xfA0F307783AC21C39E939ACFF795e27b650F6e68': 7,
    '0x692953e758c3669290cb1677180c64183cEe374e': 11,
    '0x101816545F6bd2b1076434B54383a1E633390A2E': 13,
    '0x590d4f8A68583639f215f675F3a259Ed84790580': 14,
    '0xE8F55368C82D38bbbbDb5533e7F56AfC2E978CC2': 15,
    '0x9cef9a0b1be0d289ac9f4a98ff317c33eaa84eb8': 16,
    '0xd8772edBF88bBa2667ed011542343b0eDDaCDa47': 17,
    '0x430Ebff5E3E80A6C58E7e6ADA1d90F5c28AA116d': 19,
  },
  [BNB_LAYER_ZERO_CHAIN_ID]: {
    '0x9aA83081AA06AF7208Dcc7A4cB72C94d057D2cda': 2,
    '0x98a5737749490856b401DB5Dc27F522fC314A4e1': 5,
    '0x4e145a589e4c03cBe3d28520e4BF3089834289Df': 11,
    '0x7BfD7f2498C4796f10b6C611D9db393D3052510C': 16,
    '0xD4CEc732b3B135eC52a3c0bc8Ce4b8cFb9dacE46': 17,
    '0x68C6c27fB0e02285829e69240BE16f32C5f8bEFe': 19,
  },
  [AVALANCHE_LAYER_ZERO_CHAIN_ID]: {
    '0x1205f31718499dBf1fCa446663B532Ef87481fe1': 1,
    '0x29e38769f23701A2e4A8Ef0492e19dA4604Be62c': 2,
    '0x1c272232Df0bb6225dA87f4dEcD9d37c32f63Eea': 7,
    '0x8736f92646B2542B3e5F3c63590cA7Fe313e283B': 16,
    '0xEAe5c2F6B25933deB62f754f239111413A0A25ef': 19,
  },
  [POLYGON_LAYER_ZERO_CHAIN_ID]: {
    '0x1205f31718499dBf1fCa446663B532Ef87481fe1': 1,
    '0x29e38769f23701A2e4A8Ef0492e19dA4604Be62c': 2,
    '0x1c272232Df0bb6225dA87f4dEcD9d37c32f63Eea': 3,
    '0x8736f92646B2542B3e5F3c63590cA7Fe313e283B': 16,
  },
  [ARBITRUM_LAYER_ZERO_CHAIN_ID]: {
    '0x892785f33CdeE22A30AEF750F285E18c18040c3e': 1,
    '0xB6CfcF89a7B22988bfC96632aC2A9D6daB60d641': 2,
    '0xaa4BF442F024820B2C28Cd0FD72b82c63e66F56C': 7,
    '0x915A55e36A01285A14f05dE6e81ED9cE89772f8e': 13,
    '0x600E576F9d853c95d58029093A16EE49646F3ca5': 15,
    '0xF39B7Be294cB36dE8c510e267B82bb588705d977': 16,
  },
  [OPTIMISM_LAYER_ZERO_CHAIN_ID]: {
    '0xDecC0c09c3B5f6e92EF4184125D5648a66E35298': 1,
    '0x165137624F1f692e69659f944BF69DE02874ee27': 3,
    '0x368605D9C6243A80903b9e326f1Cddde088B8924': 7,
    '0xd22363e3762cA7339569F3d33EADe20127D5F98C': 13,
    '0x2F8bC9081c7FCFeC25b9f41a50d97EaA592058ae': 14,
    '0x3533F5e279bDBf550272a199a223dA798D9eff78': 15,
    '0x5421FA1A48f9FF81e4580557E86C7C0D24C18036': 16,
  },
  [FANTOM_LAYER_ZERO_CHAIN_ID]: {
    '0xc647ce76ec30033aa319d472ae9f4462068f2ad7': 21,
  },
  [METIS_LAYER_ZERO_CHAIN_ID]: {
    '0xAad094F6A75A14417d39f04E690fC216f080A41a': 17,
    '0x2b60473a7C41Deb80EDdaafD5560e963440eb632': 19,
  },
  [KAVA_LAYER_ZERO_CHAIN_ID]: {
    '0xAad094F6A75A14417d39f04E690fC216f080A41a': 2,
  },
  [LINEA_LAYER_ZERO_CHAIN_ID]: {
    '0xAad094F6A75A14417d39f04E690fC216f080A41a': 13,
  },
  [BASE_LAYER_ZERO_CHAIN_ID]: {
    '0x4c80e24119cfb836cdf0a6b53dc23f04f7e652ca': 1,
    '0x28fc411f9e1c480AD312b3d9C60c22b965015c6B': 13,
  },
} as const
