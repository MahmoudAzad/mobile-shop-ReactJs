import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";
import { Fragment } from "react";
import ReactTooltip from "react-tooltip";
import { useParams } from "react-router";
import { getWeeklyById } from "../../services/webServices";


export default function App() {
  const { id } = useParams();
  const data = getWeeklyById(id);
  console.log("params =>", id);
  console.log("data deeet =>>>", data);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);


  var input = document.querySelector('#qty');
  var btnminus = document.querySelector('.qtyminus');
  var btnplus = document.querySelector('.qtyplus');

  if (input !== undefined && btnminus !== undefined && btnplus !== undefined && input !== null && btnminus !== null && btnplus !== null) {

    var min = Number(input.getAttribute('min'));
    var max = Number(input.getAttribute('max'));
    var step = Number(input.getAttribute('step'));

    function qtyminus(e) {
      var current = Number(input.value);
      var newval = (current - step);
      if (newval < min) {
        newval = min;
      } else if (newval > max) {
        newval = max;
      }
      input.value = Number(newval);
      e.preventDefault();
    }

    function qtyplus(e) {
      var current = Number(input.value);
      var newval = (current + step);
      if (newval > max) newval = max;
      input.value = Number(newval);
      e.preventDefault();
    }

    btnminus.addEventListener('click', qtyminus);
    btnplus.addEventListener('click', qtyplus);

  }


  return (
    <Fragment >
      <div className="product-detail-header container" >

        <div className="product-detail-title">
          <h5 className="container">
            {data.title}
          </h5>
        </div>

        <div className="product-detail-icons">
          <i class="fa fa-facebook mr-3 fa-lg detail-icon-facebook" aria-hidden="true"></i>
          <i class="fa fa-twitter mr-3 fa-lg detail-icon-twiteer" aria-hidden="true"></i>
          <i class="fa fa-instagram mr-3 fa-lg detail-icon-instagram" aria-hidden="true"></i>
          <i class="fa fa-pinterest-p mr-3 fa-lg detail-icon-pinterest" aria-hidden="true"></i>

        </div>

      </div>
      <hr className="container" />
      <div className="product-detail-container container">
        <div className="product-detail-carousel ">
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            // spaceBetween={10}
            // navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2 detail-swiper-gallery"
          >
            {data.imgs.map((img) => (
              <SwiperSlide>
                <img src={`http://localhost:1337${img.url}`} />
              </SwiperSlide>
            ))}


          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={true}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper detail-swiper-thumbnail"
          >

            {data.imgs.map((img) => (
              <SwiperSlide>
                <img src={`http://localhost:1337${img.url}`} />

              </SwiperSlide>
            ))}


          </Swiper>
        </div>

        <div className="product-detail-caption ">
          <div className="product-detail-price" >
            <h3>
              {data.price}
            </h3>
            <h6 className="product-detail-linedPrice">
              <strike>{data.linedPrice}</strike>
            </h6>
            <h6 className="product-detail-discount">
              {data.discount}
            </h6>
          </div>

          <br />
          <h6>Status:In stock</h6>
          <hr />
          <p>
            <div dangerouslySetInnerHTML={{ __html: data.description }}></div>
            {/* {data.description} */}
          </p>
          <hr />

          <div className="Quantity-container">

            <section>
              <form action="">
                <div class="qty">
                  <button class="qtyminus" aria-hidden="true"><i class="fa fa-minus fa-lg" aria-hidden="true"></i></button>
                  <input type="number" name="qty" id="qty" min="1" max="100" step="1" value="1" />
                  <button class="qtyplus" aria-hidden="true"><i class="fa fa-plus fa-lg" aria-hidden="true"></i></button>
                </div>
              </form>
            </section>

            <button className="Quantity-button">Add to cart</button>


            <div className="Quantity-icons">
              <i class="fa fa-heart-o fa-lg fa-2x Quantity-icon-heart" data-tip data-for="detail-heart-tooltip" aria-hidden="true"></i>
              <ReactTooltip id="detail-heart-tooltip" place="top" effect="solid">
                Add to wish list
              </ReactTooltip>
              <i class="fa fa-bar-chart fa-2x Quantity-icon-chart" data-tip data-for="detail-chart-tooltip" aria-hidden="true"></i>
              <ReactTooltip id="detail-chart-tooltip" place="top" effect="solid">
                Compare
              </ReactTooltip>
            </div>
          </div>

          <hr />

        </div>
      </div>



    </Fragment>

  );
}
