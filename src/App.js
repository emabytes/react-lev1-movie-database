import React from 'react';
import './App.css';
import movies from "./data"
import Movie from './Movie';
import MovieList from './MovieList';
console.log(movies)

function App() {
  return (
    <div className="App">
     <MovieList />
    </div>
  );
}

export default App;
