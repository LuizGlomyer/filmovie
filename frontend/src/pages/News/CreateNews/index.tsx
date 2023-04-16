import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { InputText } from "primereact/inputtext";
import { InputTextarea } from 'primereact/inputtextarea';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

import api from '../../../config/api';

import './style.scss';


function CreateNews() {
  const navigate = useNavigate();
  const [title, setTitle] = useState<string>('');
  const [subtitle, setSubtitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [imageURI, setImageURI] = useState<string>('');
  const [author, setAuthor] = useState<string>('');
  const [date, setDate] = useState<string>('');
  

  async function createNewNews() {
    const data = {
      title,
      subtitle,
      content,
      "image_uri": imageURI,
      author,
      date,
    };
    console.log(data)
    const response = await api.post("/news/", data);

    navigate("/news");
  }

  return (
    <div className='landing-page flex'>
      <main className='flex'>
        <div className='page-top flex'>
          <div className='description'>
            <h1>Filmovie</h1>
            <Link to={"/news"}><Button label='Voltar' /></Link>
          </div>
        </div>

        <h1>Adicionar nova notícia</h1>

        <div className='input'>
          <div className='input-text'>
            <InputText id="title" placeholder='Título da notícia' value={title} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)} />
            <InputText id="subtitle" placeholder='Subtítulo' value={subtitle} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSubtitle(e.target.value)} />
            <InputText id="imageURI" placeholder='Imagem de fundo' value={imageURI} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setImageURI(e.target.value)} />
            <InputText id="author" placeholder='Autor' value={author} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAuthor(e.target.value)} />
            <InputText id="date" placeholder='Data' value={date} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDate(e.target.value)} />
      
          </div>

          <InputTextarea id='content' placeholder='Conteúdo' value={content} onChange={(e) => setContent(e.target.value)} rows={10} cols={50} />
        </div>


        <Button className='button-create' label='Adicionar' onClick={createNewNews}></Button>

      </main>

      <footer className='flex'>
        <span>Copyright 2023 Filmovie - Luiz Glomyer</span>
        <a href='https://github.com/LuizGlomyer/filmovie' target={'_blank'}>
          <span>Repositório no Github</span>
          <img src='https://cdn-icons-png.flaticon.com/512/25/25231.png'></img>
        </a>

      </footer>
    </div>
  );
}

export default CreateNews;
