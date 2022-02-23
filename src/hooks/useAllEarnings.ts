import { useCallback, useEffect, useState } from 'react'
import { provider } from 'web3-core'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'

import { getEarned, getMasterChefContract, getFarms } from '../uzo/utils'
import useUzo from './useUzo'
import useBlock from './useBlock'

const useAllEarnings = () => {
  const [balances, setBalance] = useState([] as Array<BigNumber>)
  const { account }: { account: string; ethereum: provider } = useWallet()
  const uzo = useUzo()
  const farms = getFarms(uzo)
  const masterChefContract = getMasterChefContract(uzo)
  const block = useBlock()

  const fetchAllBalances = useCallback(async () => {
    const balances: Array<BigNumber> = await Promise.all(
      farms.map(({ pid }: { pid: number }) =>
        getEarned(masterChefContract, pid, account),
      ),
    )
    setBalance(balances)
  }, [account, masterChefContract, uzo])

  useEffect(() => {
    if (account && masterChefContract && uzo) {
      fetchAllBalances()
    }
  }, [account, block, masterChefContract, setBalance, uzo])

  return balances
}

export default useAllEarnings
