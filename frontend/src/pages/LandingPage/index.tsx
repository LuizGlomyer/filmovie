import React, { useEffect, useState } from 'react';

import './style.scss';
import interstellarImage from '../../assets/interstellar.jpg';
import minionsImage from '../../assets/minions.jpg';
import spidermanImage from '../../assets/spiderman.jpg';

import { Galleria } from 'primereact/galleria';
import { MovieHeadline } from '../../config/interfaces';

import NewsCard from '../../Components/NewsCard';
import api from '../../config/api';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';


function LandingPage() {
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
    const latestNews = response.data.slice(0, 3);
    setNews(latestNews);

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
          <img src='https://static.vecteezy.com/system/resources/thumbnails/002/236/321/small/movie-trendy-banner-vector.jpg'></img>

          <div className='description'>
            <h1>Filmovie</h1>
            <p>Bem-vindo ao Filmovie, o seu destino definitivo para tudo relacionado ao universo cinematográfico. Nós somos um site dedicado a trazer as últimas notícias do mundo do cinema, incluindo lançamentos de filmes, entrevistas com atores e atrizes, informações sobre diretores e muito mais. Se você é um fã ávido de cinema, então este é o lugar certo para você. Tudo sobre os melhores filmes da indútria você encontra por aqui</p>

          </div>
        </div>
        <p>

          Navegue pelo nosso catálogo de filmes e descubra sinopses incríveis que irão cativá-lo e levá-lo em uma jornada emocionante de aventura, romance e suspense. Nossa equipe de escritores experientes e dedicados trabalha duro para trazer a você as informações mais atualizadas e precisas sobre o que está acontecendo no mundo do cinema, para que você esteja sempre por dentro das últimas tendências.

          Não apenas isso, mas também temos uma seção dedicada a notícias de atores e atrizes, para que você possa acompanhar suas estrelas favoritas e saber o que elas estão fazendo. Descubra os projetos futuros dos seus atores e atrizes preferidos, bem como informações sobre seus próximos filmes e séries de TV.

          No Filmovie, acreditamos que o cinema é uma forma poderosa de arte que tem o poder de nos levar a lugares que nunca pensamos ser possíveis. Deixe-nos levá-lo em uma jornada emocionante através do mundo do cinema, com notícias e sinopses incríveis que irão cativá-lo e entusiasmá-lo. Então, por que esperar? Navegue pelo nosso site agora e comece sua jornada com a gente!
        </p>

        <Link to={"/movies"}><Button label='Acessar filmes'></Button></Link>

        <h2>Últimas notícias</h2>

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

export default LandingPage;