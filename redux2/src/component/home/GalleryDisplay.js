import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const galleryDisplay = (props) => {
  const showGallery = ({ galleryArray }) => {
    if (galleryArray) {
      return (
        <Slider {...settings}>
          {galleryArray.map((item) => {
            return (
              <Link to="/" className="slider-item">
                <div
                  className="image"
                  style={{
                    background: `url(/images/galleries/${item.images[0].img})`,
                  }}
                ></div>
              </Link>
            );
          })}
        </Slider>
      );
    }
  };

  return (
    <div className="home-gallery">
      <h2>image galleryDisplay</h2>
      {showGallery(props)}
      <hr />
    </div>
  );
};

export default galleryDisplay;
