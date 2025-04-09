import { Link } from "react-router-dom";
import styles from "./addBook.module.css";
import Logo from "../../assets/Nubi Logo.png";
import { CaretRight } from "phosphor-react";
import Art from "../../assets/Art.png";
import SearchInput from "../../components/SearchInput/SearchInput";
import { Books, Binoculars, PlusCircle   } from "phosphor-react";

export const AddBook = () => {
  return (
    <>
      <div className={styles.topBox}>
        <div>
          <img src={Logo} className={styles.imgLogo}></img>
        </div>
        <SearchInput />
      </div>
      <div className={styles.menu}>
        <div className={styles.genresBox}>
          <span>
              <Books size={32} className={styles.menuIcon} />
          </span>
          Todos os gêneros
        </div>
        <div className={styles.exploreBox}>
          <span>
              <Binoculars  size={32} className={styles.menuIcon} />
          </span>
          Explorar
        </div>
        <div className={styles.registerBox}>
          <span>
              <PlusCircle  size={32} className={styles.menuIcon} />
          </span>
          Cadastrar Livro
        </div>
      </div>
      <div className={styles.contentPage}>
        <div className={styles.linksNavigationBox}>
          <Link to="/home" className={styles.linksNavigation}>Home</Link>
          <span>
            <CaretRight size={28} weight="bold" color="#848484"/>
          </span>
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
