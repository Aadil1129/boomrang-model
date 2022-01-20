import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Typography from "@mui/material/Typography";

export default function LocationComponent({ item }) {
  const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
      color: "#ff6d75",
    },
    "& .MuiRating-iconHover": {
      color: "#ff3d47",
    },
  });
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="card-component-box">
      <i id="icons" className={item.icon}></i>
      <img className="digital-cards-image" src={item.image} alt="index" />
      <Box
        sx={{
          "& > legend": { mt: 2 },
        }}
      >
        <Typography
          component="legend"
          style={{
            fontSize: "16px",
            fontWeight: "bold",
            fontFamily: "sans-serif",
          }}
        >
          Rating
        </Typography>
        <StyledRating
          name="customized-color"
          defaultValue={2}
          getLabelText={value => `${value} Heart${value !== 1 ? "s" : ""}`}
          icon={
            <FavoriteIcon fontSize="inherit" style={{ fontSize: "1.4rem" }} />
          }
          emptyIcon={
            <FavoriteBorderIcon
              fontSize="inherit"
              style={{ fontSize: "1.4rem" }}
            />
          }
        />
      </Box>
      <div className="location-heading">{item.title}</div>
      <p className="card-component-para">{item.title2}</p>
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        style={{
          border: "none",
          color: "#5764fd",
          fontWeight: "bold",
        }}
      >
        Read More
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          id="alert-dialog-title"
          style={{
            fontSize: "16px",
            fontWeight: "bold",
            textAlign: "center",
            fontFamily: "sans-serif",
          }}
        >
          {item.title}
        </DialogTitle>
        <img
          className="digital-cards-image"
          src={item.image}
          alt="index"
          style={{ width: "50%", margin: "auto" }}
        />
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
