import { FC } from 'react'
import './Filter.scss'

interface FilterProps {}

const Filter: FC<FilterProps> = () => {
  return (
    <>
      <h3 className="filter-title">Количество пересадок</h3>
      <div className="filter-inputs">
        <label>
          <input type="checkbox" className="input" />
          <span className="checkbox"></span>
          Все
        </label>

        <label>
          <input type="checkbox" className="input" checked />
          <span className="checkbox"></span>
          Без пересадок
        </label>

        <label>
          <input type="checkbox" className="input" checked />
          <span className="checkbox"></span>1 пересадка
        </label>

        <label>
          <input type="checkbox" className="input" checked />
          <span className="checkbox"></span>2 пересадки
        </label>

        <label>
          <input type="checkbox" className="input" />
          <span className="checkbox"></span>3 пересадки
        </label>
      </div>
    </>
  )
}

export default Filter
