import Ticket from '../Ticket'
import { ITicket } from '../../interfaces/ITicket'

interface TicketListProps {
  tickets: ITicket[]
}

const TicketList = ({ tickets }: TicketListProps) => {
  return (
    <div className="flightes">
      {tickets.map((ticket: ITicket) => {
        return <Ticket ticket={ticket} key={ticket.price} />
      })}
    </div>
  )
}

export default TicketList
