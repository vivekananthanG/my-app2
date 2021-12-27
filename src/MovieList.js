
import DeleteIcon from "@mui/icons-material/Delete";
import * as React from "react";
import { useState, useEffect } from "react";
import { Movie } from "./Movie";
import IconButton from "@mui/material/IconButton";

export function MovieList() {

  const [movieList, setMovieList] = useState([]);

  const getMovies=() => {
    fetch("https://61c412bef1af4a0017d99275.mockapi.io/movies", {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mvs) => setMovieList(mvs))
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(getMovies, []);
  
  const deleteMovie = (id) => {
    // const deleteIndex = i;
    // const remainingMovies = movieList.filter((mv, idx) => deleteIndex !== idx);
    // setMovieList(remainingMovies);

      fetch(`https://61c412bef1af4a0017d99275.mockapi.io/movies/${id}`, {
        method: "DELETE",
      })
        .then((data) => data.json())
        .then(()=>getMovies())
        .catch((err) => {
          console.log(err);
        });
  };
  return (<div className="movie-list">
    {movieList.map(({ name, poster, rating, summary,id }, i) => (
      <Movie
        key={id}
        deleteButton={<IconButton
          variant="contained"
          color="error"
          onClick={() => deleteMovie(id)}
        >
          <DeleteIcon />
        </IconButton>}
        name={name}
        poster={poster}
        rating={rating}
        summary={summary}
        id={id} />
    ))}
  </div>);
}
