import React, { FC } from 'react'

import Card from './Card'
import { withKey } from '../../../utils'

import styles from './CardsList.css'

import { cards } from './MockData'

export const withIdKey = withKey('id')

const CardsList: FC = () => (
  <ul className={styles.cardsList}>{cards.map(withIdKey(Card))}</ul>
)

export default CardsList
