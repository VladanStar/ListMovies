import React, {useState} from "react";
import Movie from "./Movie";


const MovieList =()=>{
    const[movies, setMovis] = useState([
        {
            name:"Inception",
            price:"10$",
            id:123
        },
        {
            name:"The Gentlman",
            price:"11$",
            id:13
        },
        {
            name:"The Lord Of The Rings",
            price:"10$",
            id:123
        }
    ])
    return (
        <div>
            {movies.map(movie=>(
              <Movie  name={movie.name} price={movie.price}/>
            ))}
        </div>


    );

   
}
export default MovieList;

