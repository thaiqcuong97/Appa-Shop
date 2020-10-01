import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Slide({ products }: any) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 50000,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <section className="slide">
      <Slider {...settings}>
        {
          products.slides.map((item: any, index: number) => (
            <div className="slide__container" key={index}>
              <figure className="slide__container--image">
                <img src={item.img} alt="slide home" />
              </figure>
              <div className="slide__container--content">
                <div className="content__trademark"></div>
                <div className="content__title"></div>
                <div className="content__text"></div>
              </div>
            </div>
          ))
        }
      </Slider>
    </section>
  );
}

export default Slide;