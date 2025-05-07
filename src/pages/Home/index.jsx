import styles from "./home.module.css";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { Menu } from "../../components/Menu/Menu";
import { CardBook } from "../../components/CardBook/CardBook";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from "react";
//Teste (DEVE SER APAGADO DEPOIS)
import Test from '../../assets/Book Cover Group.png'
import Test2 from '../../assets/Book Cover Group(2).png'
import Test3 from '../../assets/Book Cover Group(3).png'

export const Home = () => {

  const [livros, setLivros] = useState([]);

  useEffect(() => {
    axios.get('https://distributed-digital-library-back.onrender.com/books') //http://localhost:8000/books
      .then(response => {
        setLivros(response.data); // armazena os livros
        console.log("Livros carregados:", response.data);
      })
      .catch(error => {
        console.error("Erro ao buscar livros:", error);
      });
  }, []);
  
  return (
    <>
      <Header showSearch={true} />

      <Menu />

      <div className={styles.contentPage}>

        <div className={styles.section}>

          <div className={styles.sectionTitle}>Novidades</div>
          <div className={styles.sectionShowCase}>
                {livros.map(livro => (
                    <Link
                      key={livro.id} 
                      to={{pathname:"/home/explorar/detalhes", search: `?id=${livro.id}`}}
                    >
                      <CardBook image={livro.cover_image.data} title={livro.titulo} author={livro.autor} showRightLine={true}/>
                    </Link>
                ))}
          </div>

        </div>

        <div className={styles.section}>

          <div className={styles.sectionTitle}>Destaques</div>
          <div className={styles.sectionShowCase}>
          {livros.map(livro => (
                    <Link
                      key={livro.id} 
                      to={{pathname:"/home/explorar/detalhes", search: `?id=${livro.id}`}}
                    >
                      <CardBook image={livro.cover_image.data} title={livro.titulo} author={livro.autor} showRightLine={true}/>
                    </Link>
                ))}
          </div>

        </div>

        <div className={styles.section}>

          <div className={styles.sectionTitle}>Populares</div>
          <div className={styles.sectionShowCase}>
          {livros.map(livro => (
                    <Link
                      key={livro.id} 
                      to={{pathname:"/home/explorar/detalhes", search: `?id=${livro.id}`}}
                    >
                      <CardBook image={livro.cover_image.data} title={livro.titulo} author={livro.autor} showRightLine={true}/>
                    </Link>
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
