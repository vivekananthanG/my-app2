import { useState } from "react";
import { useHistory } from "react-router-dom";
import Rating from "@mui/material/Rating";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Card from "@mui/material/Card";
import InfoIcon from "@mui/icons-material/Info";
import { Counter } from "./Counter";
import EditIcon from '@mui/icons-material/Edit';

export function Movie({ name, poster, rating, summary, deleteButton, id }) {
  const history1 = useHistory();
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const styles = rating >= 8.5 ? { color: "green" } : { color: "red" };
  return (
    <Card className="Card">
      <img src={poster} alt={name} className="Card-poster" />
      <div className="Card-specs">
        <h4 className="Card-name">
          {name}
        </h4>
        <p style={styles} className="Card-rating">
          ⭐{rating}
        </p>
      </div>
      {/* <Button variant="contained" onClick={() => setShow(!show)}>Toggle dessciption</Button>
            {show ? <p className="Card-summ">{summary}</p> : ""} */}
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Summary
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{summary}</Typography>
        </AccordionDetails>
      </Accordion>
      <div className="movie-actions">
      <IconButton
            onClick={() => history1.push(`/movies/${id}`)}
            color="primary"
            aria-label="movie details"
          >
            <InfoIcon />
          </IconButton>
        <Counter />
        <IconButton
        color="primary"
        onClick={() => history1.push(`/movie/edit/${id}`)}
        aria-label="Edit movie"
      >
        <EditIcon />
      </IconButton>
        {deleteButton}
      </div>
      <div className="rate">
        Rate Movie:
        <Rating
          name="customized-10"
          defaultValue={rating}
          max={10}
          size="Large" />
      </div>
    </Card>
  );
}
