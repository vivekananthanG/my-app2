import "./App.css";
import { useState, useEffect } from "react";
import {
  Switch,
  Route,
  useHistory,
  Redirect,
} from "react-router-dom";
import Button from "@mui/material/Button";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Paper from "@mui/material/Paper";
import { AddColor } from "./AddColor";
import { NotFound } from "./NotFound";
import { AddMovie } from "./AddMovie";
import { MovieDetails } from "./MovieDetails";
import { BasicSpeedDial } from "./BasicSpeedDial";
import { TicTacToe } from "./TicTacToe";
import { MovieList } from "./MovieList";

export const actions = [
  { icon: <FileCopyIcon />, name: "Copy" },
  { icon: <SaveIcon />, name: "Save" },
  { icon: <PrintIcon />, name: "Print" },
  { icon: <ShareIcon />, name: "Share" },
];

function App() {
  const history4 = useHistory();
  const [mode, setMode] = useState("light");



  const theme1 = createTheme({
    palette: {
      mode: mode,
    },
  });

  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    fetch("https://61c412bef1af4a0017d99275.mockapi.io/movies", {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mvs) => setMovieList(mvs))
      .catch((err) => {
        console.log(err);
      });
  }, []);

 

  return (
    <ThemeProvider theme={theme1}>
      <Paper sx={{ minHeight: "100vh", borderRadius: 0 }} elevation={3}>
        {/* <context.Provider value={obj}> */}
        <div className="App">
          {/* <Header /> */}

          <AppBar className="static">
            <Toolbar className="header1">
              <Button color="inherit" onClick={() => history4.push("/")}>
                Home
              </Button>
              <Button color="inherit" onClick={() => history4.push("/movies")}>
                Movies
              </Button>
              <Button color="inherit" onClick={() => history4.push("/films")}>
                Films
              </Button>
              <Button
                color="inherit"
                onClick={() => history4.push("/movie/add")}
              >
                Add Movie
              </Button>
              <Button
                color="inherit"
                onClick={() => history4.push("/colorgame")}
              >
                Color Game
              </Button>
              <Button color="inherit" onClick={() => history4.push("/game")}>
                TicTacToe
              </Button>
              {/* <IconButton sx={{ ml: 1 }}  color="inherit" onClick={()=>setTheme(theme === "light" ? "dark" : "light")}>
        {theme === "light" === 'dark' ? <Brightness4Icon /> : <Brightness7Icon />  }
        </IconButton> */}
              <Button
                color="inherit"
                sx={{marginLeft: "auto"}}
                onClick={() => setMode(mode === "light" ? "dark" : "light")}
              >
                {" "}
                {mode === "light" ? (
                  <Brightness7Icon />
                ) : (
                  <Brightness4Icon />
                )}{" "}
              </Button>
            </Toolbar>
          </AppBar>

          {/* <MenuLink /> */}
          <section className="router1">
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
                <MovieList movieList={movieList} setMovieList={setMovieList}/>
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
              <Route path="**">
                <NotFound />
              </Route>
            </Switch>
          </section>
        </div>
        {/* </context.Provider> */}
      </Paper>
    </ThemeProvider>
  );
}

export default App;


