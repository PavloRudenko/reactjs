import React, { FC } from 'react'

import Card from './Card'
import { ICard } from './Card/Card' // TODO need delete

import styles from './CardsList.css'

interface CardsListProps {}

// TODO need delete
const cards: ICard[] = [
  {
    id: 1,
    metaData: {
      username: 'Дмитрий Гришин',
      publishedLabel: '4 часа назад',
      avatarSrc: 'https://html5css.ru/howto/img_avatar.png',
      userUrl: '#user-url',
    },
    postData: {
      title:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim nam obcaecati ea.',
      postUrl: '#post-url',
      imageUrl:
        'https://cdn.dribbble.com/users/5146458/screenshots/18068505/media/5482e9d93432d61f991fcd80a3b4ca22.jpg',
    },
    controlsData: { karmaCount: 236, commentsCount: 14 },
  },
  {
    id: 2,
    metaData: {
      username: 'Иван Иванов',
      publishedLabel: '2 часа назад',
      avatarSrc: 'https://html5css.ru/howto/img_avatar.png',
      userUrl: '#user-url',
    },
    postData: {
      title:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa eligendi odio vel quod et expedita rerum soluta, dicta atque quos a quisquam quidem. Expedita recusandae nihil beatae voluptatibus quisquam! Ipsa.',
      postUrl: '#post-url',
      imageUrl:
        'https://cdn.dribbble.com/users/5146458/screenshots/17356716/media/fc839d5706e648585f1a09937b0f07ba.jpg?compress=1&resize=1200x900&vertical=top',
    },
    controlsData: { karmaCount: 123, commentsCount: 5 },
  },
  {
    id: 3,
    metaData: {
      username: 'Пётр Петров',
      publishedLabel: '3 часа назад',
      avatarSrc: 'https://html5css.ru/howto/img_avatar.png',
      userUrl: '#user-url',
    },
    postData: {
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
      postUrl: '#post-url',
      imageUrl:
        'https://cdn.dribbble.com/users/5146458/screenshots/17205595/media/50ab3d4f33931c7ec923c8fe71c9fdaf.jpg?compress=1&resize=1200x900&vertical=top',
    },
    controlsData: { karmaCount: 763, commentsCount: 101 },
  },
]

const CardsList: FC<CardsListProps> = () => (
  <ul className={styles.cardsList}>
    {cards.map(card => (
      <Card data={card} key={card.id} />
    ))}
  </ul>
)

export default CardsList
