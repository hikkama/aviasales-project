import { FC } from 'react'

import { ITicket } from '../../types'
import { formatDuration, getDestinationTime, getFormulation, getTime } from '../../utils/time'

import styles from './Ticket.module.scss'

interface TicketProps {
  ticket: ITicket
}

const Ticket: FC<TicketProps> = ({ ticket }) => {
  const { segments, price, carrier } = ticket

  const routes = segments.map((route, i) => {
    const date = new Date(route.date)
    const key = `${date.toString()}-${i}`

    return (
      <div key={key} className={styles.routes__item}>
        <div className={styles.routes__column}>
          <div className={styles.routes__caption}>
            {route.origin} - {route.destination}
          </div>
          <div className={styles.routes__value}>
            {getTime(route.date)} - {getDestinationTime(route.date, route.duration)}
          </div>
        </div>
        <div className={styles.routes__column}>
          <div className={styles.routes__caption}>в пути</div>
          <div className={styles.routes__value}>{formatDuration(route.duration)}</div>
        </div>
        <div className={styles.routes__column}>
          <div className={styles.routes__caption}>{getFormulation(route.stops.length)}</div>
          <div className={styles.routes__value}>{[route.stops.join(', ')]}</div>
        </div>
      </div>
    )
  })

  return (
    <div className={styles['ticket-card']}>
      <div className={styles['ticket-card__header']}>
        <div className={styles['ticket-card__price']}>{`${price} ₽`}</div>
        <div className={styles['ticket-card__aircompany']}>
          <img src={`https://pics.avs.io/200/200/${carrier}.png`} alt="airlines" />
        </div>
      </div>
      <div className={styles.routes}>{routes}</div>
    </div>
  )
}

export default Ticket
