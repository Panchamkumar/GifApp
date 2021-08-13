import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { CssBaseline } from "@material-ui/core";
import { Menu } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";
import TranslateIcon from "@material-ui/icons/Translate";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const language = ["English", "Hindi", "Bengali", "Bihari"]; // for access item
export default function ButtonAppBar() {
  const classes = useStyles();
  const [open, setOpen] = useState(null); // for open Button
  const [selectedIndex, setSelectedIndex] = useState(1); // for select item

  const handleOpen = (e) => setOpen(e.currentTarget); // handle openButton
  const handleClose = () => setOpen(false); // handle closeButton
  const handleSelect = (index) => {
    // for select item
    setSelectedIndex(index);
    handleClose();
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            HOME
          </Typography>
          <Button
            startIcon={<TranslateIcon />}
            endIcon={<KeyboardArrowDownIcon />}
            color="inherit"
            onClick={handleOpen}
          >
            {language[selectedIndex] || "language"}
          </Button>

          <Menu open={Boolean(open)} anchorEl={open} onClose={handleClose}>
            {language.map((item, index) => (
              <MenuItem onClick={() => handleSelect(index)}>{item}</MenuItem> // second way to access item
            ))}

            {/* <MenuItem onClick={handleClose}>English</MenuItem> // first way to access item
            <MenuItem onClick={handleClose}>Hindi</MenuItem>
            <MenuItem onClick={handleClose}>Bengali</MenuItem>
            <MenuItem onClick={handleClose}>Punjabi</MenuItem>
            <MenuItem onClick={handleClose}>Bihari</MenuItem> */}
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
}
