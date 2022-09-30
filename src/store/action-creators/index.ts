import { Dispatch } from 'redux'

import { AviasalesAction, AviasalesActionTypes, IResponseTickets } from '../../types'

const apiBase = 'https://front-test.dev.aviasales.ru/'

export const getSearchId = () => {
  return async (dispatch: Dispatch<AviasalesAction>) => {
    try {
      dispatch({ type: AviasalesActionTypes.LOADING, payload: true })
      const response = await fetch(`${apiBase}search`)
      if (!response.ok) {
        throw new Error()
      }

      const { searchId } = await response.json()
      dispatch({ type: AviasalesActionTypes.GET_SEARCH_ID, payload: searchId })
      dispatch({ type: AviasalesActionTypes.LOADING, payload: false })
    } catch (e) {
      dispatch({ type: AviasalesActionTypes.ERROR, payload: 'Возникла ошибка при загрузке' })
    }
  }
}

export const getTickets = (searchId: string) => (dispatch: Dispatch<AviasalesAction>) => {
  ;(async function fetchData() {
    try {
      dispatch({ type: AviasalesActionTypes.LOADING, payload: true })
      const response = await fetch(`${apiBase}tickets?searchId=${searchId}`)
      if (!response.ok) {
        if (response.status === 500) {
          throw new Error('Failed to fetch a ticket')
        }
      }

      const body: IResponseTickets = await response.json()
      dispatch({ type: AviasalesActionTypes.GET_TICKETS, payload: body.tickets })

      if (!body.stop) await fetchData()
      else dispatch({ type: AviasalesActionTypes.LOADING, payload: false })
    } catch (e: any) {
      if (e.message === 'Failed to fetch a ticket') await fetchData()
      else dispatch({ type: AviasalesActionTypes.ERROR, payload: 'Возникла ошибка при загрузке' })
    }
  })()
}

export const checkBox = (name: string) => ({ type: AviasalesActionTypes.CHECK_BOX, payload: name })

export const checkBoxAll = () => ({ type: AviasalesActionTypes.CHECK_BOX_ALL })

export const showMoreTickets = () => ({ type: AviasalesActionTypes.SHOW_MORE_TICKETS })

export const changeSort = (sort: string) => ({ type: AviasalesActionTypes.CHANGE_SORT, payload: sort })
