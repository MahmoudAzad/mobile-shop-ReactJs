import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination, Navigation } from "swiper";
import { WeeklyAction } from "../redux/actions/weeklyAction";
import { Store } from "../redux/store/store";
import Loading from "../common/loading";
import { Link } from "react-router-dom";

export default function Weekly() {

  const [weekly, setWeekly] = useState("");

  useEffect(() => {

    const sendReq = async () => {
      await Store.dispatch(WeeklyAction());
      const data = await Store.getState().Weekly;
      setWeekly(data);
    }

    sendReq();
  }, [])




  const [swiperRef, setSwiperRef] = useState(null);

  let appendNumber = 4;
  let prependNumber = 1;

  const prepend2 = () => {
    swiperRef.prependSlide([
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
    ]);
  };

  const prepend = () => {
    swiperRef.prependSlide(
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>"
    );
  };

  const append = () => {
    swiperRef.appendSlide(
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>"
    );
  };

  const append2 = () => {
    swiperRef.appendSlide([
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
    ]);
  };


  if (!weekly) { return <Loading /> }
  console.log("weeksss => " , weekly);
  return (
    <>
      <div className="container mb-5 mt-5">
        <h4>Weekly deals</h4>
        <hr />
      </div>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={5}
        spaceBetween={0}

        // navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper container"
      >
        {weekly.map((week) => (

          <SwiperSlide className="weekly-carousel-container">
            <Link to={"/detailProduct/"+week.id}>
              <div className="weekly-carousel-item">
            <img src={`http://localhost:1337${week.img.url}`} />

            <div className="weekly-carousel-title-container">
              <h6 className="weekly-carousel-title">{week.title}</h6>
            </div>

            <div className="weekly-carousel-price-container">
              <span className="mr-2 weekly-carousel-price">{week.price}</span>
              <strike className="weekly-carousel-strike">{week.linedPrice}</strike>
            </div>
              </div>
              </Link>

          </SwiperSlide>
        ))}

      </Swiper>

    </>
  );
}
