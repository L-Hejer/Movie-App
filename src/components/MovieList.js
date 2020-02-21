import React from 'react';
import MovieCard from './Movie-Card';
import withLoader from './withLoader';

const MovieList = ({ movies }) => {
  return (
    <div className='Movie-List'>
      {movies.map((movie, i) => (
        <MovieCard key={i} movie={movie} />
      ))}
    </div>
  );
};
export default withLoader(MovieList);
