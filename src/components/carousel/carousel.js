import React, { useEffect, useState } from "react";
import Loading from "../common/loading";
import { CarouselAction } from "../redux/actions/carouselAction";
import { Store } from "../redux/store/store";

const Carousel = () => {

  const [carousels, setCarousels] = useState("");

  useEffect(() => {
    const SendReq = async () => {
      await Store.dispatch(CarouselAction());
      const data = await Store.getState().Carousel;
      setCarousels(data);
    }
    SendReq();
  }, [])



  if (!carousels) { return <Loading /> }

  return (
    <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100 carousel-img" src={`http://localhost:1337${carousels[6].photoActive.url}`} />
        </div>
        {carousels.map((Car) => (
          <div class="carousel-item ">

            <img class="d-block w-100 carousel-img" src={`http://localhost:1337${Car.img.url}`} />

          </div>
        ))}

      </div>


      <a class="carousel-control-prev " href="#carouselExampleFade" role="button" data-slide="prev">
        <div className="carousel-icon-prev-container">
        <i class="fa fa-angle-left fa-2x carousel-icon-prev " aria-hidden="true"></i>
        </div>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
      <div className="carousel-icon-next-container">
      <i class="fa fa-angle-right fa-2x carousel-icon-next " aria-hidden="true"></i>
        </div>
        <span class="sr-only">Next</span>
      </a>
    </div>
  )
}

export default Carousel;