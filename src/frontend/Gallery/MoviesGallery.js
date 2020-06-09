import React from 'react';
import getMovies from './Movies-get';
import Movie from './Movie';

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
            <div className='gallery'>{
                getMovies().map(movies => {
                    return (
                        <Movie
                            image={movies.image}
                            key={movies.id}
                            id={movies.id}
                            title={movies.title} />
                    );
                })
            }
            </div>
        );
    }
}
