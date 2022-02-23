import BigNumber from 'bignumber.js/bignumber'


export const SUBTRACT_GAS_LIMIT = 100000

const ONE_MINUTE_IN_SECONDS = new BigNumber(60)
const ONE_HOUR_IN_SECONDS = ONE_MINUTE_IN_SECONDS.times(60)
const ONE_DAY_IN_SECONDS = ONE_HOUR_IN_SECONDS.times(24)
const ONE_YEAR_IN_SECONDS = ONE_DAY_IN_SECONDS.times(365)

export const INTEGERS = {
  ONE_MINUTE_IN_SECONDS,
  ONE_HOUR_IN_SECONDS,
  ONE_DAY_IN_SECONDS,
  ONE_YEAR_IN_SECONDS,
  ZERO: new BigNumber(0),
  ONE: new BigNumber(1),
  ONES_31: new BigNumber('4294967295'), // 2**32-1
  ONES_127: new BigNumber('340282366920938463463374607431768211455'), // 2**128-1
  ONES_255: new BigNumber(
    '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  ), // 2**256-1
  INTEREST_RATE_BASE: new BigNumber('1e18'),
}



export const contractAddresses = {
  uzo: {
    97: '0x6Ce997F6bFCC7A691890710Eb49C71b79fd1dBF1',
  },
  masterChef: {
    97: '0x9D4ee0265f5038737FbB284CdA0A5aaa67e8C9E1',
  },
  weth: {
    97: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
  },
  xUzo: {
    97: '0xc2e5085Eb9aBcE15954EB60EB10AD1c7467d4f1E'
  }
}



export const supportedPools = [
   {
     pid: 0,
     lpAddresses: {
       97: '0x3C2994f4353F19BE14ca654f09a6BbE9087bafb5',
     },
     tokenAddresses: {
       97: '0x6Ce997F6bFCC7A691890710Eb49C71b79fd1dBF1',
     },
     name: 'UZO YOOO!',
     symbol: 'UZO-WROSE',
     tokenSymbol: 'UZO',
     icon: '👨🏻‍✈️',
   },
 
]
