import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section>
      <SectionTitle
        subHeading={"From 11.00am to 10.00pm"}
        heading={"Order Online"}></SectionTitle>

      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24">
        <SwiperSlide>
          <img src={slide1} alt="slide 1" />
          <h4 className="text-4xl -mt-12 text-center text-white uppercase">
            Salad
          </h4>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="slide 2" />
          <h4 className="text-4xl -mt-12 text-center text-white uppercase">
            pizza
          </h4>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="slide 3" />
          <h4 className="text-4xl -mt-12 text-center text-white uppercase">
            soup
          </h4>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="slide 4" />
          <h4 className="text-4xl -mt-12 text-center text-white uppercase">
            dessert
          </h4>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="slide 5" />
          <h4 className="text-4xl -mt-12 text-center text-white uppercase">
            Salad
          </h4>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
