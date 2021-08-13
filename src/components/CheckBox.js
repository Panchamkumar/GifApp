// import {
//   Container,
//   Box,
//   Paper,
//   Checkbox,
//   FormControlLabelClassKey,
//   FormControlLabel,
//   makeStyles,
//   FormControl,
//   Typography,
// } from "@material-ui/core";
// import React from "react";
// import { useState } from "react";

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
//   const [remember, setRemember] = useState(false);

//   const handleChange = (e) => {
//     setRemember(e.target.checked);
//   };
//   return (
//     <Container className={classes.root}>
//       <Paper component={Box} width="30%" p={4} mx="auto">
//         <Typography></Typography>
//         <Box component="form">
//           <FormControl>
//             <FormControlLabel
//               label="Keep me remember"
//               control={<Checkbox />}
//               onChange={handleChange}
//               checked={remember}
//             />
//           </FormControl>
//         </Box>
//       </Paper>
//     </Container>
//   );
// }

// export default App;
