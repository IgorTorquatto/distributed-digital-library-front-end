import React, {useState} from 'react'
import styles from "./Menu.module.css"
import { Books, Binoculars, ChartPieSlice } from "phosphor-react";
import { Link } from 'react-router-dom';

export const Menu = () => {
  const [showGenres, setShowGenres] = useState(false);

  const toggleGenres = () => {
    setShowGenres(!showGenres);
  };

  return (
    <>
     {showGenres && <div className={styles.overlay} onClick={() => setShowGenres(false)}></div>}

    <div className={styles.menu}>
        <div className={styles.genresBox}  onClick={toggleGenres}>
          <span>
            <Books size={32} className={styles.menuIcon} />
          </span>
          Todos os gêneros
        </div>
        <div className={styles.exploreBox}>
          <Link to="/home/explorar">
            <span>
              <Binoculars size={32} className={styles.menuIcon} />
            </span>
            Explorar
          </Link>
        </div>
    </div>

    {showGenres && (
        <div className={styles.genresDropdown}>
          <ul>
            <li>Administração, Economia e Negócios</li>
            <li>Arte, Fotografia e Design</li>
            <li>Biografias e Histórias Reais</li>
            <li>Ciência</li>
            <li>Clássicos</li>
            <li>Contos, Crônicas e Humor</li>
            <li>Direito, Política e Ciências Sociais</li>
            <li>Esportes, Hobbies e Estilo de Vida</li>
            <li>Fantasia</li>
            <li>Ficção Ciêntífica</li>
            <li>HQ’s, Mangás e Graphic Novels</li>
            <li>História</li>
            <li>Romance</li>
            <li>Tecnologia, Informática e Mídias Sociais</li>
            <li>Terror</li>
            <li>Viagem</li>
          </ul>
        </div>
      )}

    </>
  )
}
