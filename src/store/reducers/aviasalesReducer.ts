import { AviasalesAction, AviasalesActionTypes, AviasalesState, CheckboxTypes, SortTypes } from '../../types'

const initialState: AviasalesState = {
  searchId: null,
  loading: false,
  error: null,
  tickets: [],
  shownTickets: 5,
  checkboxes: [CheckboxTypes.No, CheckboxTypes.One, CheckboxTypes.Two, CheckboxTypes.Three],
  sort: SortTypes.Cheap,
}

export const aviasalesReducer = (state = initialState, action: AviasalesAction): AviasalesState => {
  switch (action.type) {
    case AviasalesActionTypes.LOADING:
      return { ...state, loading: action.payload }

    case AviasalesActionTypes.GET_SEARCH_ID:
      return { ...state, searchId: action.payload }

    case AviasalesActionTypes.GET_TICKETS:
      return { ...state, tickets: [...state.tickets, ...action.payload] }

    case AviasalesActionTypes.ERROR:
      return { ...state, error: action.payload, loading: false }

    case AviasalesActionTypes.CHECK_BOX:
      return {
        ...state,
        checkboxes: state.checkboxes.includes(action.payload)
          ? state.checkboxes.filter((el) => el !== action.payload)
          : [...state.checkboxes, action.payload],
      }

    case AviasalesActionTypes.CHECK_BOX_ALL:
      return {
        ...state,
        checkboxes:
          state.checkboxes.includes(CheckboxTypes.No) &&
          state.checkboxes.includes(CheckboxTypes.One) &&
          state.checkboxes.includes(CheckboxTypes.Two) &&
          state.checkboxes.includes(CheckboxTypes.Three)
            ? []
            : [CheckboxTypes.No, CheckboxTypes.One, CheckboxTypes.Two, CheckboxTypes.Three],
      }

    case AviasalesActionTypes.SHOW_MORE_TICKETS:
      return {
        ...state,
        shownTickets: state.shownTickets + 5,
      }

    case AviasalesActionTypes.CHANGE_SORT:
      return {
        ...state,
        sort: action.payload,
      }

    default:
      return state
  }
}

export type State = ReturnType<typeof aviasalesReducer>
