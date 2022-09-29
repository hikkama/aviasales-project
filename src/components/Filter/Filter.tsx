/*eslint-disable @typescript-eslint/no-unused-vars*/

import { ChangeEvent, FC } from 'react'
import { connect } from 'react-redux'

import { AviasalesState } from '../../types/intex'
import * as AviasalesActionCreators from '../../store/action-creators'

import './Filter.scss'

interface FilterProps {
  checkboxes: any[]
  checkBox: any
  checkBoxAll: any
}

const Filter: FC<FilterProps> = ({ checkboxes, checkBox, checkBoxAll }) => {
  const checkboxesRender = [
    { name: 'all', label: 'Все' },
    { name: 'no', label: 'Без пересадок' },
    { name: 'one', label: '1 пересадка' },
    { name: 'two', label: '2 пересадки' },
    { name: 'three', label: '3 пересадки' },
  ]

  const isAllChecked =
    checkboxes.includes('no') &&
    checkboxes.includes('one') &&
    checkboxes.includes('two') &&
    checkboxes.includes('three')

  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value
    checkBox(value)
  }

  return (
    <>
      <h3 className="filter-title">Количество пересадок</h3>
      {checkboxesRender.map(({ name, label }) => {
        if (name === 'all') {
          return (
            <label key={name}>
              <input type="checkbox" className="input" value={name} onChange={checkBoxAll} checked={isAllChecked} />
              <span className="checkbox"></span>
              {label}
            </label>
          )
        }

        return (
          <label key={name}>
            <input
              type="checkbox"
              className="input"
              value={name}
              onChange={onChange}
              checked={checkboxes.includes(name)}
            />
            <span className="checkbox"></span>
            {label}
          </label>
        )
      })}
    </>
  )
}

const mapStateToProps = (state: AviasalesState) => ({ checkboxes: state.checkboxes })

export default connect(mapStateToProps, AviasalesActionCreators)(Filter)
