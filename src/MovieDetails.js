import { useHistory, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import * as React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export function MovieDetails({ movieList }) {
  const { id } = useParams();
  const movie = movieList[id];
  const history2 = useHistory();

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
