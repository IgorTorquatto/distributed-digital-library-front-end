import React from 'react'
import styles from './StatisticsBook.module.css'

export const StatisticsBook = ({ headerText, bodyText }) => {
  return (
    <div className={styles.statisticsBook}>
        <div className={styles.header}>
             {headerText}
        </div>
        <div className={styles.body}>
             {bodyText}
        </div>
    </div>
  )
}
