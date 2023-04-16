import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";

import './index.css';
import App from './App';
import NewsList from './pages/News/NewsList';
import ViewNews from './pages/News/ViewNews';
import MovieList from './pages/Movies/MovieList';
import ViewMovie from './pages/Movies/ViewMovie';
import CreateMovie from './pages/Movies/CreateMovies';
import CreateNews from './pages/News/CreateNews';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "news/",
    element: <NewsList />,
  },
  {
    path: "news/:newsId",
    element: <ViewNews />,
  },
  {
    path: "news/create",
    element: <CreateNews />,
  },
  {
    path: "movies/",
    element: <MovieList />,
  },
  {
    path: "movies/:moviesId",
    element: <ViewMovie />,
  },
  {
    path: "movies/create",
    element: <CreateMovie />,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
