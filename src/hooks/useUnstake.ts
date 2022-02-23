import { useCallback } from 'react'

import useUzo from './useUzo'
import { useWallet } from 'use-wallet'

import { unstake, getMasterChefContract } from '../uzo/utils'

const useUnstake = (pid: number) => {
  const { account } = useWallet()
  const uzo = useUzo()
  const masterChefContract = getMasterChefContract(uzo)

  const handleUnstake = useCallback(
    async (amount: string) => {
      const txHash = await unstake(masterChefContract, pid, amount, account)
      console.log(txHash)
    },
    [account, pid, uzo],
  )

  return { onUnstake: handleUnstake }
}

export default useUnstake
