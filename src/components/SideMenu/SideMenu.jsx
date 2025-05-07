import React, {useState} from 'react'
import styles from "./SideMenu.module.css"
import { House,Books,Kanban,Share,Users,SignOut } from "phosphor-react";
import { Link } from 'react-router-dom';

export const SideMenu = () => {
  const [showBookOptions, setShowBookOptions] = useState(false);
  const [showGestaoOptions, setShowGestaoOptions] = useState(false);
  const [showUsuariosOptions, setShowUsuariosOptions] = useState(false);

  const toggleBookOptions = () => {
    setShowBookOptions((prev) => !prev);
    setShowGestaoOptions(false);
    setShowUsuariosOptions(false);
  };

  const toggleGestaoOptions = () => {
    setShowGestaoOptions((prev) => !prev);
    setShowBookOptions(false);
    setShowUsuariosOptions(false);
  };

  const toggleUsuariosOptions = () => {
    setShowUsuariosOptions((prev) => !prev);
    setShowBookOptions(false);
    setShowGestaoOptions(false);
  };



  return (
    <>
    <div className={styles.sideMenu}>
        <div className={styles.sideMenuItem}>
            <Link to="/gestao/home">
                <House size={32} />
                Início
            </Link>
        </div>
        <hr className={styles.sideMenuLine}></hr>
        <div className={styles.sideMenuSubTitle}>APLICAÇÃO</div>
        <div className={styles.sideMenuItem} onClick={toggleBookOptions}>
            <Books size={32} />
            Livros
        </div>
        {showBookOptions && (
        <div className={styles.subMenu}>
          <Link to="/gestao/home" className={styles.subMenuItem}>
            Listar
          </Link>
          <Link to="/gestao/livros/cadastrar" className={styles.subMenuItem}>
            Cadastrar
          </Link>
        </div>
      )}
        <div className={styles.sideMenuItem} onClick={toggleGestaoOptions}>
            <Kanban size={32} />
            Gestão
        </div>
        {showGestaoOptions && (
        <div className={styles.subMenu}>
          <Link to="/gestao/home" className={styles.subMenuItem}>
            Anúncios
          </Link>
          <Link to="/gestao/home" className={styles.subMenuItem}>
            Relatórios
          </Link>
        </div>
      )}
        <div className={styles.sideMenuItem}>
            <Share size={32} />
            Solicitações
        </div>
        <hr className={styles.sideMenuLine}></hr>
        <div className={styles.sideMenuSubTitle}>SISTEMA</div>
        <div className={styles.sideMenuItem} onClick={toggleUsuariosOptions}>
            <Users size={32} />
            Usuários
        </div>
        {showUsuariosOptions && (
        <div className={styles.subMenu}>
          <Link to="/gestao/home" className={styles.subMenuItem}>
            Listar
          </Link>
          <Link to="/gestao/home" className={styles.subMenuItem}>
            Cadastrar
          </Link>
        </div>
      )}
        <div className={styles.sideMenuItem}>
            <SignOut size={32} />
            Sair
        </div>
        
    </div>
    
    </>
  )
}
