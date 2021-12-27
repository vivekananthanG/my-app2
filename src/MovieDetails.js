import { useHistory, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import * as React from "react";
import { useState, useEffect } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export function MovieDetails() {
  const { id } = useParams();
  // const movie = movieList[id];
  const history2 = useHistory();

  const [movie, setMovie] = useState([]);

  const getMovie=() => {
    fetch(`https://61c412bef1af4a0017d99275.mockapi.io/movies/${id}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mvs) => setMovie(mvs))
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(getMovie, []);

  return (
    <div>
      <iframe
        width="100%"
        height="530"
        src={movie.trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div className="movie-details-container">
        <div className="movie-spec">
          <h3 className="movie-name">{movie.name}</h3>
          <p className="movie-rating">⭐{movie.rating}</p>
        </div>
        <p className="movie-summary">{movie.summary}</p>
        <Button
          variant="outlined"
          startIcon={<ArrowBackIosIcon />}
          onClick={() => history2.goBack()}
        >
          BACK
        </Button>
      </div>
    </div>
  );
}
