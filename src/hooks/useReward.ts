import { useCallback } from 'react'

import useUzo from './useUzo'
import { useWallet } from 'use-wallet'

import { harvest, getMasterChefContract } from '../uzo/utils'

const useReward = (pid: number) => {
  const { account } = useWallet()
  const uzo = useUzo()
  const masterChefContract = getMasterChefContract(uzo)

  const handleReward = useCallback(async () => {
    const txHash = await harvest(masterChefContract, pid, account)
    console.log(txHash)
    return txHash
  }, [account, pid, uzo])

  return { onReward: handleReward }
}

export default useReward
