import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DummySlider = () => {
  const Settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Slider {...Settings}>

      <div>
        <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/3c4df1bcf25b7565.jpg?q=20" alt="1"></img>
      </div>
     
      <div>
        <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/9a7a08792fde010f.jpg?q=20" alt="2"></img>
      </div>
      <div>
        <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/bd94c9e6358f3a70.jpg?q=20" alt="3"></img>
      </div>
      <div>
        <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/efc2678b65ca1390.jpg?q=20" alt="4"></img>
      </div>
      <div>
        <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/e6b74ca3aaaf383d.jpg?q=20" alt="5"></img>
      </div>
      <div>
        <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/77fe2b5fc42b091c.jpg?q=20" alt="6"></img>
      </div>
    </Slider>
  );
};

export default DummySlider;
