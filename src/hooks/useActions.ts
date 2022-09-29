import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as AviasalesActionCreators from '../store/action-creators'

export const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(AviasalesActionCreators, dispatch)
}
