import {useCallback} from 'react'

import useUzo from './useUzo'
import {useWallet} from 'use-wallet'
import {provider} from 'web3-core'
import {
  approve,
  getUzoContract,
  getXUzoStakingContract
} from '../uzo/utils'

const useApproveStaking = () => {
  const {account}: { account: string; ethereum: provider } = useWallet()
  const uzo = useUzo()
  const lpContract = getUzoContract(uzo)
  const contract = getXUzoStakingContract(uzo)

  const handleApprove = useCallback(async () => {
    try {
      const tx = await approve(lpContract, contract, account)
      return tx
    } catch (e) {
      return false
    }
  }, [account, lpContract, contract])

  return {onApprove: handleApprove}
}

export default useApproveStaking
