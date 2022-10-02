import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import { CheckboxTypes } from '../types'

import { aviasalesReducer } from './reducers/aviasalesReducer'

export const store = createStore(aviasalesReducer, composeWithDevTools(applyMiddleware(thunk)))

export const isAllChecked =
  store.getState().checkboxes.includes(CheckboxTypes.No) &&
  store.getState().checkboxes.includes(CheckboxTypes.One) &&
  store.getState().checkboxes.includes(CheckboxTypes.Two) &&
  store.getState().checkboxes.includes(CheckboxTypes.Three)
