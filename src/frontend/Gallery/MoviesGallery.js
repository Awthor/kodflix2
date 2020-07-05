import React from 'react';
import getMovies from './Movies-get';
import Movie from './Movie';

export default function MoviesGallery() {
  return (
    <div>
      <div className='image-cover-row'>{
        getMovies().map(movie => (
          <Movie
            key={movie.id}
            id={movie.id}
            picture={movie.picture}
            name={movie.name} />
        ))
      }
      </div>
    </div>
  );
}
