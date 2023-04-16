import React, { useEffect, useState } from 'react';
import { Button } from 'primereact/button';
import { Link, useLocation } from 'react-router-dom';

import './style.scss';


function ViewNews() {
  const { state } = useLocation();

  return (
    <div className='landing-page view-news-page flex'>
      <main>
        <img className='headline' src={state.imageURI}></img>
        <div className='page-top flex'>
          <div className='description'>
            <h1>Filmovie</h1>
            <Link to={"/news"}><Button label='Voltar'></Button></Link>
          </div>
        </div>

        <h1>{state.title}</h1>
        <h2>{state.subtitle}</h2>
        <span className='news-details'>Publicado por <b>{state.author}</b> em {state.date}</span>
        <p>{state.content}</p>
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

export default ViewNews;