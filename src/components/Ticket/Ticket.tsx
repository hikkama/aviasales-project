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
      <div key={key} className={styles.routesItem}>
        <div className={styles.column}>
          <div className={styles.caption}>
            {route.origin} - {route.destination}
          </div>
          <div className={styles.value}>
            {getTime(route.date)} - {getDestinationTime(route.date, route.duration)}
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.caption}>в пути</div>
          <div className={styles.value}>{formatDuration(route.duration)}</div>
        </div>
        <div className={styles.column}>
          <div className={styles.routes__caption}>{getFormulation(route.stops.length)}</div>
          <div className={styles.value}>{[route.stops.join(', ')]}</div>
        </div>
      </div>
    )
  })

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.price}>{`${price} ₽`}</div>
        <div>
          <img src={`https://pics.avs.io/110/36/${carrier}.png`} alt="airlines" />
        </div>
      </div>
      <div className={styles.routes}>{routes}</div>
    </div>
  )
}

export default Ticket
