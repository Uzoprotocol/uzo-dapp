import {useCallback} from 'react'

import useUzo from './useUzo'
import {useWallet} from 'use-wallet'

import {enter, getXUzoStakingContract} from '../uzo/utils'

const useEnter = () => {
  const {account} = useWallet()
  const uzo = useUzo()

  const handle = useCallback(
    async (amount: string) => {
      const txHash = await enter(
        getXUzoStakingContract(uzo),
        amount,
        account,
      )
      console.log(txHash)
    },
    [account, uzo],
  )

  return {onEnter: handle}
}

export default useEnter
