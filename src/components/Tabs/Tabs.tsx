import { FC } from 'react'
import classNames from 'classnames'

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
          <button
            key={type}
            type="button"
            className={classNames(styles.tabItem, { [styles.tabActive]: isActive })}
            onClick={() => changeSort(type)}
          >
            {label}
          </button>
        )
      })}
    </div>
  )
}

export default Tabs
