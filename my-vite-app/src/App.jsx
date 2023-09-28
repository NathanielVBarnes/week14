import React, { useState, useEffect } from 'react';

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
      .then((json) => setMovies(json.results));
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="App">
      <h1>Movie Voting and Review App</h1>
      {movies.map((movie) => (
        <div className="movie" key={movie.id}>
          <img
            src={`https://image.tmbd.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
          />
          <div className="movie-info">
            <h3>{movie.title}</h3>
            <span>{movie.vote_average}</span>
          </div>
          <div className="movie-over">
            <h2>Overview:</h2>
            <p>{movie.overview}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
