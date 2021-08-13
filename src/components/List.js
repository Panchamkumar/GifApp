import {
  Container,
  Box,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Collapse,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: "100vh",
    backgroundColor: theme.palette.grey[200],
    paddingTop: theme.spacing(5),
  },
  sidebar: {
    position: "fixed",
    left: 0,
    top: 0,
    width: "20%",
    height: "100%",
    borderRadius: 0,
  },
  nestedItem: {
    paddingLeft: theme.spacing(8),
  },
}));
function App() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <Container className={classes.root}>
      <Paper component={Box} boxShadow={4} pt={0} className={classes.sidebar}>
        <List disablePadding>
          <ListItem button>
            <ListItemIcon>{<PlayCircleOutlineIcon />}</ListItemIcon>
            <ListItemText
              primary={
                <Typography variant="h4" color="primary">
                  Getting Started
                </Typography>
              }
              secondary="start learning"
            />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary="Components" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Components API" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Styles" />
          </ListItem>

          <Collapse in={open}>
            <List disablePadding>
              <ListItem className={classes.nestedItem} button>
                <ListItemText>Nested Item 1</ListItemText>
              </ListItem>
              <ListItem className={classes.nestedItem} button>
                <ListItemText>Nested Item 2</ListItemText>
              </ListItem>
              <ListItem className={classes.nestedItem} button>
                <ListItemText>Nested Item 3</ListItemText>
              </ListItem>
              <ListItem className={classes.nestedItem} button>
                <ListItemText>Nested Item 4</ListItemText>
              </ListItem>
            </List>
          </Collapse>
        </List>
      </Paper>
    </Container>
  );
}

export default App;
