import {
  Typography,
  makeStyles,
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  CssBaseline,
} from "@material-ui/core";
import React from "react";

import { MenuIcon } from "@material-ui/icons/Menu";
import "../App.css";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    marginRight: "auto",
  },
  content: {
    padding: theme.spacing(3),
  },
}));

function Drawer() {
  const classes = useStyles();
  return (
    <div>
      <CssBaseline />
      <AppBar>
        <Toolbar>
          <IconButton
            edge="start"
            className={Classes.menuButton}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={Classes.title}>
            Hello Drawer
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Drawer;
