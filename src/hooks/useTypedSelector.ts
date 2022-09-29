import { TypedUseSelectorHook, useSelector } from 'react-redux'

import { State } from '../store/reducers/aviasalesReducer'

export const useTypedSelector: TypedUseSelectorHook<State> = useSelector
