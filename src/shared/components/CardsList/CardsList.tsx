import React, { FC } from 'react'

import Card from './Card'

import styles from './CardsList.css'

import { cards } from './MockData'

const CardsList: FC = () => (
  <ul className={styles.cardsList}>
    {cards.map(card => (
      <Card data={card} key={card.id} />
    ))}
  </ul>
)

export default CardsList
