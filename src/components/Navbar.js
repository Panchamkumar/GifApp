import {
  Typography,
  makeStyles,
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Menu,
  MenuItem,
} from "@material-ui/core";
import React, { Fragment } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import MoreIcon from "@material-ui/icons/MoreVert";
const useStyles = makeStyles((theme) => ({
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
}));

function Navbar() {
  const classes = useStyles();
  const mobileMenu = (
    <Menu>
      <MenuItem component={Link} to="/">
        Home
      </MenuItem>
      <MenuItem component={Link} to="/">
        About
      </MenuItem>
      <MenuItem component={Link} to="/">
        COntact
      </MenuItem>
    </Menu>
  );
  return (
    <Fragment>
      <AppBar color="secondary">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Hello
          </Typography>
          <div className={classes.sectionDesktop}>
            <Button color="inherit" component={Link} to="/">
              Home
            </Button>
            <Button color="inherit" component={Link} to="/About">
              About Us
            </Button>
            <Button color="inherit" component={Link} to="/Contact">
              Contact Us
            </Button>
          </div>
          <IconButton color="inherit">
            <MoreIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      {mobileMenu}
    </Fragment>
  );
}

export default Navbar;
