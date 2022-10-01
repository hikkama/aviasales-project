import { ChangeEvent, FC } from 'react'
import { connect } from 'react-redux'

import { AviasalesState } from '../../types'
import { useActions } from '../../hooks/useActions'

import styles from './Filter.module.scss'

interface FilterProps {
  checkboxes: any[]
}

const Filter: FC<FilterProps> = ({ checkboxes }) => {
  const checkboxesRender = [
    { name: 'all', label: 'Все' },
    { name: 'no', label: 'Без пересадок' },
    { name: 'one', label: '1 пересадка' },
    { name: 'two', label: '2 пересадки' },
    { name: 'three', label: '3 пересадки' },
  ]

  const { checkBox, checkBoxAll } = useActions()

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
      <h3 className={styles.title}>Количество пересадок</h3>
      {checkboxesRender.map(({ name, label }) => {
        if (name === 'all') {
          return (
            <label className={styles.label} key={name}>
              <input
                type="checkbox"
                className={styles.input}
                value={name}
                onChange={checkBoxAll}
                checked={isAllChecked}
              />
              <span className={styles.checkbox}></span>
              {label}
            </label>
          )
        }

        return (
          <label className={styles.label} key={name}>
            <input
              type="checkbox"
              className={styles.input}
              value={name}
              onChange={onChange}
              checked={checkboxes.includes(name)}
            />
            <span className={styles.checkbox}></span>
            {label}
          </label>
        )
      })}
    </>
  )
}

const mapStateToProps = (state: AviasalesState) => ({ checkboxes: state.checkboxes })

export default connect(mapStateToProps)(Filter)
