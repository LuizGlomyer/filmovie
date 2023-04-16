import React from "react";
import { Card } from 'primereact/card';
import { MovieData, NewsData } from "../../config/interfaces";
import { Link } from "react-router-dom";

import './style.scss';

function MoviePoster(props: MovieData) {

  return (
    <Link to={`/movies/${props.id}`} state={props}>
      <div className="movie-poster flex">
        <img src={props.movieCoverURI} />
        <span>{props.title}</span>
      </div>
    </Link>
  );
}

export default MoviePoster;