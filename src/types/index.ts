export interface ITicket {
  price: number
  carrier: string
  segments: [
    {
      origin: string
      destination: string
      date: string
      stops: string[]
      duration: number
    },
    {
      origin: string
      destination: string
      date: string
      stops: string[]
      duration: number
    }
  ]
}

export interface IResponseTickets {
  tickets: ITicket[]
  stop: boolean
}

export interface AviasalesState {
  searchId: null | string
  loading: boolean
  error: null | string
  tickets: any[]
  shownTickets: number
  checkboxes: any[]
  sort: string
}

export enum AviasalesActionTypes {
  GET_SEARCH_ID = 'GET_SEARCH_ID',
  GET_TICKETS = 'GET_TICKETS',
  LOADING = 'LOADING',
  ERROR = 'ERROR',
  CHECK_BOX = 'CHECK_BOX',
  CHECK_BOX_ALL = 'CHECK_BOX_ALL',
  SHOW_MORE_TICKETS = 'SHOW_MORE_TICKETS',
  CHANGE_SORT = 'CHANGE_SORT',
}

interface LoadingAction {
  type: AviasalesActionTypes.LOADING
  payload: boolean
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

interface ShowMoreTickets {
  type: AviasalesActionTypes.SHOW_MORE_TICKETS
}

interface ChangeSort {
  type: AviasalesActionTypes.CHANGE_SORT
  payload: string
}

export type AviasalesAction =
  | LoadingAction
  | GetSearchIdAction
  | GetTicketsAction
  | ErrorAction
  | CheckBox
  | CheckBoxAll
  | ShowMoreTickets
  | ChangeSort
