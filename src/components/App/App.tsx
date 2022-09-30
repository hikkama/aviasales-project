import { FC, useEffect } from 'react'
import { BarLoader } from 'react-spinners'

import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { filterTickets, sortTickets } from '../../utils/filters'
import Filter from '../Filter/Filter'
import Tabs from '../Tabs'
import TicketList from '../TicketList'
import logo from '../../assets/img/logo.svg'
import { ITicket } from '../../types'

import styles from './App.module.scss'

// Todo: PropTypes, отображение цены

const App: FC = () => {
  const { getTickets, getSearchId, showMoreTickets } = useActions()
  const { tickets, searchId, checkboxes, sort, loading, shownTickets, error } = useTypedSelector((state) => state)

  useEffect(() => {
    getSearchId()
  }, [])

  useEffect(() => {
    if (!searchId) return

    getTickets(searchId)
  }, [searchId])

  const showedTickets: ITicket[] = sortTickets(filterTickets(tickets, checkboxes), sort)

  const buttons: { name: string; label: string }[] = [
    { name: 'cheap', label: 'Самый дешевый' },
    { name: 'fast', label: 'Самый быстрый' },
    { name: 'optimal', label: 'Оптимальный' },
  ]

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo" />
      </div>

      <main className={styles.main}>
        <aside className={`${styles.main__filter} filter`}>
          <Filter />
        </aside>

        <section className={`${styles.main__content} content`}>
          <Tabs buttons={buttons} />

          <div className={styles.content__info}>
            {loading && <BarLoader color="#168cec" width="100%" />}
            {error && <h1>{error}</h1>}
            {!showedTickets.length && !loading && !error && (
              <h2>Рейсов, подходящих под заданные фильтры, не найдено</h2>
            )}
          </div>

          <TicketList tickets={showedTickets} />

          {!!showedTickets.length && !loading && shownTickets < showedTickets.length && (
            <button type="button" className={`${styles['content__show-more']} ${styles.btn}`} onClick={showMoreTickets}>
              Показать еще 5 билетов!
            </button>
          )}
        </section>
      </main>
    </div>
  )
}

export default App
