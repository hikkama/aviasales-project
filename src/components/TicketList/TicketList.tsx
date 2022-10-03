import { FC, useEffect, useState } from 'react'

import { useTypedSelector } from '../../hooks/useTypedSelector'
import Ticket from '../Ticket'
import { TicketData } from '../../types'
import { useActions } from '../../hooks/useActions'
import { calculateMaxHeight } from '../../utils/calculateMaxHeight'

import styles from './TicketList.module.scss'

interface TicketListProps {
  tickets: TicketData[]
}

const TicketList: FC<TicketListProps> = ({ tickets }) => {
  const { shownTickets, loading } = useTypedSelector((state) => state)
  const { showMoreTickets } = useActions()
  const [height, setHeight] = useState(calculateMaxHeight())

  useEffect(() => {
    const resizeListener = () => {
      setHeight(calculateMaxHeight())
    }

    window.addEventListener('resize', resizeListener)

    return () => window.removeEventListener('resize', resizeListener)
  }, [])

  return (
    <div className={styles.flights} style={{ height }}>
      {tickets?.map((ticket: TicketData, i) => {
        if (i >= shownTickets) return
        return <Ticket ticket={ticket} key={`${ticket.price}-${i}`} />
      })}
      {!!tickets.length && !loading && shownTickets < tickets.length && (
        <button type="button" className={styles.showMoreBtn} onClick={showMoreTickets}>
          Показать еще 5 билетов!
        </button>
      )}
    </div>
  )
}

export default TicketList
