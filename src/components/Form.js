import {
  Typography,
  Card,
  CardContent,
  Grid,
  TextField,
  Button,
  Container,
} from "@material-ui/core";
import React from "react";
function App() {
  return (
    <div>
      <Typography gutterBottom variant="h3" align="center">
        Contact Us
      </Typography>
      <Card style={{ maxWidth: 450, margin: "0 auto", padding: "20px 5px" }}>
        <CardContent>
          <form>
            <Grid container spacing={1}>
              <Grid xs={12} sm={6} item>
                <TextField
                  fullWidth
                  placeholder="Enter your first name"
                  margin="normal"
                  variant="outlined"
                  color="secondary"
                  label="First Name"
                  required
                />
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField
                  fullWidth
                  placeholder="Enter your last name"
                  margin="normal"
                  variant="outlined"
                  color="secondary"
                  label="Last Name"
                  required
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  fullWidth
                  placeholder="Enter your email"
                  margin="normal"
                  variant="outlined"
                  color="secondary"
                  label="Your Email"
                  type="email"
                  required
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  fullWidth
                  placeholder="Enter your phone"
                  margin="normal"
                  variant="outlined"
                  color="secondary"
                  label="Your Phone"
                  type="number"
                  required
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  fullWidth
                  placeholder="Type your message"
                  margin="normal"
                  variant="outlined"
                  color="secondary"
                  label="Your Message"
                  multiline
                  rows={4}
                  required
                />
              </Grid>
              <Grid xs={12} item>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
