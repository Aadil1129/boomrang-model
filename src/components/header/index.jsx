import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../sidebar";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import LogoutIcon from "@mui/icons-material/Logout";
function Index() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <nav id="navbar" className="navbar navbar-light  fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" style={{ color: "white" }}>
          Boomerang
        </Link>
        <div className="element-display">
          <Link className="navbar-element" to="/">
            Home
          </Link>
          <Link className="navbar-element" to="/about">
            About
          </Link>
          <Link className="navbar-element" to="/designe">
            Card
          </Link>
          <Link className="navbar-element" to="/style">
            Creative
          </Link>
          <Link className="navbar-element" to="/slider">
            Nature
          </Link>
          <Link className="navbar-element" to="/vacation">
            Vacation
          </Link>
        </div>
        <div>
          <Button variant="contained" color="primary" onClick={handleClickOpen}>
            Sign In
            <LogoutIcon />
          </Button>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogActions>
              <Button variant="contained" color="warning" onClick={handleClose}>
                Back
              </Button>
            </DialogActions>
          </Dialog>
        </div>
        <Sidebar />
      </div>
    </nav>
  );
}

export default Index;
