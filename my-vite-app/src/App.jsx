import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MovieLists from './MovieLists'


// App component
function App() {
  return (
    <div className="App">
      <h1>Movie Voting and Review App</h1>
      <MovieList movies={moviesData} />
    </div>
  );
}

export default App;
