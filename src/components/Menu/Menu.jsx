import React from 'react'
import styles from "./Menu.module.css"
import { Books, Binoculars, ChartPieSlice } from "phosphor-react";

export const Menu = () => {
  return (
    <>
    <div className={styles.menu}>
        <div className={styles.genresBox}>
          <span>
            <Books size={32} className={styles.menuIcon} />
          </span>
          Todos os gêneros
        </div>
        <div className={styles.exploreBox}>
          <span>
            <Binoculars size={32} className={styles.menuIcon} />
          </span>
          Explorar
        </div>
    </div>
    </>
  )
}
