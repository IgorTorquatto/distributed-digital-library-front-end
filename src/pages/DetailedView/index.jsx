import React, { useState, useEffect } from 'react';
import { Header } from '../../components/Header/Header';
import { Menu } from '../../components/Menu/Menu';
import styles from './detailedView.module.css';
import { Link, useLocation } from 'react-router-dom';
import { CaretRight } from 'phosphor-react';
import { Footer } from '../../components/Footer/Footer';
import { StatisticsBook } from '../../components/StatisticsBook/StatisticsBook';
import UserPhoto from '../../assets/People.png';
import Nubi from '../../assets/Nubi.png';
import axios from 'axios';

export const DetailedView = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const id = params.get('id');

  const [livro, setLivro] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:8000/books/${id}`)
        .then((response) => {
          setLivro(response.data);
        })
        .catch((error) => {
          console.error('Erro ao buscar o livro:', error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [id]);

  if (loading || !livro) {
    return (
      <>
        <Header showSearch={true} />
        <Menu />
        <div className={styles.contentPage}>
          <p>Carregando livro...</p>
        </div>
        <Footer />
      </>
    );
  }

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
          <Link to="/explorar" className={styles.linksNavigation}>
            Explorar
          </Link>
        </div>

        <div className={`${styles.section} ${styles.sectionOne}`}>
          <div className={styles.columnOne}>
            <img src={livro.cover_image?.data} alt="Capa do livro" />
          </div>

          <div className={styles.columnTwo}>
            <h1 className={styles.bookName}>{livro.titulo}</h1>
            <p className={styles.bookEditor}>{livro.editora}</p>
            <p className={styles.bookAuthor}>{livro.autor}</p>
            <div className={styles.infosBook}>
              <p>Ano: {livro.ano}</p>
              <p>Idade Indicativa: {livro.idade_sugerida}</p>
            </div>
            <div className={styles.appreciation}>
              <div className={styles.score}>{livro.nota}</div>
              <div className={styles.scoreDetails}>
                <p>162.932 avaliações</p>
              </div>
            </div>
          </div>

          <div className={styles.columnThree}>
            <StatisticsBook headerText="LERAM" bodyText="389.888" />
            <StatisticsBook headerText="LENDO" bodyText="9.936" />
            <StatisticsBook headerText="QUEREM LER" bodyText="210.515" />
            <StatisticsBook headerText="RESENHAS" bodyText="13.786" />
          </div>
        </div>

        <div className={`${styles.section} ${styles.sectionTwo}`}>
          <p className={styles.sectionTwoTitle}>Ficha Técnica</p>
          <div className={styles.synopsis}>
            <p className={styles.synopsisTitle}>Sinopse</p>
            <p>
              <span>
                KATNISS ESCUTA OS TIROS DE CANHÃO ENQUANTO RASPA O SANGUE DO
                GAROTO DO DISTRITO 9.
              </span>
            </p>
            <br />
            <p>
              Na abertura dos Jogos Vorazes, a organização não recolhe os corpos
              dos combatentes caídos e dá tiros de canhão até o final. Cada
              tiro, um morto. [...]
            </p>
          </div>
        </div>

        <div className={`${styles.section} ${styles.sectionThree}`}>
          <div className={styles.sectionThreeTitle}>
            <p>
              Resenhas no <span>NUBI</span>
            </p>
            <img src={Nubi} className={styles.nubiLogo} alt="Logo Nubi" />
          </div>

          <div className={styles.commentBox}>
            <div className={styles.userBox}>
              <img
                src={UserPhoto}
                className={styles.userPhoto}
                alt="Usuário"
              />
              <div className={styles.userDescription}>
                <p className={styles.userName}>Maluv_u</p>
              </div>
              <div className={styles.commentHour}>
                <p>há 7 horas</p>
              </div>
            </div>

            <div className={styles.userComment}>
              <p>
                Jogos Vorazes é um livro que tenho lido desde a minha infância.
                Já li toda a trilogia, e sei os filmes decorados lol.
              </p>
            </div>
          </div>

          <div className={styles.totalReviews}>
            <div className={styles.totalNumber}>
              <p>13.556 resenhas totais</p>
            </div>
            <div className={styles.totalArrow}>
              <p>
                Ver Todas
                <span>
                  <CaretRight size={28} weight="bold" color="#5885c8" />
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
