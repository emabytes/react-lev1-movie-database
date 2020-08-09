import React, { Component } from 'react';

class Movie extends Component {
    state = {}
    


    render() { 
        return ( 
            <article id="movie">
                <h3>{this.props.title}</h3>
                <h4>{this.props.year}</h4>
                <h4>{this.props.director}</h4>
                <h4>{this.props.duration}</h4>
                <h4>{this.props.rate}</h4>
                <h5>{this.props.genre.map(ele => <div>{ele}</div>)}</h5>
            </article>
        );
       
    }
}
    
export default Movie;