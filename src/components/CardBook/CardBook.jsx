import React from 'react'
import styles from './CardBook.module.css'

export const CardBook = ({ image, title, author,showRightLine = false }) => {
  return (
    <>
        <div className={styles.card}>
            <img src={image} className={styles.cardImage}/>
            <div className={styles.bookDetails}>
                <p className={styles.bookName}>{title}</p>
                <p className={styles.bookAuthor}>{author}</p>
            </div>
            {showRightLine && <div className={styles.rightLine}></div>}
        </div>
    </>
  )
}
