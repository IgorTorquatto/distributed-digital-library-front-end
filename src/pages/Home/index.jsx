import styles from "./home.module.css";
import Logo from "../../assets/Nubi Logo.png";
import LivIcon from "../../assets/Liv icon.png";
import ExploreIcon from "../../assets/Explore Icon.png";
import CadastrarIcon from "../../assets/Cadastrar Icon.png";
import SearchInput from "../../components/SearchInput/SearchInput";

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
          <div>
            <img className={styles.menuIcon} src={LivIcon}></img>
          </div>
          Todos os gêneros
        </div>
        <div className={styles.exploreBox}>
          <div>
            <img className={styles.menuIcon} src={ExploreIcon}></img>
          </div>
          Explorar
        </div>
        <div className={styles.registerBox}>
          <div>
            <img  className={styles.menuIcon} src={CadastrarIcon}></img>
          </div>
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
