
export interface MovieHeadline {
  movieName: string,
  headline: string,
  imageURI: string
}

export interface NewsData {
  id: Number,
  title: string,
  subtitle: string,
  content: string,
  imageURI: string,
  author: string,
  date: string,
}

export interface MovieData {
  id : Number,
  title: string,
  genre: string,
  synopsis: string,
  director: string,
  movieCoverURI: string,
  backgroundImageURI: string,
  trailerURI: string,
}
