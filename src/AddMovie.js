import { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import * as React from "react";
import { useFormik } from "formik";
import * as yup from "yup";

export function AddMovie() {
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");
  const history = useHistory();
  // const { theme } = useContext(context);
  // const styles = {background:(theme === "light") ? "white" : ""};

  const addMovie = (newMovie) => {
    // const newMovie = {
    //   name,
    //   poster,
    //   rating,
    //   summary,
    //   trailer,
    // };
    console.log(newMovie);
    //shorthand
    // setMovieList([...movieList, newMovie]);
    fetch("https://61c412bef1af4a0017d99275.mockapi.io/movies", {
      method: "POST",
      body: JSON.stringify(newMovie),
      headers: { "Content-Type": "application/json", },
    })
      .then((data) => data.json())
      .then(() => history.push("/movies"))
      .catch((err) => {
        console.log(err);
      });
  };

  const formValidationSchema = yup.object({
    name:yup.string().required("Why not fill name😊"),
    poster:yup.string().required("Why not fill poster😊"),
    rating:yup.number().required("Why not fill rating😊"),
    summary:yup.string().required("Why not fill summary😊"),
    trailer:yup.string().required("Why not fill trailer😊"),
  });

  const { handleBlur, handleChange, handleSubmit, values, touched, errors } = useFormik({
    initialValues: { name,poster,rating,summary,trailer},
    validationSchema: formValidationSchema,
    onsubmit: (values) => {addMovie(values)},
  });

  return (
    <div className="container">
      <div className="add-movie-form">
        <h2>Add a Movie</h2>
        <form onSubmit={handleSubmit} className="form-stl">
          <TextField
          id="outlined-basic"
          variant="outlined"
          onChange={(event) => {setName(event.target.value);handleChange()}}
          onBlur={handleBlur}
          value={name}
          type="text"
          name="name"
          label="Enter Movie Name"
          className="input-text"
          helperText={touched.name && errors.name ? errors.name : ""}
          />
          <TextField
          id="outlined-basic"
          variant="outlined"
          value={poster}
          onChange={(event) => {setPoster(event.target.value);handleChange()}}
          type="text"
          name="poster"
          label="Enter Movie Poster URL"
          className="input-text"
          helperText={touched.poster && errors.poster ? errors.poster : ""}
          />
          <TextField
          id="outlined-basic"
          variant="outlined"
          value={rating}
          onChange={(event) => {setRating(event.target.value);handleChange()}}
          type="text"
          name="rating"
          label="Enter Movie Rating"
          className="input-text"
          helperText={touched.rating && errors.rating ? errors.rating : ""}
          />
          <TextField
          id="outlined-basic"
          variant="outlined"
          value={summary}
          onChange={(event) => {setSummary(event.target.value);handleChange()}}
          type="text"
          name="summary"
          label="Enter Movie Summary"
          className="input-text"
          helperText={touched.summary && errors.summary ? errors.summary : ""}
          />
          <TextField
          id="outlined-basic"
          variant="outlined"
          value={trailer}
          onChange={(event) => {setTrailer(event.target.value);handleChange()}}
          type="text"
          name="trailer"
          label="Enter Movie Trailer URL"
          className="input-text"
          helperText={touched.trailer && errors.trailer ? errors.trailer : ""}
          />

          <Button variant="outlined">
          Add Movie
          </Button>
        </form>
      </div>
    </div>
  );
}
