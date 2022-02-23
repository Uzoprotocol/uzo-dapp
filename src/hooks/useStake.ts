import { useCallback } from 'react'

import useUzo from './useUzo'
import { useWallet } from 'use-wallet'

import { stake, getMasterChefContract } from '../uzo/utils'

const useStake = (pid: number) => {
  const { account } = useWallet()
  const uzo = useUzo()

  const handleStake = useCallback(
    async (amount: string) => {
      const txHash = await stake(
        getMasterChefContract(uzo),
        pid,
        amount,
        account,
      )
      console.log(txHash)
    },
    [account, pid, uzo],
  )

  return { onStake: handleStake }
}

export default useStake
