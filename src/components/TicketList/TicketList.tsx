import React from 'react'

import { useTypedSelector } from '../../hooks/useTypedSelector'
import Ticket from '../Ticket'
import { TicketData } from '../../types'

interface TicketListProps {
  tickets: TicketData[]
}

const TicketList: React.FC<TicketListProps> = ({ tickets }) => {
  const { shownTickets } = useTypedSelector((state) => state)

  return (
    <div className="flights">
      {tickets?.map((ticket: TicketData, i) => {
        if (i >= shownTickets) return
        return <Ticket ticket={ticket} key={`${ticket.price}-${i}`} />
      })}
    </div>
  )
}

export default TicketList
