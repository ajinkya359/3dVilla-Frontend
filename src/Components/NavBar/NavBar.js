import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

export default function NavBar({setUpload}) {
  const handleUploadClick=()=>{
    setUpload(true)
  }
  const handleListClick=()=>{
    setUpload(false)
  }
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            3dVilla
          </Typography>
          <Button color="inherit" onClick={handleUploadClick}>
            Upload
          </Button>
          <Button color="inherit" onClick={handleListClick}>
            List
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
