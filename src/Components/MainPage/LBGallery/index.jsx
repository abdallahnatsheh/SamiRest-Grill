import React from "react";
import { Container } from "react-bootstrap";
import "./lbgallery.css";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Box from "@mui/material/Box";

/*
gallery component that the admin will be able to change it from his admin apnel
*/
const LBGallery = React.memo(function LBGallery(props) {
  return (
    <section className="photo-gallery" style={{ background: "#790a0a" }}>
      <Container className="container">
        <div className="intro" style={{ margin: "0 auto 40px" }}>
          <h2 className="text-center" style={{ color: "#d28d08" }}>
            {props.title.data().title ? props.title.data().title : "معرض الصور"}
          </h2>
          <p className="text-center" style={{ color: "rgb(255,255,255)" }}>
            {props.paragraph.data().paragraph
              ? props.paragraph.data().paragraph
              : "😍هنا يمكنك رؤية كل ما هو مميز ولذيذ في مطعمنا 😍 "}
          </p>
        </div>
        <Box sx={{ width: "100%", height: "100%" }}>
          <ImageList variant="masonry" cols={5} gap={5}>
            {props.gallery.map((item) => (
              <ImageListItem key={item.id}>
                <img
                  src={`${item.data().img}?w=248&fit=crop&auto=format`}
                  srcSet={`${
                    item.data().img
                  }?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.data().title}
                  key={item.id}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </Container>
    </section>
  );
});

export default LBGallery;
