import React, { useEffect, useState } from 'react';
import { Button } from 'primereact/button';
import { Link, useLocation } from 'react-router-dom';

import './style.scss';


function ViewMovie() {
  const { state } = useLocation();

  return (
    <div className='landing-page view-movies-page flex'>
      <img className='headline' src={state.backgroundImageURI}></img>
      <main>
        <div className='page-top flex'>
          <div className='description'>
            <h1>Filmovie</h1>
            <Link to={"/movies"}><Button label='Voltar'></Button></Link>
          </div>
        </div>

        <h1>{state.title}</h1>
        <h2>{state.genre}</h2>
        <h2>{state.director}</h2>

        <div className='content flex'>
          <p>{state.synopsis}</p>
          <iframe width="420" height="315" src={state.trailerURI} />
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

export default ViewMovie;