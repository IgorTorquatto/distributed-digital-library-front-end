import React, {useState} from 'react'
import styles from './explorar.module.css'
import { Header } from '../../components/Header/Header'
import { Menu } from '../../components/Menu/Menu'
import { Link } from 'react-router-dom'
import { CaretRight } from 'phosphor-react'
import { Footer } from '../../components/Footer/Footer'
import { CardBook } from "../../components/CardBook/CardBook";

//Teste (DEVE SER APAGADO DEPOIS)
import Test from '../../assets/Book Cover Group.png'
import Test2 from '../../assets/Book Cover Group(2).png'
import Test3 from '../../assets/Book Cover Group(3).png'
import { Button } from '../../components/Button/Button'

const livrosBase = [
    { image: Test, title: "Jogos Vorazes", author: "Suzanne Collins" },
    { image: Test2, title: "Harry Potter ", author: "J.K. Rowling" },
    { image: Test3, title: "Anne de Green Gables", author: "L. M. Montgomery" },
  ];
  
const livros = [];
  
  
for (let i = 0; i < 20; i++) {
    livros.push(livrosBase[i % livrosBase.length]); 
}
  

export const Explorar = () => {
    const [selectOpen, setSelectOpen] = useState(false);
  return (
    <>
        {selectOpen && <div className={styles.overlay}></div>}
        
        <Header showSearch={true}/>

        <Menu/>

        <div className={styles.contentPage}>

            <div className={styles.linksNavigationBox}>
                    <Link to="/home" className={styles.linksNavigation}>
                        Home
                    </Link>
                    <span>
                        <CaretRight size={28} weight="bold" color="#848484" />
                    </span>
                    <Link to="/home/explorar" className={styles.linksNavigation}>
                        Explorar
                    </Link>
            </div>

            <div className={styles.grid}>

                <div className={styles.columnOne}>

                    <div className={styles.columnOneHeader}>
                        <p>Filtros</p>
                        <p>Gêneros</p>
                    </div>

                    <div className={styles.genres}>
                        <ul>
                            <li>Administração, Economia e Negócios</li>
                            <li>Arte, Fotografia e Design</li>
                            <li>Biografias e Histórias Reais</li>
                            <li>Ciência</li>
                            <li>Clássicos</li>
                            <li>Contos, Crônicas e Humor</li>
                            <li>Direito, Política e Ciências Sociais</li>
                            <li>Esportes, Hobbies e Estilo de Vida</li>
                            <li>Fantasia</li>
                            <li>Ficção Ciêntífica</li>
                            <li>HQ’s, Mangás e Graphic Novels</li>
                            <li>História</li>
                            <li>Romance</li>
                            <li>Tecnologia, Informática e Mídias Sociais</li>
                            <li>Terror</li>
                            <li>Viagem</li>
                        </ul>
                    </div>

                </div>

                <div className={styles.columnTwo}>

                    <div className={styles.topSection}> 

                            <div className={styles.booksNumbers}>
                                <p>Livros</p>
                                <p>176.043 Resultados</p>
                            </div>

                            <div className={styles.orderBy}>
                            <label htmlFor="ordenar" className={styles.orderByLabel}>Ordenar por:</label>
                            <select
                                id="ordenar"
                                className={styles.orderBySelect}
                                onFocus={() => setSelectOpen(true)}
                                onBlur={() => setSelectOpen(false)}
                            >
                                <option value="popularidade">Popularidade</option>
                                <option value="mais-antigo">Mais antigo</option>
                                <option value="mais-recente">Mais recente</option>
                                <option value="melhor-avaliacao">Melhor avaliação</option>
                            </select>
                            </div>

                    </div>

                    <div className={styles.showBooks}>
                        {livros.map((livro, index) => (
                                <CardBook
                                key={index}
                                image={livro.image}
                                title={livro.title}
                                author={livro.author} 
                                />
                            ))}
                    </div>

                    <div className={styles.moreResultsButton}>
                        <Button>Ver mais resultados</Button>
                    </div>

                </div>
           

            </div>

            

        </div>

        <Footer></Footer>
    
    
    </>
  )
}
