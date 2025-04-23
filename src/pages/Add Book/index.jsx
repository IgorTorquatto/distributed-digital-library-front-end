import { Link } from "react-router-dom";
import styles from "./addBook.module.css";
import { CaretRight } from "phosphor-react";
import Art from "../../assets/Art.png";
import ArtTwo from "../../assets/foto unica.png";
import { Button } from "../../components/Button/Button";
import { Menu } from "../../components/Menu/Menu";
import { Footer } from "../../components/Footer/Footer";
import { Upload } from "phosphor-react";
import { Header } from "../../components/Header/Header";

import { useState } from 'react';

const predefinedGenres = [
  'Drama',
  'Ficção',
  'Aventura',
  'Terror',
  'Romance',
  'Comédia',
  'Ação',
  'Fantasia',
  'Mistério'
].sort((a, b) => a.localeCompare(b));

export const AddBook = () => {
  const [tags, setTags] = useState([]); // Para armazenar os gêneros selecionados
  const [inputValue, setInputValue] = useState(''); // Para armazenar o valor do campo de entrada
  const [filteredGenres, setFilteredGenres] = useState(predefinedGenres); // Gêneros filtrados para sugestões

  // Função para adicionar uma tag
  const addTag = (tag) => {
    if (!tags.includes(tag)) {
      setTags((prevTags) => [...prevTags, tag]);
    }
  };

  // Função para gerenciar a digitação e filtrar sugestões
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    // Filtra os gêneros com base no que foi digitado
    if (value) {
      setFilteredGenres(predefinedGenres.filter((genre) => genre.toLowerCase().includes(value.toLowerCase())));
    } else {
      setFilteredGenres(predefinedGenres);
    }
  };

  // Função para tratar o Enter ou o Blur (sair do campo)
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Impede o comportamento padrão de quebra de linha
      const genre = inputValue.trim();
      if (predefinedGenres.includes(genre)) {
        addTag(genre);
        setInputValue('');
      }
    }
  };

  const handleBlur = () => {
    const genre = inputValue.trim();
    if (predefinedGenres.includes(genre)) {
      addTag(genre);
      setInputValue('');
    }
  };

  return (
    <>
      <Header showSearch={true} />
      <Menu />

      <div className={styles.contentPage}>
        <div className={styles.linksNavigationBox}>
          <Link to="/home" className={styles.linksNavigation}>
            Home
          </Link>
          <span>
            <CaretRight size={28} weight="bold" color="#848484" />
          </span>
          <Link to="/home" className={styles.linksNavigation}>
            Administração
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
              <img src={Art} className={`${styles.artImage} ${styles.artImageOne}`} alt="Capa do Livro" />
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
                  <input type="number" className={styles.inputPages} min="0" />
                </div>
                <div className={styles.inputGroup}>
                  <label>Idioma</label>
                  <input type="text" className={styles.inputLanguage} />
                </div>
              </div>
              <div className={styles.inputGroup}>
                <label>Gêneros</label>
                <div className={styles.inputWrapper}>
                  
                    <textarea
                      className={styles.inputGender}
                      value={inputValue}
                      onChange={handleInputChange}
                      onKeyDown={handleKeyDown}
                      onBlur={handleBlur}
                    />

                     <div className={styles.tagsContainer}>
                      {tags.map((tag, index) => (
                        <span key={index} className={styles.tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  
                  </div>

                {/*<div className={styles.suggestionsSubttile}>Sugestões</div>
                <div className={styles.suggestions}>
                  {filteredGenres.length > 0 && (
                    <ul>
                      {filteredGenres.map((genre, index) => (
                        <li key={index} onClick={() => addTag(genre)}>
                          {genre}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>*/}
              </div>
            </div>
          </div>
          <div className={styles.columnThree}>
            <h1 className={`${styles.sectionTitle} ${styles.sectionTitleColumnThree}`}>
              Título da Coluna 3
            </h1>
            <div className={styles.inputsContainer}>
              <div className={styles.inputGroup}>
                <label>Publicado em</label>
                <input type="number" className={styles.inputPages} />
              </div>
              <div className={styles.inputGroup}>
                <label>Capa</label>
                <div className={styles.uploadButton}>
                  Escolher arquivo
                  <span>
                    <Upload size={32} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.sectionTwo}>
          <div className={styles.bookRegistrationTwo}>
            <div>
              <h2 className={styles.sectionTitle}>Descrição</h2>
              <p>
                Forneça um resumo conciso do conteúdo do livro, abordando seu tema principal,
                sinopse e outros aspectos relevantes.
              </p>
              <div className={styles.inputGroup}>
                <textarea className={styles.inputDescription}></textarea>
              </div>
            </div>

            <div>
              <div className={styles.artTwo}>
                <img src={ArtTwo} className={styles.artImage} alt="Imagem do Livro" />
              </div>
            </div>
          </div>

          <div className={styles.registerButton}>
            <Button>Cadastrar</Button>
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
};
