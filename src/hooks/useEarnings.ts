import { useCallback, useEffect, useState } from 'react'
import { provider } from 'web3-core'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'

import { getEarned, getMasterChefContract } from '../uzo/utils'
import useUzo from './useUzo'
import useBlock from './useBlock'

const useEarnings = (pid: number) => {
  const [balance, setBalance] = useState(new BigNumber(0))
  const {
    account,
    ethereum,
  }: { account: string; ethereum: provider } = useWallet()
  const uzo = useUzo()
  const masterChefContract = getMasterChefContract(uzo)
  const block = useBlock()

  const fetchBalance = useCallback(async () => {
    const balance = await getEarned(masterChefContract, pid, account)
    setBalance(new BigNumber(balance))
  }, [account, masterChefContract, uzo])

  useEffect(() => {
    if (account && masterChefContract && uzo) {
      fetchBalance()
    }
  }, [account, block, masterChefContract, setBalance, uzo])

  return balance
}

export default useEarnings
