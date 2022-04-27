import React, { FC, useEffect, useState } from 'react'

import MetaData from './MetaData'
import MenuButton from './MenuButton'
import KarmaCounter from './KarmaCounter'
import ActionButton from './ActionButton'
import Dropdown from '../../Dropdown'

import styles from './Card.css'

interface IMetaData {
  username: string
  publishedLabel: string
  avatarSrc: string
  userUrl: string
}

interface IPost {
  title: string
  postUrl: string
  imageUrl: string
}

interface IControls {
  karmaCount: number
  commentsCount: number
}

export interface ICard {
  id: number
  metaData: IMetaData
  postData: IPost
  controlsData: IControls
}
// TODO need delete

interface Props {
  data: ICard
}

const Card: FC<Props> = ({ data: { metaData, postData, controlsData } }) => {
  const [width, setWidth] = useState<number | null>(null)

  const isMobile = width ? width < 1024 : false

  useEffect(() => {
    const handleChangeWidth = () => {
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleChangeWidth)
    handleChangeWidth()
    return () => {
      window.removeEventListener('resize', handleChangeWidth)
    }
  }, [])

  return (
    <li className={styles.card}>
      <div className={styles.textContent}>
        <MetaData
          username={metaData.username}
          publishedLabel={metaData.publishedLabel}
          avatarSrc={metaData.avatarSrc}
          userUrl={metaData.userUrl}
          className={styles.metaData}
        />
        <h2 className={styles.title}>
          <a href={postData.postUrl} className={styles.postLink}>
            {postData.title}
          </a>
        </h2>
      </div>

      <div className={styles.preview}>
        <img className={styles.previewImg} src={postData.imageUrl} />
      </div>

      <Dropdown
        listClassName={styles.dropdownList}
        className={styles.menuButton}
        button={<MenuButton />}
      >
        {!isMobile && (
          <li className={styles.dropdownItem}>
            <ActionButton count={controlsData.commentsCount} text="Комментарии">
              <svg
                className={styles.ActionButtonIcon}
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.75 0H1.41667C0.6375 0 0 0.6375 0 1.41667V9.91667C0 10.6958 0.6375 11.3333 1.41667 11.3333H11.3333L14.1667 14.1667V1.41667C14.1667 0.6375 13.5292 0 12.75 0ZM11.3333 8.5H2.83333V7.08333H11.3333V8.5ZM11.3333 6.375H2.83333V4.95833H11.3333V6.375ZM11.3333 4.25H2.83333V2.83333H11.3333V4.25Z"
                  fill="#C4C4C4"
                />
              </svg>
            </ActionButton>
          </li>
        )}
        {!isMobile && (
          <li className={styles.dropdownItem}>
            <ActionButton text="Поделиться" className={styles.chareButton}>
              <svg
                className={styles.ActionButtonIcon}
                width="15"
                height="15"
                viewBox="0 0 12 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 9.89558C9.49333 9.89558 9.04 10.1064 8.69333 10.4367L3.94 7.52008C3.97333 7.35843 4 7.19679 4 7.02811C4 6.85944 3.97333 6.69779 3.94 6.53614L8.64 3.64759C9 3.999 9.47333 4.21687 10 4.21687C11.1067 4.21687 12 3.2751 12 2.10843C12 0.941767 11.1067 0 10 0C8.89333 0 8 0.941767 8 2.10843C8 2.27711 8.02667 2.43875 8.06 2.6004L3.36 5.48896C3 5.13755 2.52667 4.91968 2 4.91968C0.893333 4.91968 0 5.86145 0 7.02811C0 8.19478 0.893333 9.13655 2 9.13655C2.52667 9.13655 3 8.91867 3.36 8.56727L8.10667 11.491C8.07333 11.6386 8.05333 11.7932 8.05333 11.9478C8.05333 13.0793 8.92667 14 10 14C11.0733 14 11.9467 13.0793 11.9467 11.9478C11.9467 10.8163 11.0733 9.89558 10 9.89558Z"
                  fill="#999999"
                />
              </svg>
            </ActionButton>
          </li>
        )}
        <li className={styles.dropdownItem}>
          <ActionButton className={styles.actionButton} text="Скрыть">
            <svg
              className={styles.ActionButtonIcon}
              width="15"
              height="15"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 0C3.136 0 0 3.136 0 7C0 10.864 3.136 14 7 14C10.864 14 14 10.864 14 7C14 3.136 10.864 0 7 0ZM7 12.6C3.906 12.6 1.4 10.094 1.4 7C1.4 5.705 1.841 4.515 2.583 3.57L10.43 11.417C9.485 12.159 8.295 12.6 7 12.6ZM11.417 10.43L3.57 2.583C4.515 1.841 5.705 1.4 7 1.4C10.094 1.4 12.6 3.906 12.6 7C12.6 8.295 12.159 9.485 11.417 10.43Z"
                fill="#999999"
              />
            </svg>
          </ActionButton>
        </li>
        {!isMobile && (
          <li className={styles.dropdownItem}>
            <ActionButton text="Сохранить" className={styles.saveButton}>
              <svg
                className={styles.ActionButtonIcon}
                width="15"
                height="15"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.4 2.8H0V12.6C0 13.37 0.63 14 1.4 14H11.2V12.6H1.4V2.8ZM12.6 0H4.2C3.43 0 2.8 0.63 2.8 1.4V9.8C2.8 10.57 3.43 11.2 4.2 11.2H12.6C13.37 11.2 14 10.57 14 9.8V1.4C14 0.63 13.37 0 12.6 0ZM11.9 6.3H9.1V9.1H7.7V6.3H4.9V4.9H7.7V2.1H9.1V4.9H11.9V6.3Z"
                  fill="#979797"
                />
              </svg>
            </ActionButton>
          </li>
        )}
        <li className={styles.dropdownItem}>
          <ActionButton className={styles.actionButton} text="Пожаловаться">
            <svg
              className={styles.ActionButtonIcon}
              width="15"
              height="15"
              viewBox="0 0 14 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 12H14L7 0L0 12ZM7.63636 10.1053H6.36364V8.8421H7.63636V10.1053ZM7.63636 7.57895H6.36364V5.05263H7.63636V7.57895Z"
                fill="#999999"
              />
            </svg>
          </ActionButton>
        </li>
        <button className={styles.closeButton}>Закрыть</button>
      </Dropdown>

      <div className={styles.controls}>
        <KarmaCounter
          count={controlsData.karmaCount}
          className={styles.karmaCounter}
        />

        <div>
          <ActionButton
            className={styles.commentsButton}
            count={controlsData.commentsCount}
            text="Комментарии"
          >
            <svg
              className={styles.ActionButtonIcon}
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.75 0H1.41667C0.6375 0 0 0.6375 0 1.41667V9.91667C0 10.6958 0.6375 11.3333 1.41667 11.3333H11.3333L14.1667 14.1667V1.41667C14.1667 0.6375 13.5292 0 12.75 0ZM11.3333 8.5H2.83333V7.08333H11.3333V8.5ZM11.3333 6.375H2.83333V4.95833H11.3333V6.375ZM11.3333 4.25H2.83333V2.83333H11.3333V4.25Z"
                fill="#C4C4C4"
              />
            </svg>
          </ActionButton>
        </div>

        <div className={styles.actions}>
          <ActionButton text="Поделиться" className={styles.chareButton}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="10" cy="10" r="10" fill="#C4C4C4" />
              <path
                d="M11.6667 12.0683C11.3289 12.0683 11.0267 12.2189 10.7956 12.4548L7.62667 10.3715C7.64889 10.256 7.66667 10.1406 7.66667 10.0201C7.66667 9.8996 7.64889 9.78414 7.62667 9.66867L10.76 7.60542C11 7.85643 11.3156 8.01205 11.6667 8.01205C12.4044 8.01205 13 7.33936 13 6.50602C13 5.67269 12.4044 5 11.6667 5C10.9289 5 10.3333 5.67269 10.3333 6.50602C10.3333 6.62651 10.3511 6.74197 10.3733 6.85743L7.24 8.92068C7 8.66968 6.68444 8.51406 6.33333 8.51406C5.59556 8.51406 5 9.18675 5 10.0201C5 10.8534 5.59556 11.5261 6.33333 11.5261C6.68444 11.5261 7 11.3705 7.24 11.1195L10.4044 13.2078C10.3822 13.3133 10.3689 13.4237 10.3689 13.5341C10.3689 14.3424 10.9511 15 11.6667 15C12.3822 15 12.9644 14.3424 12.9644 13.5341C12.9644 12.7259 12.3822 12.0683 11.6667 12.0683Z"
                fill="white"
              />
            </svg>
          </ActionButton>
          <ActionButton text="Сохранить" className={styles.saveButton}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="10" cy="10" r="10" fill="#C4C4C4" />
              <path
                d="M6 7H5V14C5 14.55 5.45 15 6 15H13V14H6V7ZM14 5H8C7.45 5 7 5.45 7 6V12C7 12.55 7.45 13 8 13H14C14.55 13 15 12.55 15 12V6C15 5.45 14.55 5 14 5ZM13.5 9.5H11.5V11.5H10.5V9.5H8.5V8.5H10.5V6.5H11.5V8.5H13.5V9.5Z"
                fill="white"
              />
            </svg>
          </ActionButton>
        </div>
      </div>
    </li>
  )
}

export default Card
