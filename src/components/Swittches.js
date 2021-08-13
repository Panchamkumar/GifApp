import {
  Container,
  Box,
  Paper,
  Switch,
  FormControlLabel,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: "100vh",
    backgroundColor: theme.palette.grey[200],
    paddingTop: theme.spacing(5),
  },
}));
function App() {
  const classes = useStyles();
  const [autoplay, setAutoplay] = useState(false);

  return (
    <Container className={classes.root}>
      <Paper component={Box} width="30%" p={4} mx="auto">
        <Typography color="secondary" variant="h4" align="center">
          Hello Switches
        </Typography>
        <Typography>
          {autoplay ? "play all videos" : "stop all videos"}
        </Typography>
        <FormControlLabel
          label="auto play"
          control={<Switch onChange={(e) => setAutoplay(e.target.checked)} />}
        />
      </Paper>
    </Container>
  );
}

export default App;
