import { FC } from 'react'

import styles from './Card.module.scss'

interface CardProps {
  price: string
  carrier: string
  routes: JSX.Element[]
}

const Card: FC<CardProps> = ({ price, carrier, routes }) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.price}>{`${price} ₽`}</div>
        <div>
          <img src={`https://pics.avs.io/110/36/${carrier}.png`} alt="airlines" />
        </div>
      </div>
      <div className={styles.routes}>{routes}</div>
    </div>
  )
}

export default Card
