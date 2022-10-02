import { ChangeEvent, FC } from 'react'
import { connect } from 'react-redux'

import { AviasalesState, CheckboxTypes } from '../../types'
import { useActions } from '../../hooks/useActions'

import styles from './Filter.module.scss'

interface FilterProps {
  checkboxes: any[]
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
        return (
          <label className={styles.label} key={name}>
            <input
              type="checkbox"
              className={styles.input}
              value={name}
              onChange={name === 'all' ? checkBoxAll : onChange}
              checked={name === 'all' ? isAllChecked : checkboxes.includes(name)}
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
