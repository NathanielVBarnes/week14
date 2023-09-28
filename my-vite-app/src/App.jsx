import { useState, useEffect } from 'react';
//import Movie from './Movie';
import MovieLists from './MovieLists';

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
    console.log(movies);
  }, []);
// Check your console.log(movies) and see if you are getting the data. If you are, then you can pass it down to MovieLists.jsx as a prop. Double check naming to make sure pulural names match and singular names match. Check brackets and curly braces.
  return (
  <MovieLists movies={movies} />
  )
}

export default App;
