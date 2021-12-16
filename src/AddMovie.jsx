import React, { useState } from "react";
import { useContext } from "react";
import { MovieContext } from "./MovieContent";

const AddMovie = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updatePrice = (e) => {
    setPrice(e.target.value);
  };


  const[movies, setMovies] = useContext(MovieContext);
  const addMovie = (e) => {
    e.preventDefault();
    // dodavanje filmova
    setMovies(prevMovies => [...prevMovies, {name:name},{price:price}])
  };
  return (
    <div>
      <form onSubmit={addMovie}>
        <input type="text" name="name" value={name} onChange={updateName} />
        <input type="text" name="price" value={price} onChange={updatePrice} />
        <button>Submit</button>
      </form>
    </div>
  );
};
export default AddMovie;
