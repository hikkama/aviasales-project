import { FC } from 'react'

import { TicketData } from '../../types'
import { formatDuration, getDestinationTime, getFormulation, getTime } from '../../utils/time'
import formatPrice from '../../utils/price'

import Column from './Column'
import Card from './Card'
import styles from './Ticket.module.scss'

interface TicketProps {
  ticket: TicketData
}

const Ticket: FC<TicketProps> = ({ ticket }) => {
  const { segments, price, carrier } = ticket

  const routes = segments.map((route, i) => {
    const date = new Date(route.date)
    const key = `${date.toString()}-${i}`

    return (
      <div key={key} className={styles.routesItem}>
        <Column
          caption={{ left: route.origin, right: route.destination }}
          value={{ left: getTime(route.date), right: getDestinationTime(route.date, route.duration) }}
        />

        <Column caption={{ left: 'в пути' }} value={{ left: formatDuration(route.duration) }} />

        <Column caption={{ left: getFormulation(route.stops.length) }} value={{ left: route.stops.join(', ') }} />
      </div>
    )
  })

  return <Card price={formatPrice(price)} carrier={carrier} routes={routes} />
}

export default Ticket
