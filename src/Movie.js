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
        <h3 className="Card-name">
          {name}{" "}
          <IconButton
            onClick={() => history1.push(`/movies/${id}`)}
            color="primary"
            aria-label="movie details"
          >
            <InfoIcon />
          </IconButton>
        </h3>
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
            Toggle dessciption
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{summary}</Typography>
        </AccordionDetails>
      </Accordion>
      <div className="movie-actions">
        <Counter />
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
