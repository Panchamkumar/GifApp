import {
  Paper,
  Container,
  makeStyles,
  Typography,
  Box,
  Table,
  TableContainer,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@material-ui/core";
import axios from "axios";
import React, { useState, useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: "100vh",
    backgroundColor: theme.palette.grey[300],
  },
}));

function App() {
  const classes = useStyles();
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    setUsers(res.data);
  };

  useEffect(() => {
    loadUsers();
  }, []);
  return (
    <Container className={classes.root}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Company</TableCell>
              <TableCell>Website</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {user.map((user) => {
              <TableRow>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>{user.Companany.name}</TableCell>
                <TableCell>{user.website}</TableCell>
              </TableRow>;
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default App;
