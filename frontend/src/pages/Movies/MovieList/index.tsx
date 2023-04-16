import { Button } from 'primereact/button';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MoviePoster from '../../../Components/MoviePoster';

import NewsCard from '../../../Components/NewsCard';
import api from '../../../config/api';

import './style.scss';


function MovieList() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  async function fetchMovies() {
    const response = await api.get("/movies/");
    setMovies(response.data);
  }

  return (
    <div className='landing-page flex'>
      <main>
        <div className='page-top flex'>
          <div className='description'>
            <h1>Filmovie</h1>
            <Link to={"/movies/create"}><Button label='Adicionar filme' /></Link>
          </div>
        </div>

        <h1>Lista de filmes</h1>
        <div className="flex news-cards">
          {
            movies.map(newsArticle => {
              return <MoviePoster
                id={newsArticle["id"]}
                title={newsArticle["title"]}
                genre={newsArticle["genre"]}
                synopsis={newsArticle["synopsis"]}
                director={newsArticle["director"]}
                movieCoverURI={newsArticle["movie_cover_uri"]}
                backgroundImageURI={newsArticle["background_image_uri"]}
                trailerURI={newsArticle["trailer_uri"]}
              />
            })
          }



        </div>

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

export default MovieList;