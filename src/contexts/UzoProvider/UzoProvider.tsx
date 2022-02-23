import React, { createContext, useEffect, useState } from 'react'

import { useWallet } from 'use-wallet'

import { Uzo } from '../../uzo'

export interface UzoContext {
  uzo?: typeof Uzo
}

export const Context = createContext<UzoContext>({
  uzo: undefined,
})

declare global {
  interface Window {
    uzosauce: any
  }
}

const UzoProvider: React.FC = ({ children }) => {
  const { ethereum }: { ethereum: any } = useWallet()
  const [uzo, setUzo] = useState<any>()

  // @ts-ignore
  window.uzo = uzo
  // @ts-ignore


  useEffect(() => {
    if (ethereum) {
      const chainId = Number(ethereum.chainId)
      const uzoLib = new Uzo(ethereum, chainId, false, {
        defaultAccount: ethereum.selectedAddress,
        defaultConfirmations: 1,
        autoGasMultiplier: 1.5,
        testing: false,
        defaultGas: '6000000',
        defaultGasPrice: '1000000000000',
        accounts: [],
        ethereumNodeTimeout: 10000,
      })
      setUzo(uzoLib)
      window.uzosauce = uzoLib
    }
  }, [ethereum])

  return <Context.Provider value={{ uzo }}>{children}</Context.Provider>
}

export default UzoProvider
