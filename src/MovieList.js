import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import * as React from "react";
import { Movie } from "./Movie";

export function MovieList({ movieList,setMovieList }) {
  const deleteMovie = (id,i) => {
    const deleteIndex = i;
    const remainingMovies = movieList.filter((mv, idx) => deleteIndex !== idx);
    setMovieList(remainingMovies);

      fetch(`https://61c412bef1af4a0017d99275.mockapi.io/movies/${id}`, {
        method: "DELETE",
      })
        .then((data) => data.json())
        .catch((err) => {
          console.log(err);
        });
  };
  return (<div className="movie-list">
    {movieList.map(({ name, poster, rating, summary,id }, i) => (
      <Movie
        key={i}
        deleteButton={<Button
          variant="contained"
          startIcon={<DeleteIcon />}
          color="error"
          onClick={() => deleteMovie(id,i)}
        >
          Delete
        </Button>}
        name={name}
        poster={poster}
        rating={rating}
        summary={summary}
        id={i} />
    ))}
  </div>);
}
