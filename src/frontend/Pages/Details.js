import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import getMovies from '../Gallery/Movies-get';



export default class Details extends Component {

    constructor() {
        super();
        this.state = { movie: {} };
    }

    componentDidMount() {
        let movie = getMovies()
            .find((movie) => movie.id === this.props.match.params.movieId);
        this.setState({ movie });
    }

    render() {
        let movie = this.state.movie;
        return (
            this.state.movie ?
                <div className='details'>
                    <h1>{movie.title}</h1>
                    <div className='image-cover-row'>
                        <h3 className='Text'>
                            {movie.details}
                        </h3>
                        <div className='img'>
                            <img src={movie.picture} alt={movie.title} />
                        </div>
                    </div>
                </div> :
                <Redirect to='/not-found' />
                )
            }
        }



