import React, { useCallback, useEffect, useState } from 'react'

import { useWallet } from 'use-wallet'
import useUzo from '../../hooks/useUzo'

import { bnToDec } from '../../utils'
import { getMasterChefContract, getEarned } from '../../uzo/utils'
import { getFarms } from '../../uzo/utils'

import Context from './context'
import { Farm } from './types'

const Farms: React.FC = ({ children }) => {
  const [unharvested, setUnharvested] = useState(0)

  const uzo = useUzo()
  const { account } = useWallet()

  const farms = getFarms(uzo)

  return (
    <Context.Provider
      value={{
        farms,
        unharvested,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default Farms
