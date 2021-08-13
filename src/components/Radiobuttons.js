// import {
//     Container,
//     Typography,
//     Box,
//     Paper,
//     Radio,
//     RadioGroup,
//     FormControl,
//     FormLabel,
//     FormControlLabel,
//     makeStyles,
//     // Button,
//     // TextField,
//     // InputAdornment,
//   } from "@material-ui/core";
//   import { useState } from "react";
//   import React from "react";
//   // import AccountCircleIcon from "@material-ui/icons/AccountCircle";
//   // import EmailIcon from "@material-ui/icons/Email";
//   // import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";

//   const useStyles = makeStyles((theme) => ({
//     root: {
//       width: "100vw",
//       height: "100vh",
//       backgroundColor: theme.palette.grey[200],
//       paddingTop: theme.spacing(5),
//     },
//   }));
//   function App() {
//     const classes = useStyles();
//     const [gender, setGender] = useState("male");

//     const handleChange = (e) => {
//       setGender(e.target.value);
//     };
//     return (
//       <Container className={classes.root}>
//         <Paper component={Box} width="30%" p={4} mx="auto">
//           <Box component="form">
//             <FormControl>
//               <FormLabel>Choose Your Gender</FormLabel>

//               <RadioGroup value={gender} onChange={handleChange} row>
//                 <FormControlLabel label="male" control={<Radio />} value="male" />
//                 <FormControlLabel
//                   label="female"
//                   control={<Radio />}
//                   value="female"
//                 />
//                 <FormControlLabel
//                   label="other"
//                   control={<Radio />}
//                   value="other"
//                 />
//               </RadioGroup>
//             </FormControl>
//           </Box>
//         </Paper>
//       </Container>
//     );
//   }

//   export default App;
