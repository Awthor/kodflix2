import React from 'react';
import getMovies from './Movies-get';
import Movie from './Movie';
import '../App.css';

export default class MoviesGallery extends React.Component {

    componentDidMount() {
        fetch('/rest/movies')
            .then(function (response) {
                return response.json();
            })
            .then(function (json) {
                console.log(json);
            });
    }

    render() {
        return (
            <div className='image-cover-row'>{
                getMovies().map(movies => {
                    return (
                        <Movie
                            picture={movies.picture}
                            key={movies.id}
                            id={movies.id}
                            name={movies.name} />
                    );
                })
            }
            </div>
        );
    }
}
