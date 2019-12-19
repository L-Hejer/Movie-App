import React from "react";
import StarRatingComponent from "react-star-rating-component";

const MovieCard = props => {
  const { movie = {} } = props;
  const { name = "", date = "", image = "", rating = 1 } = movie;

  return (
    <div>
      <div className="Movie-Container">
        <img src={image} alt="" />
        <StarRatingComponent
          name="Rate"
          className="star-rating-movie"
          starColor="lightskyblue"
          emptyStarColor="grey"
          starCount={5}
          value={rating}
        />
        <h1 className="Movie-Title">{name}</h1>
        <h4 className="Movie-Date-Release">{date}</h4>
      </div>
    </div>
  );
};

export default MovieCard;
