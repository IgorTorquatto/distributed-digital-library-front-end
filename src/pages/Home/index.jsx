import styles from "./home.module.css";
import Logo from "../../assets/Nubi Logo.png";
import SearchInput from "../../components/SearchInput/SearchInput";
import { Books, Binoculars, PlusCircle   } from "phosphor-react";

export const Home = () => {
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
        <div className={styles.section}>
          <div className={styles.sectionTitle}>
            Novidades
          </div>
          <div className={styles.sectionShowCase}>
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.sectionTitle}>
            Destaques
          </div>
          <div className={styles.sectionShowCase}>
          </div>
        </div>
      </div>
    </>
  );
};
