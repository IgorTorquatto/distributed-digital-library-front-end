import React from 'react'
import styles from "./Footer.module.css"
import { Books, Binoculars, ChartPieSlice } from "phosphor-react";

export const Footer = () => {
  return (
    <>
        <div className={styles.footer}> 
                <div className={styles.columnOne}>
                    <h2>Saiba Mais</h2>
                    <p>Políticas de privacidade</p>
                    <p>Termos de uso</p>
                </div>
                <div></div>
                <div></div>
        </div>
    </>
  )
}
