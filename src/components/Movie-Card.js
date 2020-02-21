import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

const MovieCard = props => {

  return (
    <div className='Movie-Container'>
      <img src={props.movie.image} alt='' />
      <StarRatingComponent
        name='Rate'
        className='star-rating-movie'
        starColor='lightskyblue'
        emptyStarColor='grey'
        starCount={5}
        value={props.movie.rating}
      />
      <h1 className='Movie-Title'>{props.movie.name}</h1>
      <h4 className='Movie-Date-Release'>{props.movie.date}</h4>
    </div>
  );
};

export default MovieCard;
