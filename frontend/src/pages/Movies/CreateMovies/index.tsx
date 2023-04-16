import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { InputText } from "primereact/inputtext";
import { InputTextarea } from 'primereact/inputtextarea';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

import api from '../../../config/api';

import './style.scss';


function CreateMovie() {
  const navigate = useNavigate();
  const [title, setTitle] = useState<string>('');
  const [genre, setGenre] = useState<string>('');
  const [synopsis, setSynopsis] = useState<string>('');
  const [director, setDirector] = useState<string>('');
  const [movieCoverURI, setMovieCorverURI] = useState<string>('');
  const [backgroundImageURI, setBackgroundImageURI] = useState<string>('');
  const [trailerURI, setTrailerURI] = useState<string>('');


  async function createNewMovie() {
    const data = {
      genre,
      synopsis,
      "trailer_uri": trailerURI,
      title,
      director,
      "background_image_uri": backgroundImageURI,
      "movie_cover_uri": movieCoverURI
    };
    console.log(data)
    const response = await api.post("/movies/", data);

    navigate("/movies");
  }

  return (
    <div className='landing-page flex'>
      <main className='flex'>
        <div className='page-top flex'>
          <div className='description'>
            <h1>Filmovie</h1>
            <Link to={"/movies"}><Button label='Voltar' /></Link>
          </div>
        </div>

        <h1>Adicionar novo filme</h1>

        <div className='input'>
          <div className='input-text'>
            <InputText id="title" placeholder='Título do filme' value={title} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)} />
            <InputText id="genre" placeholder='Gênero' value={genre} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setGenre(e.target.value)} />
            <InputText id="director" placeholder='Diretor' value={director} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDirector(e.target.value)} />
            <InputText id="movieCoverURI" placeholder='Poster do filme' value={movieCoverURI} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMovieCorverURI(e.target.value)} />
            <InputText id="backgroundImageURI" placeholder='Imagem de fundo' value={backgroundImageURI} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBackgroundImageURI(e.target.value)} />
            <InputText id="trailer" placeholder='Trailer do filme' value={trailerURI} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTrailerURI(e.target.value)} />
          </div>

          <InputTextarea id='synopsis' placeholder='Sinopse' value={synopsis} onChange={(e) => setSynopsis(e.target.value)} rows={10} cols={50} />
        </div>
        
        <Button className='button-create' label='Adicionar' onClick={createNewMovie}></Button>
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

export default CreateMovie;
