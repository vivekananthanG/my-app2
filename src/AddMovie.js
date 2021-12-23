import { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import * as React from "react";

export function AddMovie({ movieList, setMovieList }) {
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const history = useHistory();
  // const { theme } = useContext(context);
  // const styles = {background:(theme === "light") ? "white" : ""};
  return (
    <div className="container">
      <div className="add-movie-form">
        <h2>Add a Movie</h2>
        <TextField
          id="outlined-basic"
          variant="outlined"
          onChange={(event) => setName(event.target.value)}
          value={name}
          type="text"
          name="name"
          label="Enter Movie Name"
          className="input-text" />
        <TextField
          id="outlined-basic"
          variant="outlined"
          value={poster}
          onChange={(event) => setPoster(event.target.value)}
          type="text"
          name="poster"
          label="Enter Movie Poster URL"
          className="input-text" />
        <TextField
          id="outlined-basic"
          variant="outlined"
          value={rating}
          onChange={(event) => setRating(event.target.value)}
          type="text"
          name="rating"
          label="Enter Movie Rating"
          className="input-text" />
        <TextField
          id="outlined-basic"
          variant="outlined"
          value={summary}
          onChange={(event) => setSummary(event.target.value)}
          type="text"
          name="summary"
          label="Enter Movie Summary"
          className="input-text" />
        <Button
          variant="outlined"
          onClick={() => {
            const newMovie = {
              name,
              poster,
              rating,
              summary,
            }; //short hand
            setMovieList([...movieList, newMovie]);
            history.push("/movies");
          }}
        >
          Add Movie
        </Button>
      </div>
    </div>
  );
}
