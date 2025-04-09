import { Link } from "react-router-dom";
import styles from "./addBook.module.css";
import Logo from "../../assets/Nubi Logo.png";
import LivIcon from "../../assets/Liv icon.png";
import ExploreIcon from "../../assets/Explore Icon.png";
import CadastrarIcon from "../../assets/Cadastrar Icon.png";
import { CaretRight } from "phosphor-react";
import Art from "../../assets/Art.png";

export const AddBook = () => {
  return (
    <>
      <div className={styles.topBox}>
        <div>
          <img src={Logo} className={styles.imgLogo}></img>
        </div>
      </div>
      <div className={styles.menu}>
        <div className={styles.menuBox}>
          <div>
            <img src={LivIcon}></img>
          </div>
          Todos os gêneros
        </div>
        <div className={styles.menuBox}>
          <div>
            <img src={ExploreIcon}></img>
          </div>
          Explorar
        </div>
        <div className={styles.menuBox}>
          <div>
            <img src={CadastrarIcon}></img>
          </div>
          Cadastrar Livro
        </div>
      </div>
      <div className={styles.contentPage}>
        <div className={styles.linksNavigationBox}>
          <Link to="/home" className={styles.linksNavigation}>Home</Link>
          <CaretRight size={28} />
          <Link to="/addBook"  className={styles.linksNavigation}>Cadastrar Livro</Link>
        </div>
        <div className={styles.bookRegistration}>
           <div>
            <img src={Art}></img>
           </div>
            <div className={styles.bookRegistrationTitle}>
                <h1 className={styles.sectionTitle}>Cadastro de Livro</h1>
            </div>
        </div>
      </div>
    </>
  );
};
