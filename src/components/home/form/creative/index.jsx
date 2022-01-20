import React from "react";
import { Data, Data2 } from "./newData";
import CreatApi from "./creatApi";
import Button from "@mui/material/Button";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";

function Creative() {
  const moreImages = () => {
    return (
      <ImageList sx={{ width: 500, height: 450, zIndex: 2 }}>
        <ImageListItem key="Subheader" cols={2}></ImageListItem>
        {itemData.map(ite => (
          <ImageListItem key={ite.img}>
            <img
              src={`${ite.img}?w=248&fit=crop&auto=format`}
              srcSet={`${ite.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={ite.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={ite.title}
              subtitle={ite.author}
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`info about ${ite.title}`}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    );
  };
  return (
    <div className="creative-full-page">
      <div className="creative-top">
        <div className="creative-top-heading">Creative People.</div>
        <p className="creative-top-para">
          See how your users experience your website in realtime or view trends
          to see any changes in performance over time.
        </p>
      </div>
      <div className="creative-images-box">
        {Data.map((item, index) => (
          <CreatApi key={index} item={item} />
        ))}
      </div>
      <div className="creative-images-box">
        {Data2.map((item, index) => (
          <CreatApi key={index} item={item} />
        ))}
      </div>
      <div className="creative-button">
        <Button
          variant="contained"
          style={{ width: "20%" }}
          onClick={moreImages}
        >
          READ MORE
        </Button>
      </div>
    </div>
  );
}

export default Creative;
const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    author: "@bkristastucchio",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
    author: "@rollelflex_graphy726",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
    author: "@helloimnik",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    author: "@nolanissac",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    author: "@hjrc33",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
    author: "@tjdragotta",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
    author: "@katie_wasserman",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
    author: "@silverdalex",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
    author: "@shelleypauls",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
    author: "@peterlaster",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
    author: "@southside_customs",
    cols: 2,
  },
];
