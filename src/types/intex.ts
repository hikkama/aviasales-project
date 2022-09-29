export interface AviasalesState {
  searchId: null | string
  loading: boolean
  error: null | string
  tickets: any[]
  shownTickets: number
  filter: string
}

export enum AviasalesActionTypes {
  GET_SEARCH_ID = 'GET_SEARCH_ID',
  GET_TICKETS = 'GET_TICKETS',
  FETCHING = 'FETCHING',
  ERROR = 'ERROR',
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

export type AviasalesAction = FetchAction | GetSearchIdAction | GetTicketsAction | ErrorAction
