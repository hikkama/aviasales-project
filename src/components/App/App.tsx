import { FC, useEffect } from 'react'
import { BarLoader } from 'react-spinners'

import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { filterTickets, sortTickets } from '../../utils/filters'
import Filter from '../Filter/Filter'
import Tabs from '../Tabs'
import TicketList from '../TicketList'
import logo from '../../assets/img/logo.svg'
import { SortTypes, TicketData } from '../../types'

import styles from './App.module.scss'

const App: FC = () => {
  const { getTickets, getSearchId } = useActions()
  const { tickets, searchId, checkboxes, sort, loading, error } = useTypedSelector((state) => state)

  useEffect(() => {
    getSearchId()
  }, [])

  useEffect(() => {
    if (!searchId) return

    getTickets(searchId)
  }, [searchId])

  const showedTickets: TicketData[] = sortTickets(filterTickets(tickets, checkboxes), sort)

  const buttons: { type: string; label: string }[] = [
    { type: SortTypes.Cheap, label: 'Самый дешевый' },
    { type: SortTypes.Fast, label: 'Самый быстрый' },
    { type: SortTypes.Optimal, label: 'Оптимальный' },
  ]

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo" />
      </div>

      <div className={styles.wrapper}>
        <aside className={styles.filter}>
          <Filter />
        </aside>

        <main className={styles.main}>
          <div className={styles.tabWrapper}>
            <Tabs buttons={buttons} />
          </div>

          <div className={styles.info}>
            {error && <div>{error}</div>}
            {!showedTickets.length && !loading && !error && (
              <div className={styles.warning}>Рейсов, подходящих под заданные фильтры, не найдено</div>
            )}
          </div>

          {loading && <BarLoader color="#168cec" width="100%" cssOverride={{ marginBottom: 20 }} />}

          <TicketList tickets={showedTickets} />
        </main>
      </div>
    </div>
  )
}

export default App
