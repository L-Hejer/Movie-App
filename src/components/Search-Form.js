import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

const Searchform = props => {
  return (
    <div className='search-container'>
      <input
        type='text'
        placeholder='Type movie name to search'
        onChange={event => {
          props.searchMovie(event.target.value);
        }}
      />
      <StarRatingComponent
        name='Rate'
        className='star-rating'
        starColor='lightskyblue'
        emptyStarColor='grey'
        starCount={5}
        value={props.rating}
        onStarClick={props.onStarClick}
      />
    </div>
  );
};

export default Searchform;
