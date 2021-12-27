import { useParams } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Button from "@mui/material/Button";
import * as React from "react";
import TextField from "@mui/material/TextField";

export function EditMovie() {
  const { id } = useParams();
  // const movie = movieList[id];
  const history2 = useHistory();
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");

  const getMovie = () => {
    fetch(`https://61c412bef1af4a0017d99275.mockapi.io/movies/${id}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then(({ name, poster, rating, summary, trailer }) => { setName(name); setPoster(poster); setRating(rating); setSummary(summary); setTrailer(trailer); })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(getMovie, []);

  const editMovie = () => {
    const updatedMovie = {
      name,
      poster,
      rating,
      summary,
      trailer,
    };
    console.log(updatedMovie);
    //shorthand
    // setMovieList([...movieList, newMovie]);
    fetch(`https://61c412bef1af4a0017d99275.mockapi.io/movies/${id}`, {
      method: "PUT",
      body: JSON.stringify(updatedMovie),
      headers: { "Content-Type": "application/json", },
    })
      .then((data) => data.json())
      .then(() => history2.push("/movies"))
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <div className="add-movie-form">
        <h2>Add a Movie</h2>
        <TextField
          id="outlined"
          variant="outlined"
          onChange={(event) => setName(event.target.value)}
          defaultValue="Enter Movie Name"
          value={name}
          type="text"
          name="name"
          label="Enter Movie Name"
          className="input-text" />
        <TextField
          id="outlined-basic"
          variant="outlined"
          defaultValue="Enter Movie Poster URL"
          value={poster}
          onChange={(event) => setPoster(event.target.value)}
          type="text"
          name="poster"
          label="Enter Movie Poster URL"
          className="input-text" />
        <TextField
          id="outlined-basic"
          variant="outlined"
          defaultValue="Enter Movie Rating"
          value={rating}
          onChange={(event) => setRating(event.target.value)}
          type="text"
          name="rating"
          label="Enter Movie Rating"
          className="input-text" />
        <TextField
          id="outlined-basic"
          variant="outlined"
          defaultValue="Enter Movie Summary"
          value={summary}
          onChange={(event) => setSummary(event.target.value)}
          type="text"
          name="summary"
          label="Enter Movie Summary"
          className="input-text" />
        <TextField
          id="outlined-basic"
          variant="outlined"
          defaultValue="Enter Movie Trailer URL"
          value={trailer}
          onChange={(event) => setTrailer(event.target.value)}
          type="text"
          name="trailer"
          label="Enter Movie Trailer URL"
          className="input-text" />

        <Button variant="outlined" onClick={editMovie}>
          Edit Movie
        </Button>
        <div className="movie-details-container">
          <Button
            variant="outlined"
            startIcon={<ArrowBackIosIcon />}
            onClick={() => history2.goBack()}
          >
            BACK
          </Button>
        </div>
      </div>
    </div>
  );
}
