import {
  Typography,
  // Card,
  // CardContent,
  Grid,
  // TextField,
  Paper,
  Button,
  Container,
  Box,
} from "@material-ui/core";
import React from "react";
function App() {
  return (
    <Container>
      <Grid container spacing={4}>
        <Grid item lg={3} md={6} sm={6}>
          <Paper component={Box} p={3}>
            <Typography variant="h5">Read Docs</Typography>
            <Typography variant="subtitle1">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </Typography>
            <Button>Read More</Button>
          </Paper>
        </Grid>
        <Grid item lg={3} md={6} sm={6}>
          <Paper component={Box} p={3}>
            <Typography variant="h5">Read Docs</Typography>
            <Typography variant="subtitle1">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </Typography>
            <Button>Read More</Button>
          </Paper>
        </Grid>
        <Grid item lg={3} md={6} sm={6}>
          <Paper component={Box} p={3}>
            <Typography variant="h5">Read Docs</Typography>
            <Typography variant="subtitle1">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </Typography>
            <Button>Read More</Button>
          </Paper>
        </Grid>
        <Grid item lg={3} md={6} sm={6}>
          <Paper component={Box} p={3}>
            <Typography variant="h5">Read Docs</Typography>
            <Typography variant="subtitle1">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </Typography>
            <Button>Read More</Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
