import React from "react";
import { movies } from "../data";

function Movies() {


  const movieList = movies.map((movie) => {

    const genreList = movie.genres.map((genre) => {
      return <li key ={genre}>{genre}</li>
    })

    return (<div key = {movie.title}>
      <p>Name: {movie.title}</p>
      <p>Time: {movie.time}</p>
      <ul>
        {genreList}
      </ul>
    </div>)
  })
  return <div>
    <h1>Movies Page</h1>
    {movieList}
  </div>;
}

export default Movies;
