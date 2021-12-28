import { useParams } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Button from "@mui/material/Button";
import * as React from "react";
import TextField from "@mui/material/TextField";

export function EditMovie() {
  const { id } = useParams();
  const [movie,setMovie]=useState(null);

  const getMovie = () => {
    fetch(`https://61c412bef1af4a0017d99275.mockapi.io/movies/${id}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mv)=>setMovie(mv) )
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(getMovie, []);

return movie?<UpdateMovie movie={movie}/>:"";
}

function UpdateMovie({movie}){
  
  // const movie = movieList[id];
  const history2 = useHistory();
  const [name, setName] = useState(movie.name);
  const [poster, setPoster] = useState(movie.poster);
  const [rating, setRating] = useState(movie.rating);
  const [summary, setSummary] = useState(movie.summary);
  const [trailer, setTrailer] = useState(movie.trailer);

  

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
    fetch(`https://61c412bef1af4a0017d99275.mockapi.io/movies/${movie.id}`, {
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
        <h2>Edit the Movie</h2>
        <TextField
          id="outlined"
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
        <TextField
          id="outlined-basic"
          variant="outlined"
          value={trailer}
          onChange={(event) => setTrailer(event.target.value)}
          type="text"
          name="trailer"
          label="Enter Movie Trailer URL"
          className="input-text" />

        <Button variant="outlined" color="success" onClick={editMovie}>
          Save
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
