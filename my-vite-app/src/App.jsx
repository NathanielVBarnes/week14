import { useState, useEffect } from 'react';
import MovieLists from './MovieLists';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);

  const url = "http://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

  function getMovies() {
    fetch(url, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMjA3YmI0NzlmOGNiOGIzNGRiNjhjZjQ3N2M5MzgyYyIsInN1YiI6IjY1MTFiZWViYTkxMTdmMDBmZWIzZjVkZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FusdF2uOfm8yrWWTQ-vJjTo6mgpl7nn97fQFfEHZRZg"
      },
    })
      .then((res) => res.json())
      .then((res) => setMovies(res.results));
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
<MovieLists movies={movies} />
  )
}


export default App;
