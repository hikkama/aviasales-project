import { FC, useEffect, useRef, useState } from 'react'

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
  const { shownTickets, loading, sort, checkboxes } = useTypedSelector((state) => state)
  const { showMoreTickets } = useActions()
  const [height, setHeight] = useState(calculateMaxHeight())
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const resizeListener = () => {
      setHeight(calculateMaxHeight())
    }

    window.addEventListener('resize', resizeListener)

    return () => window.removeEventListener('resize', resizeListener)
  }, [])

  useEffect(() => {
    if (!ref.current) return

    ref.current.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }, [sort, checkboxes])

  return (
    <div ref={ref} className={styles.flights} style={{ maxHeight: height }}>
      <ul className={styles.list}>
        {tickets?.map((ticket: TicketData, i) => {
          if (i >= shownTickets) return
          return <Ticket ticket={ticket} key={`${ticket.price}-${i}`} />
        })}
      </ul>
      {!!tickets.length && !loading && shownTickets < tickets.length && (
        <button type="button" className={styles.showMoreBtn} onClick={showMoreTickets}>
          Показать еще 5 билетов!
        </button>
      )}
    </div>
  )
}

export default TicketList
