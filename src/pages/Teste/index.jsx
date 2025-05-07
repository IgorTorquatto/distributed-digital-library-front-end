import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// Schema de validação com Yup
const schema = yup.object({
  titulo: yup.string().required('O título é obrigatório'),
  autor: yup.string().required('O autor é obrigatório'),
  sinopse: yup.string().required('A sinopse é obrigatória'),
  coverImage: yup.object({
    filename: yup.string().required('A imagem de capa é obrigatória'),
    content_type: yup.string().required('O tipo de arquivo é obrigatório'),
    data: yup.string().required('A imagem precisa ser carregada'),
  }).required('A imagem de capa é obrigatória'),
  nota: yup.number().min(0).max(10).required('A nota deve ser entre 0 e 10'),
  editora: yup.string().required('A editora é obrigatória'),
  genero: yup.array().of(yup.string().required('Gênero é obrigatório')).min(1, 'Pelo menos um gênero é necessário'),
  ano: yup.string().required('O ano de publicação é obrigatório'),
  idade_sugerida: yup.number().min(0).required('A idade sugerida é obrigatória'),
  quantity: yup.number().min(0).required('A quantidade é obrigatória'),
}).required();

export const Teste = () => {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const [coverImage, setCoverImage] = useState(null);

  const handleCoverImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCoverImage({
          filename: file.name,
          content_type: file.type,
          data: reader.result.split(',')[1], // Convertendo para base64
        });
        // Atualiza o valor do arquivo na forma para ser validado pelo Yup
        setValue("coverImage", {
          filename: file.name,
          content_type: file.type,
          data: reader.result.split(',')[1],
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGeneroChange = (event) => {
    const genero = event.target.value.split(',').map(item => item.trim()); // Converte a string separada por vírgulas em um array
    setValue("genero", genero); // Atualiza o valor do campo genero no React Hook Form
  };

  const onSubmit = async (data) => {
    const bookData = {
      ...data,
      cover_image: coverImage,
    };

    try {
      const response = await axios.post('https://distributed-digital-library-back.onrender.com/books', bookData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Livro criado com sucesso:', response.data);
    } catch (error) {
      console.error('Erro ao criar o livro:', error);
    }
  };

  return (
    <div>
      <h1>Adicionar Livro</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Título:</label>
          <input type="text" {...register('titulo')} />
          {errors.titulo && <p>{errors.titulo.message}</p>}
        </div>
        <div>
          <label>Autor:</label>
          <input type="text" {...register('autor')} />
          {errors.autor && <p>{errors.autor.message}</p>}
        </div>
        <div>
          <label>Sinopse:</label>
          <textarea {...register('sinopse')} />
          {errors.sinopse && <p>{errors.sinopse.message}</p>}
        </div>
        <div>
          <label>Imagem de Capa:</label>
          <input type="file" accept="image/*" onChange={handleCoverImageChange} />
          {errors.coverImage && <p>{errors.coverImage.message}</p>}
        </div>
        <div>
          <label>Nota:</label>
          <input type="number" {...register('nota')} />
          {errors.nota && <p>{errors.nota.message}</p>}
        </div>
        <div>
          <label>Editora:</label>
          <input type="text" {...register('editora')} />
          {errors.editora && <p>{errors.editora.message}</p>}
        </div>
        <div>
          <label>Gênero (separar por vírgulas):</label>
          <input type="text" onChange={handleGeneroChange} />
          {errors.genero && <p>{errors.genero.message}</p>}
        </div>
        <div>
          <label>Ano:</label>
          <input type="text" {...register('ano')} />
          {errors.ano && <p>{errors.ano.message}</p>}
        </div>
        <div>
          <label>Idade Sugerida:</label>
          <input type="number" {...register('idade_sugerida')} />
          {errors.idade_sugerida && <p>{errors.idade_sugerida.message}</p>}
        </div>
        <div>
          <label>Quantidade:</label>
          <input type="number" {...register('quantity')} />
          {errors.quantity && <p>{errors.quantity.message}</p>}
        </div>
        <button type="submit">Adicionar Livro</button>
      </form>
    </div>
  );
};
