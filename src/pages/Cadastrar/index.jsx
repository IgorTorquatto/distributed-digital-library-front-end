import { Link } from "react-router-dom";
import styles from "./addBook.module.css";
import { CaretRight } from "phosphor-react";
import Art from "../../assets/Art.png";
import ArtTwo from "../../assets/foto unica.png";
import { Button } from "../../components/Button/Button";
import { SideMenu } from "../../components/SideMenu/SideMenu";
import { Footer } from "../../components/Footer/Footer";
import { Upload } from "phosphor-react";
import { Header } from "../../components/Header/Header";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Validaçãodo formulário
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useEffect, useState } from "react";
import axios from "axios";

// Schema de validação com Yup
const schema = yup
  .object({
    titulo: yup.string().required("O título é obrigatório"),
    autor: yup.string().required("O autor é obrigatório"),
    sinopse: yup.string().required("A sinopse é obrigatória"),
    coverImage: yup
      .object({
        filename: yup.string().required("A imagem de capa é obrigatória"),
        content_type: yup.string().required("O tipo de arquivo é obrigatório"),
        data: yup.string().required("A imagem precisa ser carregada"),
      })
      .required("A imagem de capa é obrigatória"),
    nota: yup.number().min(0).max(10).required("A nota deve ser entre 0 e 10"),
    editora: yup.string().required("A editora é obrigatória"),
    genero: yup
      .array()
      .of(yup.string().required("Gênero é obrigatório"))
      .min(1, "Pelo menos um gênero é necessário"),
    ano: yup.string().required("O ano de publicação é obrigatório"),
    idade_sugerida: yup
      .number()
      .min(0)
      .required("A idade sugerida é obrigatória"),
    quantity: yup.number().min(0).required("A quantidade é obrigatória"),
  })
  .required();

const predefinedGenres = [
  "Drama",
  "Ficção",
  "Aventura",
  "Terror",
  "Romance",
  "Comédia",
  "Ação",
  "Fantasia",
  "Mistério",
].sort((a, b) => a.localeCompare(b));

export const Cadastrar = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [coverImage, setCoverImage] = useState(null);

  useEffect( ()=> {
    console.log(coverImage)
  }, [coverImage])

  const handleCoverImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCoverImage({
          filename: file.name,
          content_type: file.type,
          data: reader.result.split(",")[1], // Convertendo para base64
        });
        
        // Atualiza o valor do arquivo na forma para ser validado pelo Yup
        setValue("coverImage", {
          filename: file.name,
          content_type: file.type,
          data: reader.result.split(",")[1],
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGeneroChange = (event) => {
    const genero = event.target.value.split(",").map((item) => item.trim()); // Converte a string separada por vírgulas em um array
    setValue("genero", genero); // Atualiza o valor do campo genero no React Hook Form
  };

  const onSubmit = async (data) => {
    const bookData = {
      ...data,
      cover_image: coverImage,
    };

    try {
      const response = await axios.post(
        "https://distributed-digital-library-back.onrender.com/books",
        bookData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Livro criado com sucesso:", response.data);
      toast.success("Livro cadastrado com sucesso!", {
        position: "bottom-right",
        autoClose: 4000,
        hideProgressBar: false,
      });
    } catch (error) {
      console.error("Erro ao criar o livro:", error);
      toast.error("Erro ao cadastrar livro", {
        position: "bottom-right",
        autoClose: 4000,
        hideProgressBar: false,
        theme: "colored"
      });
    }
  };

  return (
    <>
      <ToastContainer/>
      <Header showSearch={false} />

      <div className={styles.contentPage}>
        <SideMenu />

        <div className={styles.rightSection}>
          <div className={styles.linksNavigationBox}>
            <Link to="/gestao/home" className={styles.linksNavigation}>
              Home
            </Link>
            <span>
              <CaretRight size={28} weight="bold" color="#848484" />
            </span>
            <Link to="/gestao/home" className={styles.linksNavigation}>
              Livros
            </Link>
            <span>
              <CaretRight size={28} weight="bold" color="#848484" />
            </span>
            <Link
              to="/gestao/livros/cadastrar"
              className={styles.linksNavigation}
            >
              Cadastrar
            </Link>
          </div>

          <div className={styles.bookRegistration}>
            <div className={styles.columnOne}>
              <img
                src={Art}
                className={`${styles.artImage} ${styles.artImageOne}`}
                alt="Capa do Livro"
              />
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className={styles.columnTwo}>
                <div>
                  <div className={styles.inputGroup}>
                    <h1 className={styles.sectionTitle}>Cadastro de Livro</h1>
                    <div className={styles.inputGroup}>
                      <label>Título</label>
                      <input type="text" {...register("titulo")} />
                      {errors.titulo && <p>{errors.titulo.message}</p>}
                    </div>
                    <div className={styles.inputGroup}>
                      <label>Autor</label>
                      <input type="text" {...register("autor")} />
                      {errors.autor && <p>{errors.autor.message}</p>}
                    </div>
                    <div className={styles.inputGroup}>
                      <label>Nota</label>
                      <input type="number" {...register("nota")} />
                      {errors.nota && <p>{errors.nota.message}</p>}
                    </div>
                    <div className={styles.inputGroup}>
                      <label>Editora</label>
                      <input type="text" {...register("editora")} />
                      {errors.editora && <p>{errors.editora.message}</p>}
                    </div>
                    <div className={styles.inputGroup}>
                      <label>Sinopse</label>
                      <textarea
                        {...register("sinopse")}
                        className={styles.sinopse}
                      />
                      {errors.sinopse && <p>{errors.sinopse.message}</p>}
                    </div>
                  </div>
                </div>

                <div className={styles.columnThree}>
                  <div className={styles.inputGroup}>
                    <div className={styles.inputGroup}>
                      <label>Ano</label>
                      <input type="text" {...register("ano")} />
                      {errors.ano && <p>{errors.ano.message}</p>}
                    </div>
                    <div className={styles.inputGroup}>
                      <label>Idade Sugerida</label>
                      <input type="number" {...register("idade_sugerida")} />
                      {errors.idade_sugerida && (
                        <p>{errors.idade_sugerida.message}</p>
                      )}
                    </div>
                    <div className={styles.inputGroup}>
                      <label>Quantidade</label>
                      <input type="number" {...register("quantity")} />
                      {errors.quantity && <p>{errors.quantity.message}</p>}
                    </div>
                    <div className={styles.inputGroup}>
                      <label>Gênero</label>
                      <input type="text" onChange={handleGeneroChange} />
                      {errors.genero && <p>{errors.genero.message}</p>}
                    </div>
                    <div className={styles.inputGroup}>
                      <label>Capa</label>
                      <div
                        className={styles.uploadButton}
                        onClick={() =>
                          document.getElementById("coverInput").click()
                        }
                      >
                        Escolher arquivo
                        <span>
                    <Upload size={32} />
                  </span>
                      </div>

                      <input
                        type="file"
                        accept="image/*"
                        id="coverInput"
                        onChange={handleCoverImageChange}
                        className={styles.hiddenInput}
                      />

                      {errors.coverImage && (
                        <p className={styles.error}>
                          {errors.coverImage.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className={styles.registerButton}>
                    <Button type="submit">Cadastrar</Button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};
