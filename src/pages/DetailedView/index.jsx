import React from 'react'
import { Header } from '../../components/Header/Header'
import { Menu } from '../../components/Menu/Menu'
import styles from './detailedView.module.css'
import { Link } from 'react-router-dom'
import { CaretRight } from 'phosphor-react'
import { Footer } from '../../components/Footer/Footer'
import { StatisticsBook } from '../../components/StatisticsBook/StatisticsBook'

//Teste
import BookImage from '../../assets/Books.png'
import UserPhoto from '../../assets/People.png'
import Nubi from '../../assets/Nubi.png'

export const DetailedView = () => {
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
                    <img src={BookImage} ></img>
                 </div>

                 <div className={styles.columnTwo}>
                        <h1 className={styles.bookName}>Jogos Vorazes</h1>
                        <p className={styles.bookEditor}>Rocco Digital</p>
                        <p className={styles.bookAuthor}>Suzanne Collins</p>
                        <div className={styles.infosBook}>
                            <p>Ano: 2022 / Páginas: 400</p>
                            <p>Idioma: português</p>
                            <p>Idade Indicativa: 14</p>
                        </div>
                        <div className={styles.appreciation}>
                            <div className={styles.score}>
                                4.6
                            </div>

                            <div className={styles.scoreDetails}>
                                {/*<p>stars</p>*/}
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
                 <div  className={styles.synopsis}>
                    <p className={styles.synopsisTitle}>Sinopse</p>
                    <p>
                    <span>KATNISS ESCUTA OS TIROS DE CANHÃO ENQUANTO RASPA O SANGUE DO GAROTO DO DISTRITO 9.</span>
                    </p>
                    <br></br>

                    <p>
                    Na abertura dos Jogos Vorazes, a organização não recolhe os corpos dos combatentes caídos e dá tiros de canhão até o final. Cada tiro, um morto. Onze tiros no primeiro dia. Treze jovens restaram, entre eles, Katniss. Para quem os tiros de canhão serão no dia seguinte?...
                    Após o fim da América do Norte, uma nova nação chamada Panem surge. Formada por doze distritos, é comandada com mão de ferro pela Capital. Uma das formas com que demonstra seu poder sobre o resto do carente país é com Jogos Vorazes, uma competição anual transmitida ao vivo pela televisão, em que um garoto e uma garota de doze a dezoito anos de cada distrito são selecionados e obrigados a lutar até a morte!
                    </p>

                    <p>
                    Para evitar que sua irmã seja a mais nova vítima do programa, Katniss se oferece para participar em seu lugar. Vinda do empobrecido Distrito 12, ela sabe como sobreviver em um ambiente hostil. Peeta, um garoto que ajudou sua família no passado, também foi selecionado. Caso vença, terá fama e fortuna. Se perder, morre. Mas para ganhar a competição, será preciso muito mais do que habilidade. Até onde Katniss estará disposta a ir para ser vitoriosa nos Jogos Vorazes?
                    </p>

                    <p>
                    Jogos Vorazes é o primeiro livro da trilogia Jogos Vorazes que foi adaptada para o cinema e estrelada por Jennifer Lawrence.
                    </p>

                    <p>
                    "A história me fez passar várias noites em claro porque, mesmo quando terminava de ler, ficava acordada pensando. Jogos Vorazes é surpreendente!" - Stephanie Meyer
                    </p>
                    
                 </div>
            </div>

            <div className={`${styles.section} ${styles.sectionThree}`}>
                <div className={styles.sectionThreeTitle}>
                    <p>Resenhas no <span>NUBI</span></p>
                    <img src={Nubi} className={styles.nubiLogo}></img>
                </div>

                <div className={styles.commentBox}>

                    <div className={styles.userBox}>

                        <div>
                            <img src={UserPhoto} className={styles.userPhoto}></img>
                        </div>

                        <div className={styles.userDescription}>
                            <p className={styles.userName}>Maluv_u</p>
                            {/*<p> stars </p> */}
                            
                        </div>

                        <div className={styles.commentHour}>
                            <p>há 7 horas</p>
                        </div>

                    </div>

                    <div className={styles.userComment}>
                        <p>Jogos Vorazes é um livro que tenho lido desde a minha infância. Já li toda a trilogia, e sei os filmes decorados lol.</p>
                    </div>
                    
            
                </div>

                <div className={styles.totalReviews}>
                    <div className={styles.totalNumber}>
                        <p>13.556 resenhas totais</p>
                    </div> 
                    <div className={styles.totalArrow}>
                        <p>Ver Todas
                            <span>
                            <CaretRight size={28} weight="bold" color="#5885c8" />
                            </span>
                        </p>
                    </div>
                    
                </div>
                 
            </div>

        </div>

        <Footer></Footer>
    
    </>
  )
}
