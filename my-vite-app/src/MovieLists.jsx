//import { useState, useEffect } from 'react';
//import axios from 'axios';
import React from 'react';
import Movie from './Movie';

const MovieLists = ({ movies }) => {
  // You're now receiving `movies` as a prop from the parent component (e.g., App.jsx)
  console.log(movies);

  // You no longer need the useState and useEffect for fetching movies here

  // You should include a return statement inside the map function
  return (
    <div className="movie-list">
      {movies.map((movie) => {
        return (
          <Movie key={movie.id} movie={movie} />
        );
      })}
    </div>
  );
};


export default MovieLists;
