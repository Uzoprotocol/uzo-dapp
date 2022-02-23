import { useContext } from 'react'
import { Context } from '../contexts/UzoProvider'

const useUzo = () => {
  const { uzo } = useContext(Context)
  return uzo
}

export default useUzo
