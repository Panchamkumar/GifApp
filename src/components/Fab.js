import {
  // Typography,
  Card,
  // CardContent,
  // GPaper,
  Button,
  // TextField,
  //
  Container,
  Fab,
  makeStyles,
  Grid,
  CardMedia,
  CardContent,
  CardActionArea,
  CardActions,
  Typography,
  // Box,
} from "@material-ui/core";
import React, { useState, setUsers, useEffect } from "react";
import AddIcon from "@material-ui/icons/Add";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    // width: "100vw",
    // height: "100vh",
    backgroundColor: theme.palette.grey[300],
  },
  Add: {
    position: "fixed",
    bottom: "5%",
    right: "5%",
  },
}));
function App() {
  const classes = useStyles();
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    const result = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setUsers(result.data);
  };
  useEffect(() => {
    loadUsers();
  }, []);
  return (
    <Container className={classes.root}>
      <Fab color="primary" className={classes.Add} variant="extended">
        <AddIcon /> Create User
      </Fab>

      <Grid container justify="space-evenly">
        {users.map((user) => (
          <Grid tem sm={3}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image="https://jsonplaceholder.typicode.com/300x200/"
                />
                <CardContent>
                  <Typography variant="h6">{user.name}</Typography>
                  <Typography>{user.email}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default App;
