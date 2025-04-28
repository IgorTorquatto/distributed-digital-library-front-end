import React from 'react'
import styles from "./SideMenu.module.css"
import { House,Books,Kanban,Share,Users,SignOut } from "phosphor-react";

export const SideMenu = () => {
  return (
    <>
    <div className={styles.sideMenu}>
        <div className={styles.sideMenuItem}>
            <House size={32} />
            Início
        </div>
        <hr className={styles.sideMenuLine}></hr>
        <div className={styles.sideMenuSubTitle}>APLICAÇÃO</div>
        <div className={styles.sideMenuItem}>
            <Books size={32} />
            Livros
        </div>
        <div className={styles.sideMenuItem}>
            <Kanban size={32} />
            Gestão
        </div>
        <div className={styles.sideMenuItem}>
            <Share size={32} />
            Solicitações
        </div>
        <hr className={styles.sideMenuLine}></hr>
        <div className={styles.sideMenuSubTitle}>SISTEMA</div>
        <div className={styles.sideMenuItem}>
            <Users size={32} />
            Usuários
        </div>
        <div className={styles.sideMenuItem}>
            <SignOut size={32} />
            Sair
        </div>
        
    </div>
    
    </>
  )
}
