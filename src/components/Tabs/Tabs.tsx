import { FC } from 'react'

import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'

import styles from './Tabs.module.scss'

interface TabsProps {
  buttons: { type: string; label: string }[]
}

const Tabs: FC<TabsProps> = ({ buttons }) => {
  const { changeSort } = useActions()
  const { sort } = useTypedSelector((state) => state)

  return (
    <div className={styles.tabs}>
      {buttons.map(({ label, type }) => {
        const isActive = type === sort

        return (
          <label key={type} className={styles.label}>
            <input
              type="radio"
              name="radio"
              checked={isActive}
              className={styles.radio}
              onChange={() => {
                changeSort(type)
              }}
            />
            <span className={styles.radioBtn}>{label}</span>
          </label>
        )
      })}
    </div>
  )
}

export default Tabs
