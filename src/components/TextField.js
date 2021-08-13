// import {
//   Container,
//   Typography,
//   Box,
//   Paper,
//   makeStyles,
//   Button,
//   TextField,
//   InputAdornment,
// } from "@material-ui/core";
// import React from "react";
// import AccountCircleIcon from "@material-ui/icons/AccountCircle";
// import EmailIcon from "@material-ui/icons/Email";
// import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: "100vw",
//     height: "100vh",
//     backgroundColor: theme.palette.grey[200],
//     paddingTop: theme.spacing(5),
//   },
// }));
// function App() {
//   const classes = useStyles();
//   return (
//     <Container className={classes.root}>
//       <Paper component={Box} width="30%" mx="auto" p={4}>
//         <Typography variant="h5">Create new account</Typography>

//         <Box component="form" mt={2}>
//           <TextField
//             fullWidth
//             placeholder="Enter your first name"
//             margin="normal"
//             variant="outlined"
//             color="secondary"
//             label="First Name"
//             InputProps={{
//               startAdornment: (
//                 <InputAdornment>
//                   <AccountCircleIcon color="secondary" />
//                 </InputAdornment>
//               ),
//             }}
//           />
//           <TextField
//             fullWidth
//             placeholder="Enter your last name"
//             margin="normal"
//             variant="outlined"
//             color="secondary"
//             label="Last Name"
//             InputProps={{
//               startAdornment: (
//                 <InputAdornment>
//                   <AccountCircleIcon color="secondary" />
//                 </InputAdornment>
//               ),
//             }}
//           />
//           <TextField
//             fullWidth
//             placeholder="Enter your last email"
//             margin="normal"
//             variant="outlined"
//             color="secondary"
//             label="Your Email"
//             InputProps={{
//               startAdornment: (
//                 <InputAdornment>
//                   <EmailIcon color="secondary" />
//                 </InputAdornment>
//               ),
//             }}
//           />
//           <TextField
//             fullWidth
//             placeholder="Enter your phone"
//             margin="normal"
//             variant="outlined"
//             color="secondary"
//             label="Your Phone"
//             InputProps={{
//               startAdornment: (
//                 <InputAdornment>
//                   <PhoneAndroidIcon color="secondary" />
//                 </InputAdornment>
//               ),
//             }}
//           />
//           <TextField
//             fullWidth
//             placeholder="Enter your last message"
//             margin="normal"
//             variant="outlined"
//             color="secondary"
//             label="your Message"
//             multiline
//             rows={4}
//             helperText="minimum 150 character"
//           />
//         </Box>

//         <Box mt={2}>
//           <Button variant="contained" color="secondary" fullWidth>
//             Sign Up
//           </Button>
//         </Box>
//       </Paper>
//     </Container>
//   );
// }

// export default App;

// ------------------------------------------------------------------------------------------------------------------
