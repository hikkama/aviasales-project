import { FC } from 'react'

import { ITicket } from '../../interfaces/ITicket'

interface TicketProps {
  ticket: ITicket
}

const Ticket: FC<TicketProps> = ({ ticket }) => {
  const { segments, price, carrier } = ticket
  const [there, back] = segments
  return (
    <div className="fligth-card">
      <div className="card-header">
        <div className="card-price">{price} ₽</div>
        <div className="card-aircompany">
          <img src={`http://pics.avs.io/200/200/${carrier}.png`} alt="aircompany-logo" />
        </div>
      </div>
      <div className="card-info">
        <div className="card-path">
          <div className="card-title">
            {there.origin} – {there.destination}
          </div>
          <div className="card-desc">
            {there.date} – {there.duration}
          </div>
          <div className="card-title">
            {back.origin} – {back.destination}
          </div>
          <div className="card-desc">
            {back.date} – {back.duration}
          </div>
        </div>
        <div className="card-time">
          <div className="card-title">В пути</div>
          <div className="card-desc">21ч 15м</div>
          <div className="card-title">В пути</div>
          <div className="card-desc">13ч 30м</div>
        </div>
        <div className="card-change">
          <div className="card-title">{there.stops.length} пересадки</div>
          <div className="card-desc">{there.stops.join(', ')}</div>
          <div className="card-title">{back.stops.length} пересадка</div>
          <div className="card-desc">{back.stops.join(', ')}</div>
        </div>
      </div>
    </div>
  )
}

export default Ticket
