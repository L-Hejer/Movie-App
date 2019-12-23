import React from "react";
import MovieCard from "./Movie-Card";
import withLoader from "./withLoader"

const MovieList = ({ movies = [] }) => {
  return (
    <div className="Movie-List">
      {movies.map((el, i) => (
        <MovieCard key={i} movie={el} />
      ))}
    </div>
  );
};
export default withLoader(MovieList);
