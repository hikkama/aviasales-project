export interface AviasalesState {
  searchId: null | string
  loading: boolean
  error: null | string
  tickets: any[]
  shownTickets: number
  checkboxes: any[]
}

export enum AviasalesActionTypes {
  GET_SEARCH_ID = 'GET_SEARCH_ID',
  GET_TICKETS = 'GET_TICKETS',
  FETCHING = 'FETCHING',
  ERROR = 'ERROR',
  CHECK_BOX = 'CHECK_BOX',
  CHECK_BOX_ALL = 'CHECK_BOX_ALL',
}

interface FetchAction {
  type: AviasalesActionTypes.FETCHING
}

interface GetSearchIdAction {
  type: AviasalesActionTypes.GET_SEARCH_ID
  payload: string
}

interface GetTicketsAction {
  type: AviasalesActionTypes.GET_TICKETS
  payload: any[]
}

interface ErrorAction {
  type: AviasalesActionTypes.ERROR
  payload: string
}

interface CheckBox {
  type: AviasalesActionTypes.CHECK_BOX
  payload: string
}

interface CheckBoxAll {
  type: AviasalesActionTypes.CHECK_BOX_ALL
}

export type AviasalesAction = FetchAction | GetSearchIdAction | GetTicketsAction | ErrorAction | CheckBox | CheckBoxAll
