import {useCallback} from 'react'

import useUzo from './useUzo'
import {useWallet} from 'use-wallet'

import {leave, getXUzoStakingContract} from '../uzo/utils'

const useLeave = () => {
  const {account} = useWallet()
  const uzo = useUzo()

  const handle = useCallback(
    async (amount: string) => {
      const txHash = await leave(
        getXUzoStakingContract(uzo),
        amount,
        account,
      )
      console.log(txHash)
    },
    [account, uzo],
  )

  return {onLeave: handle}
}

export default useLeave
