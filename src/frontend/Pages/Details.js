import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import getMovies from '../Gallery/Movies-get';



export default class Details extends Component {

    constructor() {
        super();
        this.state = {
            movie: {}
        };
    }

    componentDidMount() {
        let movieId = this.props.match.params.movieId;
        let movie = getMovies()
            .find((movie) => movie.id === movieId);
        this.setState({ movie });
    }

    render() {
        if (this.state.movie === undefined) {
            return <Redirect to='/not-found' />;
        } else {
            return (
                <div className='details'>
                    <h3>{this.state.movie.name}</h3>
                    <div className='image-cover-row'>
                        <div
                            className='Text'>
                            {this.state.movie.details}</div>
                        <img
                            className='img'
                            src={this.state.movie.picture}
                            alt={this.state.movie.picture} />
                    </div>
                    <Link to='/'>Back to home page</Link>
                </div >
            );
        }
    }
}

