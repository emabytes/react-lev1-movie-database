import React, { Component } from 'react';
import Movie from './Movie';
import movies from "./data"

class MovieList extends Component {
    state = {}
    render() {
        return (
            <section>
                {movies.map((movie, i) =>
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
            </section>
        );
    }
}

export default MovieList;