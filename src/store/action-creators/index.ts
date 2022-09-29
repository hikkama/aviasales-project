import { Dispatch } from 'redux'

import { AviasalesAction, AviasalesActionTypes } from '../../types/intex'
import { IResponseTickets } from '../../interfaces/ITicket'

const apiBase = 'https://front-test.dev.aviasales.ru/'

export const getSearchId = () => {
  return async (dispatch: Dispatch<AviasalesAction>) => {
    try {
      dispatch({ type: AviasalesActionTypes.FETCHING })
      const response = await fetch(`${apiBase}search`)
      if (!response.ok) {
        throw new Error()
      }

      const { searchId } = await response.json()
      dispatch({ type: AviasalesActionTypes.GET_SEARCH_ID, payload: searchId })
    } catch (e) {
      dispatch({ type: AviasalesActionTypes.ERROR, payload: 'Возникла ошибка при загрузке' })
    }
  }
}

export const getTickets = (searchId: string, shownTickets: number) => {
  return async (dispatch: Dispatch<AviasalesAction>) => {
    try {
      dispatch({ type: AviasalesActionTypes.FETCHING })
      const response = await fetch(`${apiBase}tickets?searchId=${searchId}`)
      if (!response.ok) {
        throw new Error()
      }

      const body: IResponseTickets = await response.json()
      const showTickets = body.tickets.slice(0, shownTickets)
      dispatch({ type: AviasalesActionTypes.GET_TICKETS, payload: showTickets })
    } catch (e) {
      dispatch({ type: AviasalesActionTypes.ERROR, payload: 'Возникла ошибка при загрузке' })
    }
  }
}
