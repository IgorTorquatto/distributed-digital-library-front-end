import React from 'react'
import styles from './inicio.module.css'
import { Link } from "react-router-dom";
import { Header } from '../../components/Header/Header'
import { SideMenu } from '../../components/SideMenu/SideMenu'
import { Footer } from '../../components/Footer/Footer'
import { GestaoCard } from '../../components/Gestão Card/index'
import { Book,Phone } from 'phosphor-react';

export const Inicio = () => {
  return (
    <>
    <div className={styles.inicio}>

            <Header/>

            <div className={styles.contentPage}>
                <SideMenu/>

                <div className={styles.rightSection}>

                    <div className={styles.linksNavigationBox}>
                        <Link to="/inicio" className={styles.linksNavigation}>
                            Home
                        </Link>
                    </div>

                    <div className={styles.title}>
                        Dashboard
                    </div>

                    <div className={styles.rowCards}>
                        <GestaoCard title="Livros" number="11940" icon={Book}/>
                        <GestaoCard title="Anúncios" number="11940" icon={Phone} />
                        <GestaoCard title="Usuários" number="11940" icon={Book} />
                    </div>

                </div>

            </div>

            <div>
                <Footer/>
            </div>
    </div>
    </>
  )
}
