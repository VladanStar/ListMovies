import React, { useState, useContext } from "react";
import Movie from "./Movie";
import { MovieContext } from "./MovieContent";

const MovieList = () => {
  const [movies, setMovies] = useContext(MovieContext);

  return (
    <div>
      {movies.map((movie) => (
        <Movie name={movie.name} price={movie.price} />
      ))}
    </div>
  );
};
export default MovieList;
