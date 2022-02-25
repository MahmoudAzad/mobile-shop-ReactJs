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
import { addComment, getComment, getWeeklyById } from "../../services/webServices";
import { useEffect } from "react";
import Loading from "../common/loading";
import { Store } from "../redux/store/store";
import CreateComment from "../comment/createComment";
import CommentList from "../comment/commentList";
// import CommentList from "../comment/commentList";


export default function App() {
  // ................................................................................................................//
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
  // .......................................................................................................................................
  
  const [detail , setDetail] = useState({});
  const [comment , setComment] = useState({});
  


  const { id } = useParams();
  console.log("id => " , id);

  useEffect(() => {

        const sendReq = async () => {
          const getDetail =await getWeeklyById(id);
          setDetail({detail:{getDetail}});
      
      
          const comments = await getComment();
          setComment({comments});
        }

        sendReq();
    
  },[])         
  
  
  const submitComment = async (comment) =>{
    console.log("comment 1 => " , comment);
    const response = await addComment(comment,id) ;
    if(response.status === 200) {
      const getAllComments = await getComment(id);
      const lastComment = getAllComments.data.slice(-1);
      console.log("last comment => " , lastComment);
      setComment({comments : {...getAllComments , ...lastComment}});
    }
  }


  console.log("comment (before if) => " , comment);
  console.log("detail (before if) => " , detail);

  
  
  if(!detail.detail || !comment.comments) {
    return <Loading /> 
  }
  
  const detailData = detail.detail.getDetail;
  const comments = comment.comments.data;
  

  return(
      <Fragment >

      <div className="product-detail-header container" >

        <div className="product-detail-title">
          <h5 className="container">
            {detailData.title}
          </h5>
        </div>

        <div className="product-detail-icons">
          <i className="fa fa-facebook mr-3 fa-lg detail-icon-facebook" aria-hidden="true"></i>
          <i className="fa fa-twitter mr-3 fa-lg detail-icon-twiteer" aria-hidden="true"></i>
          <i className="fa fa-instagram mr-3 fa-lg detail-icon-instagram" aria-hidden="true"></i>
          <i className="fa fa-pinterest-p mr-3 fa-lg detail-icon-pinterest" aria-hidden="true"></i>

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
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2 detail-swiper-gallery"
          >
            {detailData.imgs.map((img) => (
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

            {detailData.imgs.map((img) => (
              <SwiperSlide>
                <img src={`http://localhost:1337${img.url}`} />

              </SwiperSlide>
            ))}


          </Swiper>
        </div>

        <div className="product-detail-caption ">
          <div className="product-detail-price" >
            <h3>
              {detailData.price}
            </h3>
            <h6 className="product-detail-linedPrice">
              <strike>{detailData.linedPrice}</strike>
            </h6>
            <h6 className="product-detail-discount">
              {detailData.discount}
            </h6>
          </div>

          <br />
          <h6>Status:In stock</h6>
          <hr />
          <p>
            <div dangerouslySetInnerHTML={{ __html: detailData.description }}></div>
            {/* {data.description} */}
          </p>
          <hr />

          <div className="Quantity-container">

            <section>
              <form action="">
                <div className="qty">
                  <button className="qtyminus" aria-hidden="true"><i className="fa fa-minus fa-lg" aria-hidden="true"></i></button>
                  <input type="number" name="qty" id="qty" min="1" max="100" step="1" value="1" />
                  <button className="qtyplus" aria-hidden="true"><i className="fa fa-plus fa-lg" aria-hidden="true"></i></button>
                </div>
              </form>
            </section>

            <button className="Quantity-button">Add to cart</button>


            <div className="Quantity-icons">
              <i className="fa fa-heart-o fa-lg fa-2x Quantity-icon-heart" data-tip data-for="detail-heart-tooltip" aria-hidden="true"></i>
              <ReactTooltip id="detail-heart-tooltip" place="top" effect="solid">
                Add to wish list
              </ReactTooltip>
              <i className="fa fa-bar-chart fa-2x Quantity-icon-chart" data-tip data-for="detail-chart-tooltip" aria-hidden="true"></i>
              <ReactTooltip id="detail-chart-tooltip" place="top" effect="solid">
                Compare
              </ReactTooltip>
            </div>
          </div>

          <hr />

        </div>
      </div>

      <div className="container" >
        <CreateComment onComment={submitComment} />
      </div>
      
      <div className="row container">
        <div className="col-10">
          <CommentList comments={comments || []} />
        </div>
      </div>

     

  </Fragment>
  )
}
