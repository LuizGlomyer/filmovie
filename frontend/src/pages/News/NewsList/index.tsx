import React, { useEffect, useState } from 'react';

import './style.scss';
import interstellarImage from '../../../assets/interstellar.jpg';
import minionsImage from '../../../assets/minions.jpg';
import spidermanImage from '../../../assets/spiderman.jpg';

import { Galleria } from 'primereact/galleria';
import { MovieHeadline } from '../../../config/interfaces';

import NewsCard from '../../../Components/NewsCard';
import api from '../../../config/api';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';


function NewsList() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [news, setNews] = useState([]);
  const movies = [
    {
      movieName: "Interestelar",
      headline: "As melhores esperiências você encontra aqui",
      imageURI: interstellarImage
    },
    {
      movieName: "Minions",
      headline: "Diversão para toda a família",
      imageURI: minionsImage
    },
    {
      movieName: "Spiderman",
      headline: "Empolgação e suspense à tona",
      imageURI: spidermanImage
    },
  ];


  useEffect(() => {
    fetchNews();
  }, []);

  async function fetchNews() {
    const response = await api.get("/news/");
    setNews(response.data);

  }

  const itemTemplate = (item: MovieHeadline) => {
    return <div className='image-container' style={{ height: "90vh", overflow: "hidden" }}><img src={item.imageURI} alt={item.movieName} style={{ overflow: "hidden", width: "100vw", display: 'block' }} /></div>;
  }

  function changeHeadline(GalleriaItemChangeEvent: any) {
    setActiveIndex(GalleriaItemChangeEvent.index);
  }

  return (
    <div className='landing-page flex'>
      <div className='headline flex'>
        <Galleria
          activeIndex={activeIndex}
          onItemChange={changeHeadline}
          value={movies}
          showThumbnails={false}
          showItemNavigators
          showIndicators
          item={itemTemplate}
          circular
          autoPlay
          transitionInterval={7000}
        />
        <div className='headline-box'>
          <span className='movie-title'>= {movies[activeIndex].movieName} =</span>
          <span className='movie-headline'>{movies[activeIndex].headline}</span>
        </div>
      </div>

      <main>
        <div className='page-top flex'>
          <div className='description'>
            <h1>Filmovie</h1>
            <Link to={"/news/create"}><Button label='Adicionar filme' /></Link>
          </div>
        </div>

        <h1>Últimas notícias</h1>


        <div className="flex news-cards">
          {
            news.map(newsArticle => {
              console.log(newsArticle["title"])
              return <NewsCard
                id={newsArticle["id"]}
                title={newsArticle["title"]}
                subtitle={newsArticle["subtitle"]}
                content={newsArticle["content"]}
                imageURI={newsArticle["image_uri"]}
                author={newsArticle["author"]}
                date={newsArticle["date"]}
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

export default NewsList;