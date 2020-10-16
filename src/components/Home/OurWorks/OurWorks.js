import React, { useEffect, useState } from "react";
import carousel1 from "../../../images/carousel-1.png";
import carousel2 from "../../../images/carousel-2.png";
import carousel3 from "../../../images/carousel-3.png";
import carousel4 from "../../../images/carousel-4.png";
import carousel5 from "../../../images/carousel-5.png";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const OurWorks = () => {
  return (
    <section className="work-container pb-5 mb-5">
      <div className="slider-bg d-none d-sm-block">
        <div className="container pt-5">
          <h3 className="text-center text-white mb-5">
            Here are some of <span style={{ color: "#7AB259" }}>our works</span>
          </h3>
          <Swiper
            spaceBetween={15}
            slidesPerView={3}
            navigation
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            loop={true}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <img
                style={{ height: "240px", width: "240px" }}
                className="img-fluid"
                src={carousel1}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                style={{ height: "240px", width: "240px" }}
                className="img-fluid"
                src={carousel2}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                style={{ height: "240px", width: "240px" }}
                className="img-fluid"
                src={carousel3}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                style={{ height: "240px", width: "240px" }}
                className="img-fluid"
                src={carousel4}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                style={{ height: "240px", width: "240px" }}
                className="img-fluid"
                src={carousel5}
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default OurWorks;
// {
//   workList.map((work) => <WorksList key={work.id} work={work}></WorksList>);
// }
