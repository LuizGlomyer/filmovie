-- Creation of product table
CREATE TABLE news (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  subtitle TEXT NOT NULL,
  content TEXT NOT NULL,
  image_uri TEXT NOT NULL,
  author TEXT NOT NULL,
  date TEXT NOT NULL
);

CREATE TABLE movies (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  genre TEXT NOT NULL,
  synopsis TEXT NOT NULL,
  director TEXT NOT NULL,
  movie_cover_uri TEXT NOT NULL,
  background_image_uri TEXT NOT NULL,
  trailer_uri TEXT NOT NULL
);
