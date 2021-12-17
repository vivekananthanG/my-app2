import './App.css';
import { useState } from "react";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Rating from '@mui/material/Rating';
import TextField from '@mui/material/TextField';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';

const pages = ['Movies', 'Category', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const actions = [
  { icon: <FileCopyIcon />, name: 'Copy' },
  { icon: <SaveIcon />, name: 'Save' },
  { icon: <PrintIcon />, name: 'Print' },
  { icon: <ShareIcon />, name: 'Share' },
];

function App() {


  const initial_movies = ([
    {
      name: "Iron man 2",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
      rating: 7,
      summary:
        "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy."
    },
    {
      name: "No Country for Old Men",
      poster:
        "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
      rating: 8.1,
      summary:
        "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money."
    },
    {
      name: "Jai Bhim",
      poster:
        "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
      summary:
        "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
      rating: 8.8
    },
    {
      name: "The Avengers",
      rating: 8,
      summary: `Marvel's The Avengers (classified under the name Marvel Avengers
        Assemble in the United Kingdom and Ireland), or simply The Avengers, is
        a 2012 American superhero film based on the Marvel Comics superhero team
        of the same name.`,
      poster:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg"
    }
  ]);

  const [movieList, setMovieList] = useState(initial_movies);
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  return (
    <div className="App">
      <Header />

      <div className="container">
        <div className="add-movie-form">
          <h2>Add a Movie</h2>
          <TextField id="outlined-basic" variant="outlined"

            onChange={(event) => setName(event.target.value)}
            value={name}
            type="text"
            name="name"
            label="Enter Movie Name"
            className="input-text"
          />
          <TextField id="outlined-basic" variant="outlined"
            value={poster}
            onChange={(event) => setPoster(event.target.value)}
            type="text"
            name="poster"
            label="Enter Movie Poster URL"
            className="input-text"
          />
          <TextField id="outlined-basic" variant="outlined"

            value={rating}
            onChange={(event) => setRating(event.target.value)}
            type="text"
            name="rating"
            label="Enter Movie Rating"
            className="input-text"
          />
          <TextField id="outlined-basic" variant="outlined"

            value={summary}
            onChange={(event) => setSummary(event.target.value)}
            type="text"
            name="summary"
            label="Enter Movie Summary"
            className="input-text"
          />
          <Button variant="outlined" onClick={() => {
            
            const newMovie = {
              name,
              poster,
              rating,
              summary
            };//short hand
            setMovieList([...movieList, newMovie]);
          }
          }
          >
            Add Movie
          </Button>
  

        </div>
      </div>

      <div className="movie-list">
        {movieList.map(({ name, poster, rating, summary }, i) => (
          <Movie
            key={i}
            deleteButton={<Button variant="contained" startIcon={<DeleteIcon />} color="error" onClick={() => {
              const deleteIndex = i;
              const remainingMovies = movieList.filter((mv, idx) => deleteIndex !== idx);
              setMovieList(remainingMovies);
            }}>Delete</Button>}
            name={name}
            poster={poster}
            rating={rating}
            summary={summary}
          />
        ))}
      </div>
      <div className="positiond">
      <BasicSpeedDial />
      </div>
    </div>
  );
}

export default App;

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <div className='header1'>
     
      <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
             <img
        src="https://4.bp.blogspot.com/-mL98KmcE8Kk/XMv9jXDde0I/AAAAAAAAACk/DqKziD6eVrYFGU14tmS1r6QXUFaGZkEtQCK4BGAYYCw/s1600/JPEG%2BLOGO.jpg"
        alt="header"
      />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>

    </div>
  );
}

function Movie({ name, poster, rating, summary, deleteButton }) {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const styles = rating >= 8.5 ? { color: "green" } : { color: "red" };
  return (
    <div className="Card">
      <img src={poster} alt={name} className="Card-poster" />
      <div className="Card-specs">
        <h3 className="Card-name">{name} </h3>
        <p style={styles} className="Card-rating">
          ⭐{rating}
        </p>
      </div>
      {/* <Button variant="contained" onClick={() => setShow(!show)}>Toggle dessciption</Button>
      {show ? <p className="Card-summ">{summary}</p> : ""} */}
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
          Toggle dessciption
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {summary}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <div className="movie-actions">
        <Counter />
        {deleteButton}
      </div>
      <div className="rate">
        Rate Movie:
        <Rating name="customized-10" defaultValue={rating} max={10} size="Large" />
      </div>
    </div>
  );
}


function Counter() {
  const [like, setLike] = useState(0);
  const [dislike, setDisLike] = useState(0);
  return (
    <div className="counter-container">
      <Button variant="contained" onClick={() => setLike(like + 1)}>
        {like}
        <span role="👍">👍</span>
      </Button>
      <Button variant="contained" onClick={() => setDisLike(dislike + 1)}>
        {dislike}
        <span role="👎">👎</span>
      </Button>
    </div>
  );
}

function BasicSpeedDial() {
  return (
    <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}