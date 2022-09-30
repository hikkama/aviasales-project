import { FC } from 'react'

import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'

import styles from './Tabs.module.scss'

interface TabsProps {
  buttons: { name: string; label: string }[]
}

const Tabs: FC<TabsProps> = ({ buttons }) => {
  const { changeSort } = useActions()
  const { sort } = useTypedSelector((state) => state)

  return (
    <div className={styles.tabs}>
      {buttons.map(({ label, name }) => {
        const isActive = name === sort
        return (
          <button
            key={name}
            type="button"
            className={`${styles.tabs__tab} ${styles.btn} ${isActive && styles['tab--active']}`}
            onClick={() => changeSort(name)}
          >
            {label}
          </button>
        )
      })}
    </div>
  )
}

export default Tabs
