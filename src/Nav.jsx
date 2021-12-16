import React , {useContext}from "react";
import { MovieContext } from "./MovieContent";
import "./App.css";

const Nav = () => {

    const[movies, setMovies] = useContext(MovieContext)
  return (
    <div className="nav">
      <h3>Vladan Cupric</h3>
      <p>List filmova: {movies.length}</p>
    </div>
  );
};
export default Nav;
