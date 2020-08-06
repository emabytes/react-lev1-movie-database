import React from 'react';
import './App.css';
import movies from "./data"
import Movie from './Movie';
console.log(movies)
console.log(movies[0].genre[0])

function App() {
  return (
    <div className="App">
      {
        movies.map((movie, i) =>
          <Movie
            key={i}
            title={movie.title}
            year={movie.year}
            director={movie.director}
            duration={movie.duration}
            rate={movie.rate}
            genre={movie.genre}
          />
        )}
    </div>
  );
}

export default App;
