import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Movie from './Movie';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const url = "http://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
    const apiKey = "d207bb479f8cb8b34db68cf477c9382c";

    axios.get(url, {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
    })
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
