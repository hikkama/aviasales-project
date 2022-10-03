/*eslint-disable @typescript-eslint/no-unused-vars*/

import { FC } from 'react'
import classNames from 'classnames'

import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'

import styles from './Tabs.module.scss'

interface TabsProps {
  buttons: { type: string; label: string }[]
}
/*
* {buttons.map(({ label, type }) => {
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
*/

const Tabs: FC<TabsProps> = ({ buttons }) => {
  const { changeSort } = useActions()
  const { sort } = useTypedSelector((state) => state)

  return (
    <div className={styles.tabs}>
      {buttons.map(({ label, type }, i) => {
        const isActive = type === sort

        return (
          <>
            <input
              type="radio"
              id={type}
              name="radio"
              checked={isActive}
              className={styles.radio}
              onChange={() => changeSort(type)}
            />

            <label key={type} className={styles.tabItem} htmlFor={type}>
              {label}
            </label>
          </>
        )
      })}
    </div>
  )
}

export default Tabs
