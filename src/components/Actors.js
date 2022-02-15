import React from "react";
import { actors } from "../data";

function Actors() {


  const actorList = actors.map((actor) => {

    const movieList = actor.movies.map((movie) => {
      return <li key = {movie}>{movie}</li>
    })

    return (<div key = {actor.name}>
      <p>Name: {actor.name}</p>
      <ul>
        {movieList}
      </ul>
    </div>)
  })


  return <div>
    <h1>Actors Page</h1>
    {actorList}</div>;
}

export default Actors;
