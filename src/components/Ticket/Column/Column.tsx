import { FC } from 'react'

import styles from './Column.module.scss'

interface ColumnProps {
  caption: { left?: string; right?: string }
  value: { left?: string; right?: string }
}

const Column: FC<ColumnProps> = ({ caption, value }): JSX.Element => {
  return (
    <div className={styles.column}>
      <div className={styles.caption}>
        {caption.left} {caption.right ? <>- {caption.right}</> : null}
      </div>
      <div className={styles.value}>
        {value.left} {value.right ? <>- {value.right}</> : null}
      </div>
    </div>
  )
}

export default Column
