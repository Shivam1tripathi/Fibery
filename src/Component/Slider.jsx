import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Responsive() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };
  return (
    <div className="slider-container mb-40">
      <Slider {...settings}>
      <div className="ml-12" >
         <img className="w-64 h-40" src="Images/invantors/inventor1.jpeg" alt="" />
        </div>
        <div className="ml-12" >
        <img className="w-64 h-40" src="Images/invantors/inventor2.jpg" alt="" />
        </div>
        <div className="ml-12">
        <img className="w-64 h-40" src="Images/invantors/inventor3.jpg" alt="" />
        </div>
        <div className="ml-12">
        <img className="w-64 h-40" src="Images/invantors/inventor4.jpg" alt="" />
        </div>
        <div className="ml-12">
        <img className="w-64 h-40" src="Images/invantors/inventor5.jpeg" alt="" />
        </div>
      </Slider>
    </div>

  );
}

export default Responsive;
