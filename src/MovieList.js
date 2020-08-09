import React, { Component } from 'react';
import Movie from './Movie';
import movies from "./data"

class MovieList extends Component {
    state = {
        movies: movies
    }

    sortAZ = () => {
        const sortedData = this.state.movies.sort((a, b) => {
            if (a.title < b.title) {
                return - 1;
            }
            else if (a.title > b.title) {
                return 1;
            } else {
                return 0;
            }
        })
        this.setState({ movies: sortedData });
    }

    sortZA = () => {
        const sortedData = this.state.movies.sort((a, b) => {
            if (b.title < a.title) {
                return - 1;
            }
            else if (b.title > a.title) {
                return 1;
            } else {
                return 0;
            }
        })
        this.setState({ movies: sortedData });
    }

    sortByYearAsc = () => {
        const sortedData = this.state.movies.sort((a, b) => {
            if (a.year < b.year) {
                return - 1;
            }
            else if (a.year > b.year) {
                return 1;
            } else {
                return 0;
            }
        })
        this.setState({ movies: sortedData });
    }

    sortByYearDesc = () => {
        const sortedData = this.state.movies.sort((a, b) => {
            if (b.year < a.year) {
                return - 1;
            }
            else if (b.year > a.year) {
                return 1;
            } else {
                return 0;
            }
        })
        this.setState({ movies: sortedData });
    }

    sortByRating = () => {
        const sortedData = this.state.movies.sort((a, b) => {
            if (a.rate < b.rate) {
                return - 1;
            }
            else if (a.rate > b.rate) {
                return 1;
            } else {
                return 0;
            }
        })
        this.setState({ movies: sortedData });
    }


    render() {
        return (
            <div className="sorting-btn" >
                <input className="btn" type="button" value="A-Z" onClick={this.sortAZ} />
                <input className="btn" type="button" value="Z-A" onClick={this.sortZA} />
                <input className="btn" type="button" value="Sort By Year Ascending" onClick={this.sortByYearAsc} />
                <input className="btn" type="button" value="Sort By Year Descending" onClick={this.sortByYearDesc} />
                <input className="btn" type="button" value="Sort By Rating" onClick={this.sortByRating} />


                <section id="movie-list">
                    {this.state.movies.map((movie, i) =>
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
            </div>
        );
    }
}

export default MovieList;