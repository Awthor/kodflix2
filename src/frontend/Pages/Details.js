import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import getMovies from '../Gallery/Movies-get';

export default class Details extends Component {
    constructor() {
        super();
        this.state = { movie: {} };
    }

    componentDidMount() {
        let movieId = this.props.match.params.movieId;
        let movie = getMovies()
            .find((movie) => movie.id === movieId);
        this.setState({ movie });
    }

    render() {
        if (this.state.movietitle === undefined) {
            return <Redirect to='/not-found' />;
        } else {
            return (
                <div className='details'>
                    <h1>{this.state.movie.title}</h1>
                    <div className='image-cover-row'>
                        <h3 className='Text'>
                            {this.state.movie.details}
                        </h3>
                        <div className='img'>
                            <img src={this.state.movie.picture}
                                alt={this.state.movie.title} />
                        </div>
                    </div>
                </div>
            );
        }
    }
}