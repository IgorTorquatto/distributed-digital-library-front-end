import styles from "./home.module.css";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { Menu } from "../../components/Menu/Menu";
import { CardBook } from "../../components/CardBook/CardBook";
import { Link } from "react-router-dom";

//Teste (DEVE SER APAGADO DEPOIS)
import Test from '../../assets/Book Cover Group.png'
import Test2 from '../../assets/Book Cover Group(2).png'
import Test3 from '../../assets/Book Cover Group(3).png'

const books = Array.from({ length: 10 }, (_, index) => ({
  id: index,
  image: Test,
  title: `Jogos Vorazes ${index + 1}`,
  author: 'Suzanne Collins',
}));

const booksTwo = Array.from({ length: 10 }, (_, index) => ({
  id: index,
  image: Test2,
  title: `Harry Potter ${index + 1}`,
  author: 'J.K. Rowling',
}));

const booksThree = Array.from({ length: 10 }, (_, index) => ({
  id: index,
  image: Test3,
  title: `Anne de Green Gables ${index + 1}`,
  author: 'L. M. Montgomery',
}));

export const Home = () => {
  return (
    <>
      <Header showSearch={true} />

      <Menu />

      <div className={styles.contentPage}>

        <div className={styles.section}>

          <div className={styles.sectionTitle}>Novidades</div>
          <div className={styles.sectionShowCase}>
                {books.map(book => (
                    <Link to="/explorar/detailedView">
                      <CardBook image={Test} title="Jogos Vorazes" author="Suzanne Collins"/>
                    </Link>
                ))}
          </div>

        </div>

        <div className={styles.section}>

          <div className={styles.sectionTitle}>Destaques</div>
          <div className={styles.sectionShowCase}>
                {booksTwo.map(book => (
                      <CardBook image={Test2} title="Harry Potter e a Pedra Filosofal" author="J.K. Rowling"/>
                ))}
          </div>

        </div>

        <div className={styles.section}>

          <div className={styles.sectionTitle}>Populares</div>
          <div className={styles.sectionShowCase}>
                {booksThree.map(book => (
                      <CardBook image={Test3} title="Anne de Green Gables" author="L. M. Montgomery"/>
                ))}
          </div>

        </div>

      </div>

      <div>
        <Footer/>
      </div>

    </>
  );
};
