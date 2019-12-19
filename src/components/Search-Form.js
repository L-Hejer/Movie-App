import React from "react";
import StarRatingComponent from "react-star-rating-component";

const Searchform = props => {
  return (
    <div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Type movie name to search"
          onChange={event => {
            props.onChange(event.target.value);
          }}
        />
        <StarRatingComponent
          name="Rate"
          className="star-rating"
          starColor="lightskyblue"
          emptyStarColor="grey"
          starCount={5}
          value={props.rating}
          onStarClick={props.onStarClick}
        />
        <button className="search-btn">Search</button>
      </div>
    </div>
  );
};

export default Searchform;
