import logo from './assets/img/Logo.svg'
import Filter from './components/Filter'
import { ITicket } from './interfaces/ITicket'
import TicketList from './components/TicketList'

/*
 * Todo
 *  1. Написать API
 *  2. Реализовать стор
 *  3. Реализовать экшены
 *  4. Реализовать редюсер
 */

function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const data2: ITicket[] = [
    {
      price: 82735,
      carrier: 'SU',
      segments: [
        {
          origin: 'MOW',
          destination: 'HKT',
          date: '2022-09-26T03:58:00.000Z',
          stops: ['SIN'],
          duration: 604,
        },
        {
          origin: 'HKT',
          destination: 'MOW',
          date: '2022-10-16T15:15:00.000Z',
          stops: ['DXB', 'KUL'],
          duration: 1139,
        },
      ],
    },
    {
      price: 49835,
      carrier: 'EK',
      segments: [
        {
          origin: 'MOW',
          destination: 'HKT',
          date: '2022-09-26T07:55:00.000Z',
          stops: ['DXB', 'HKG', 'AUH'],
          duration: 1352,
        },
        {
          origin: 'HKT',
          destination: 'MOW',
          date: '2022-10-16T00:59:00.000Z',
          stops: ['KUL'],
          duration: 1536,
        },
      ],
    },
  ]

  return (
    <div className="container">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <section className="wrapper">
        <aside className="filter">
          <Filter />
        </aside>
        <div className="main-content">
          <div className="filter-btns">
            <button type="button">Самый дешевый</button>
            <button type="button">Самый быстрый</button>
            <button type="button">Оптимальный</button>
          </div>
          <TicketList />
        </div>
      </section>
    </div>
  )
}

export default App
