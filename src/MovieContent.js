import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      name: "Inception",
      price: "10$",
      id: 123,
    },
    {
      name: "The Gentlman",
      price: "11$",
      id: 13,
    },
    {
      name: "The Lord Of The Rings",
      price: "10$",
      id: 123,
    },
  ]);

  return (
    <div>
      <MovieContext.Provider value={[movies, setMovies]}>
        {props.children}
      </MovieContext.Provider>
    </div>
  );
};
