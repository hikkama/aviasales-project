import { ChangeEvent, FC } from 'react'
import { connect } from 'react-redux'

import { AviasalesState, CheckboxTypes } from '../../types'
import { useActions } from '../../hooks/useActions'

import styles from './Filter.module.scss'

interface FilterProps {
  checkboxes: CheckboxTypes[]
}

const Filter: FC<FilterProps> = ({ checkboxes }) => {
  const { checkBox, checkBoxAll } = useActions()

  const checkboxesRender = [
    { name: CheckboxTypes.All, label: 'Все' },
    { name: CheckboxTypes.No, label: 'Без пересадок' },
    { name: CheckboxTypes.One, label: '1 пересадка' },
    { name: CheckboxTypes.Two, label: '2 пересадки' },
    { name: CheckboxTypes.Three, label: '3 пересадки' },
  ]

  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value
    checkBox(value)
  }

  return (
    <>
      <h3 className={styles.title}>Количество пересадок</h3>
      {checkboxesRender.map(({ name, label }) => {
        return (
          <label className={styles.label} key={name}>
            <input
              type="checkbox"
              className={styles.input}
              value={name}
              onChange={name === 'all' ? checkBoxAll : onChange}
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
