import './App.css';
import { useState,createContext,useContext } from "react";
import { Switch, Route, useHistory, Redirect, useParams } from "react-router-dom";
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
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import Badge from '@mui/material/Badge';
import Card from '@mui/material/Card';
import InfoIcon from '@mui/icons-material/Info';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';
//import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const context = createContext({ state: 40 });



//const pages = ['Movies', 'Category', 'Blog'];
//const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const actions = [
  { icon: <FileCopyIcon />, name: 'Copy' },
  { icon: <SaveIcon />, name: 'Save' },
  { icon: <PrintIcon />, name: 'Print' },
  { icon: <ShareIcon />, name: 'Share' },
];


function App() {


  const initial_movies = [
    {
      name: "RRR",
      poster:
        "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
      rating: 8.8,
      summary:
        "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
      trailer: "https://www.youtube.com/embed/f_vbAtFSEc0"
    },
    {
      name: "Iron man 2",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
      rating: 7,
      summary:
        "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
      trailer: "https://www.youtube.com/embed/wKtcmiifycU"
    },
    {
      name: "No Country for Old Men",
      poster:
        "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
      rating: 8.1,
      summary:
        "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
      trailer: "https://www.youtube.com/embed/38A__WT3-o0"
    },
    {
      name: "Jai Bhim",
      poster:
        "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
      summary:
        "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
      rating: 8.8,
      trailer: "https://www.youtube.com/embed/nnXpbTFrqXA"
    },
    {
      name: "The Avengers",
      rating: 8,
      summary:
        "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
      poster:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
      trailer: "https://www.youtube.com/embed/eOrNdBpGMv8"
    },
    {
      name: "Interstellar",
      poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
      rating: 8.6,
      summary:
        "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
      trailer: "https://www.youtube.com/embed/zSWdZVtXT7E"
    },
    {
      name: "Baahubali",
      poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
      rating: 8,
      summary:
        "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
      trailer: "https://www.youtube.com/embed/sOEg_YZQsTI"
    },
    {
      name: "Ratatouille",
      poster:
        "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
      rating: 8,
      summary:
        "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
      trailer: "https://www.youtube.com/embed/NgsQ8mVkN8w"
    }
  ];

  const [theme, setTheme] = useState("black");
  const obj = { theme: theme, setTheme: setTheme };
  const styles = { background: theme === "light" ? "black" : "white",color: !(theme === "light") ? "black" : "white" };

  const [movieList, setMovieList] = useState(initial_movies);

  const deleteMovie = (index) => {
    const deleteIndex = index;
    const remainingMovies = movieList.filter((mv, idx) => deleteIndex !== idx);
    setMovieList(remainingMovies);
  }
  
  return (
    <context.Provider value={obj}>
    <div style={styles} className="App">

      {/* <Header /> */}
     <Header />
      {/* <MenuLink /> */}
      <section className='router1'>
        <Switch>
          <Route exact path="/">
            <h1>Welcome to Movie app 😊😊😊!!!</h1>
          </Route>
          <Route path="/films">
            <Redirect to="/movies" />
          </Route>
          <Route path="/movies/:id">
            <MovieDetails movieList={movieList} />
          </Route>
          <Route path="/movie/add">
            <AddMovie movieList={movieList} setMovieList={setMovieList} />
          </Route>
          <Route path="/movies">
            <div className="movie-list">
              {movieList.map(({ name, poster, rating, summary }, i) => (
                <Movie
                  key={i}
                  deleteButton={<Button variant="contained" startIcon={<DeleteIcon />} color="error" onClick={() => deleteMovie(i)}>Delete</Button>}
                  name={name}
                  poster={poster}
                  rating={rating}
                  summary={summary}
                  id={i}
                />
              ))}
            </div>
            <div className="positiond">
              <BasicSpeedDial />
            </div>
          </Route>
          <Route path="/colorgame">
            <AddColor />
          </Route>
          <Route path="/game">
            <TicTacToe />
          </Route>
          <Route path="**"><NotFound /></Route>

        </Switch>
      </section>
    </div>
    </context.Provider>
  );
}

export default App;

function Header(){
  const { theme, setTheme } = useContext(context);
  const styles = !(theme === "light") ? "primary" : "error";
  const history4 = useHistory();
  return( <div>
    <AppBar color={styles} className="static">
      <Toolbar className='header1'>
        <Button color='inherit' onClick={() => history4.push("/")}>Home</Button>
        <Button color='inherit' onClick={() => history4.push("/movies")}>Movies</Button>
        <Button color='inherit' onClick={() => history4.push("/films")}>Films</Button>
        <Button color='inherit' onClick={() => history4.push("/movie/add")}>Add Movie</Button>
        <Button color='inherit' onClick={() => history4.push("/colorgame")}>Color Game</Button>
        <Button color='inherit' onClick={() => history4.push("/game")}>TicTacToe</Button>
        <IconButton sx={{ ml: 1 }}  color="inherit" onClick={()=>setTheme(theme === "light" ? "dark" : "light")}>
        {theme === "light" === 'dark' ? <Brightness4Icon /> : <Brightness7Icon />  }
        </IconButton>
      </Toolbar>
    </AppBar>
  </div>);
}

function TicTacToe() {
  const { width, height } = useWindowSize();
  const init = Array(9).fill(null);
  const [board, setBoard] = useState(init);
  //X starts the turn so true 

  const [isXturn, setIsXTurn] = useState(true);


  const handleClick = (index) => {
    //update only untouched box
    //falsy logic
    //no winner and no null
    if (!winner && !board[index]) {
      const boardCopy = [...board];
      boardCopy[index] = isXturn ? "X" : "O";
      setBoard(boardCopy);
      setIsXTurn(!isXturn);
    }
  };


  function decideWinner(board) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      console.log(board[a], board[b], board[c]);
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        console.log("winner is", board[a]);
        return board[a];
      }
    }
    //when no winner
    return null;
  };


  const winner = decideWinner(board);
  console.log(winner)

  let status;
  if (winner) {
    status = 'Winner is : ' + winner;
  } else {
    status = 'Next player: ' + (isXturn ? "X" : "O");
  }



  return (
    <div className='container'>
      {winner ? <Confetti width={width} height={height} gravity={0.03} /> : ""}
      <div>{status}
        <Button type="button" className="btn" onClick={() => { setBoard(init) }}>Reset</Button>

      </div>
      <div className='grid'>
        {board.map((val, index) => (<GameBox key={index} val={val} onPlayerClick={() => handleClick(index)} />))}
      </div>
      {winner ? <h2>The winner is {winner}</h2> : ""}
    </div>
  );
}

function GameBox({ val, onPlayerClick }) {

  const styles = { color: val === "X" ? "green" : "red" }

  return (
    <div style={styles} onClick={() => onPlayerClick()} className='game-box'>
      {val}
    </div>);
}

function MovieDetails({ movieList }) {
  const { id } = useParams();
  const movie = movieList[id];
  const history2 = useHistory();

  return (
    <div>
      <iframe width="100%"
        height="530"
        src={movie.trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
      <div className='movie-details-container'>
        <div className='movie-spec'>
          <h3 className='movie-name'>{movie.name}</h3>
          <p className='movie-rating'>⭐{movie.rating}</p>
        </div>
        <p className='movie-summary'>{movie.summary}</p>
        <Button variant="outlined" startIcon={<ArrowBackIosIcon />} onClick={() => history2.goBack()}>BACK</Button>
      </div>
    </div>
  );
}


function AddMovie({ movieList, setMovieList }) {
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const history = useHistory();
  const { theme } = useContext(context);
  const styles = {background:(theme === "light") ? "white" : ""};

  return (<div className="container">
    <div className="add-movie-form">
      <h2>Add a Movie</h2>
      <TextField id="outlined-basic" variant="outlined" style={styles}

        onChange={(event) => setName(event.target.value)}
        value={name}
        type="text"
        name="name"
        label="Enter Movie Name"
        className="input-text"
      />
      <TextField id="outlined-basic" variant="outlined" style={styles}
        value={poster}
        onChange={(event) => setPoster(event.target.value)}
        type="text"
        name="poster"
        label="Enter Movie Poster URL"
        className="input-text"
      />
      <TextField id="outlined-basic" variant="outlined" style={styles}

        value={rating}
        onChange={(event) => setRating(event.target.value)}
        type="text"
        name="rating"
        label="Enter Movie Rating"
        className="input-text"
      />
      <TextField id="outlined-basic" variant="outlined" style={styles}

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
        history.push("/movies");
      }
      }
      >
        Add Movie
      </Button>


    </div>
  </div>);
}


function NotFound() {
  return (
    <div className='not-found'>
      <h2>404</h2>
      <img alt='' src='https://webartdevelopers.com/blog/wp-content/uploads/2020/02/404-Error-Page-Caveman-Mode-Pure-CSS.gif' className='not-found-img'></img>
    </div>
  );
}

// function MenuLink() {
//   return (
//     <nav>
//       <Link to="/">Home</Link>
//       <Link to="/movies">Movies</Link>
//       <Link to="/movie/add">Add Movie</Link>
//       <Link to="/colorgame">Color game</Link>
//     </nav>
//   );
// }

// function Header() {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };
//   return (
//     <div className='header1'>

//       <AppBar position="static">
//         <Container maxWidth="xl">
//           <Toolbar disableGutters>
//             <Typography
//               variant="h6"
//               noWrap
//               component="div"
//               sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
//             >
//               <img
//                 src="https://4.bp.blogspot.com/-mL98KmcE8Kk/XMv9jXDde0I/AAAAAAAAACk/DqKziD6eVrYFGU14tmS1r6QXUFaGZkEtQCK4BGAYYCw/s1600/JPEG%2BLOGO.jpg"
//                 alt="header"
//               />
//             </Typography>

//             <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//               <IconButton
//                 size="large"
//                 aria-label="account of current user"
//                 aria-controls="menu-appbar"
//                 aria-haspopup="true"
//                 onClick={handleOpenNavMenu}
//                 color="inherit"
//               >
//                 <MenuIcon />
//               </IconButton>
//               <Menu
//                 id="menu-appbar"
//                 anchorEl={anchorElNav}
//                 anchorOrigin={{
//                   vertical: 'bottom',
//                   horizontal: 'left',
//                 }}
//                 keepMounted
//                 transformOrigin={{
//                   vertical: 'top',
//                   horizontal: 'left',
//                 }}
//                 open={Boolean(anchorElNav)}
//                 onClose={handleCloseNavMenu}
//                 sx={{
//                   display: { xs: 'block', md: 'none' },
//                 }}
//               >
//                 {pages.map((page) => (
//                   <MenuItem key={page} onClick={handleCloseNavMenu}>
//                     <Typography textAlign="center">{page}</Typography>
//                   </MenuItem>
//                 ))}
//               </Menu>
//             </Box>
//             <Typography
//               variant="h6"
//               noWrap
//               component="div"
//               sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
//             >
//               LOGO
//             </Typography>
//             <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//               {pages.map((page) => (
//                 <Button
//                   key={page}
//                   onClick={handleCloseNavMenu}
//                   sx={{ my: 2, color: 'white', display: 'block' }}
//                 >
//                   {page}
//                 </Button>
//               ))}
//             </Box>

//             <Box sx={{ flexGrow: 0 }}>
//               <Tooltip title="Open settings">
//                 <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                   <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
//                 </IconButton>
//               </Tooltip>
//               <Menu
//                 sx={{ mt: '45px' }}
//                 id="menu-appbar"
//                 anchorEl={anchorElUser}
//                 anchorOrigin={{
//                   vertical: 'top',
//                   horizontal: 'right',
//                 }}
//                 keepMounted
//                 transformOrigin={{
//                   vertical: 'top',
//                   horizontal: 'right',
//                 }}
//                 open={Boolean(anchorElUser)}
//                 onClose={handleCloseUserMenu}
//               >
//                 {settings.map((setting) => (
//                   <MenuItem key={setting} onClick={handleCloseNavMenu}>
//                     <Typography textAlign="center">{setting}</Typography>
//                   </MenuItem>
//                 ))}
//               </Menu>
//             </Box>
//           </Toolbar>
//         </Container>
//       </AppBar>

//     </div>
//   );
// }

function Movie({ name, poster, rating, summary, deleteButton, id }) {
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
        <h3 className="Card-name">{name} <IconButton onClick={() => history1.push(`/movies/${id}`)} color="primary" aria-label="movie details"><InfoIcon /></IconButton></h3>
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
    </Card>
  );
}


function Counter() {
  const [like, setLike] = useState(0);
  const [dislike, setDisLike] = useState(0);
  return (
    <div className="counter-container">

      <IconButton color="primary" onClick={() => setLike(like + 1)} aria-label="like movie">
        <Badge badgeContent={like} color="primary">
          👍
        </Badge>
      </IconButton>

      <IconButton color="error" onClick={() => setDisLike(dislike + 1)} aria-label="Dislike movie">
        <Badge badgeContent={dislike} color="error">
          👎
        </Badge>
      </IconButton>

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

function AddColor() {
  const [color, setColor] = useState("pink");
  const styles = { background: color };
  const [colorList, setColorList] = useState(["teal", "crimson", "orange"]);
  return (
    <div>
      <input
        value={color}
        onChange={(event) => setColor(event.target.value)}
        style={styles}
        placeholder="Enter a color"
      />
      {/*create a copy of colorlist and the new color to it as we must not chnage colorlist   */}
      <button onClick={() => setColorList([...colorList, color])}>
        Add Color
      </button>

      {colorList.map((clr) => (
        <ColorBox clr={clr} />
      ))}
    </div>
  );
}

function ColorBox({ clr }) {
  const styles = {
    height: "25px",
    width: "250px",
    background: clr,
    marginTop: "10px"
  };
  return <div style={styles}></div>;
}