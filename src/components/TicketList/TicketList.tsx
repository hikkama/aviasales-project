import React, { useEffect } from 'react'

import { useTypedSelector } from '../../hooks/useTypedSelector'
import Ticket from '../Ticket'
import { ITicket } from '../../interfaces/ITicket'
import { useActions } from '../../hooks/useActions'

const TicketList: React.FC = () => {
  const { tickets, loading, error, searchId, shownTickets } = useTypedSelector((state) => state)
  const { getTickets, getSearchId } = useActions()

  useEffect(() => {
    getSearchId()
  }, [])

  useEffect(() => {
    if (!searchId) return

    getTickets(searchId, shownTickets)
  }, [searchId])

  return (
    <div className="flightes">
      {loading && <h1>Идет загрузка</h1>}
      {error && <h1>{error}</h1>}

      {tickets.map((ticket: ITicket) => {
        return <Ticket ticket={ticket} key={ticket.price} />
      })}
    </div>
  )
}

export default TicketList
