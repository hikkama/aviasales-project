export interface TicketData {
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

export interface ResponseTicketsData {
  tickets: TicketData[]
  stop: boolean
}

export interface AviasalesState {
  searchId: null | string
  loading: boolean
  error: null | string
  tickets: any[]
  shownTickets: number
  checkboxes: CheckboxTypes[]
  sort: SortTypes
  ticketHtmlBlock: null | HTMLElement
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
  GET_TICKETS_HTML_BLOCK = 'GET_TICKETS_HTML_BLOCK',
}

export enum SortTypes {
  Cheap = 'cheap',
  Fast = 'fast',
  Optimal = 'optimal',
}

export enum CheckboxTypes {
  All = 'all',
  No = 'no',
  One = 'one',
  Two = 'two',
  Three = 'three',
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
  payload: CheckboxTypes
}

interface CheckBoxAll {
  type: AviasalesActionTypes.CHECK_BOX_ALL
}

interface ShowMoreTickets {
  type: AviasalesActionTypes.SHOW_MORE_TICKETS
}

interface ChangeSort {
  type: AviasalesActionTypes.CHANGE_SORT
  payload: SortTypes
}

interface GetTicketsHtmlBlock {
  type: AviasalesActionTypes.GET_TICKETS_HTML_BLOCK
  payload: HTMLElement
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
  | GetTicketsHtmlBlock
