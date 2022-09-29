import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import { aviasalesReducer } from './reducers/aviasalesReducer'

export const store = createStore(aviasalesReducer, composeWithDevTools(applyMiddleware(thunk)))
