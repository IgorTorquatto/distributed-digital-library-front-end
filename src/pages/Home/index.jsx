import styles from "./home.module.css";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { Menu } from "../../components/Menu/Menu";

export const Home = () => {
  return (
    <>
      <Header showSearch={true} />

      <Menu />

      <div className={styles.contentPage}>

        <div className={styles.section}>

          <div className={styles.sectionTitle}>Novidades</div>
          <div className={styles.sectionShowCase}></div>

        </div>

        <div className={styles.section}>

          <div className={styles.sectionTitle}>Destaques</div>
          <div className={styles.sectionShowCase}></div>

        </div>

      </div>

      <div>
        <Footer/>
      </div>

    </>
  );
};
