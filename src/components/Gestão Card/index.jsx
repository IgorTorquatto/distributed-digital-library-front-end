import React from 'react'
import styles from './gestaoCard.module.css'

export const GestaoCard = ({ title, number, icon: Icon }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardLine}></div>
      <div className={styles.cardContent}>
        <div className={styles.columnOne}>
          <p>{title}</p>
          <p>{number}</p>
        </div>
        <div className={styles.columnTwo}>
          {Icon && <Icon size={35} color="#5885C8" />} 
        </div>
      </div>
    </div>
  );
};


