import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import One from "../../img/1.png";
import Two from "../../img/2.png";
import Three from "../../img/3.png";
import Four from "../../img/4.png";
import Five from "../../img/5.png";
import "swiper/css";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio">
      {/* {heading} */}
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* {Slider} */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={One} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Two} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Three} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Four} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Five} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
