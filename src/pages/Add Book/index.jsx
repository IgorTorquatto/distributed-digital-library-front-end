import { Link } from "react-router-dom";
import styles from "./addBook.module.css";
import Logo from "../../assets/Nubi Logo.png";
import { CaretRight } from "phosphor-react";
import Art from "../../assets/Art.png";
import ArtTwo from "../../assets/foto unica.png";
import SearchInput from "../../components/SearchInput/SearchInput";
import { Books, Binoculars, PlusCircle, ChartPieSlice } from "phosphor-react";
import { Button } from "../../components/Button/Button";
import { Menu } from "../../components/Menu/Menu";

export const AddBook = () => {
  return (
    <>

      <div className={styles.topBox}>
        <div>
          <img src={Logo} className={styles.imgLogo}></img>
        </div>
        <SearchInput />
      </div>

      <Menu/>

      <div className={styles.contentPage}>

        <div className={styles.linksNavigationBox}>
          <Link to="/home" className={styles.linksNavigation}>
            Home
          </Link>
          <span>
            <CaretRight size={28} weight="bold" color="#848484" />
          </span>
          <Link to="/addBook" className={styles.linksNavigation}>
            Cadastrar Livro
          </Link>
        </div>

        <div className={styles.bookRegistration}>
          <div className={styles.columnOne}>
            <img src={Art} className={styles.artImage}></img>
          </div>
          <div className={styles.columnTwo}>
            <h1 className={styles.sectionTitle}>Cadastro de Livro</h1>
            <div className={styles.inputsContainer}>
              <div className={styles.inputGroup}>
                <label>Título</label>
                <input type="text" />
              </div>
              <div className={styles.inputGroup}>
                <label>Autor</label>
                <input type="text" />
              </div>
              <div className={styles.rowGroup}>
                <div className={styles.inputGroup}>
                  <label>Páginas</label>
                  <input type="number" className={styles.inputPages} />
                </div>
                <div className={styles.inputGroup}>
                  <label>Idioma</label>
                  <input type="text" className={styles.inputLanguage} />
                </div>
              </div>
              <div className={styles.inputGroup}>
                <label>Gêneros</label>
                <input type="text" className={styles.inputGender} />
              </div>
            </div>
          </div>
          <div className={styles.columnThree}>
            <h1 className={`${styles.sectionTitle} ${styles.sectionTitleColumnThree}`}>Título da Coluna 3 </h1>
            <div className={styles.inputsContainer}>
              <div className={styles.inputGroup}>
                <label>Publicado em</label>
                <input type="number" className={styles.inputPages} />
              </div>
              <div className={styles.inputGroup}>
                <label>Capa</label>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.sectionTwo}>

            <div className={styles.bookRegistrationTwo}>

              <div>
                <h2 className={styles.sectionTitle}>Descrição</h2>
                <p>Forneça um resumo conciso do conteúdo do livro, abordando seu tema principal, sinopse e outros aspectos relevantes.</p>
                <div className={styles.inputGroup}>
                    <input type="text" className={styles.inputDescription} />
                </div>
              </div>
              
              <div>
                <div className={styles.artTwo}>
                <img src={ArtTwo} className={styles.artImage}></img>
                </div>
              </div>
          
            </div>

            <div className={styles.registerButton}>
              <Button>Cadastrar</Button>
            </div>

        </div>

      </div>
    </>
  );
};
