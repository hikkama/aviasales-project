import { AviasalesAction, AviasalesActionTypes, AviasalesState } from '../../types/intex'

const initialState: AviasalesState = {
  searchId: null,
  loading: false,
  error: null,
  tickets: [],
  shownTickets: 5,
  filter: 'all',
}

export const aviasalesReducer = (state = initialState, action: AviasalesAction): AviasalesState => {
  switch (action.type) {
    case AviasalesActionTypes.FETCHING:
      return { ...state, loading: true }
    case AviasalesActionTypes.GET_SEARCH_ID:
      return { ...state, searchId: action.payload, loading: false }
    case AviasalesActionTypes.GET_TICKETS:
      return { ...state, tickets: action.payload, loading: false }
    case AviasalesActionTypes.ERROR:
      return { ...state, error: action.payload, loading: false }
    default:
      return state
  }
}

export type State = ReturnType<typeof aviasalesReducer>
