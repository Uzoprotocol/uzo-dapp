import { useCallback, useEffect, useState } from 'react'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'

import { getStaked, getMasterChefContract } from '../uzo/utils'
import useUzo from './useUzo'
import useBlock from './useBlock'

const useStakedBalance = (pid: number) => {
  const [balance, setBalance] = useState(new BigNumber(0))
  const { account }: { account: string } = useWallet()
  const uzo = useUzo()
  const masterChefContract = getMasterChefContract(uzo)
  const block = useBlock()

  const fetchBalance = useCallback(async () => {
    const balance = await getStaked(masterChefContract, pid, account)
    setBalance(new BigNumber(balance))
  }, [account, pid, uzo])

  useEffect(() => {
    if (account && uzo) {
      fetchBalance()
    }
  }, [account, pid, setBalance, block, uzo])

  return balance
}

export default useStakedBalance
