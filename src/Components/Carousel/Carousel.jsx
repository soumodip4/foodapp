import React,{useEffect} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';
import Aos from 'aos';

import './Carousel.css'; // Import the custom CSS file

import { Pagination, EffectFade,Autoplay } from 'swiper/modules';

const Carousel = () => {

  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);
  return (
    <div className='main3'>
    <div className='main-container'>
    <Swiper
    direction={'vertical'}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, EffectFade,Autoplay]}
      effect="fade"
      speed={3000}
      autoplay={{ delay: 1000 }}
      className="mySwiper"
    >
      <SwiperSlide className='slide1'>

      <h1 className='firstline' data-aos="fade-down">Authentic Flavours</h1>
      <h1 className='secondline'data-aos="fade-right">Delicious Food</h1>
        
        {/* <img src="images/slider1.jpg" alt="Slide 1" className="carousel-image" /> */}
      </SwiperSlide>
      <SwiperSlide className='slide2'>
      <h1 className='firstline'>Authentic Flavours</h1>
      <h1 className='secondline'>Delicious Food</h1>
        {/* <img src="images/slider2.jpg" alt="Slide 2" className="carousel-image" /> */}
      </SwiperSlide>
      <SwiperSlide className='slide3'>
      <h1 className='firstline'>Authentic Flavours</h1>
      <h1 className='secondline'>Delicious Food</h1>
        {/* <img src="images/slider3.jpg" alt="Slide 3" className="carousel-image" /> */}
      </SwiperSlide>
      {/* <SwiperSlide>
        <img src="https://via.placeholder.com/1600x900" alt="Slide 4" className="carousel-image" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://via.placeholder.com/1600x900" alt="Slide 5" className="carousel-image" />
      </SwiperSlide> */}
    </Swiper>
    </div>
    </div>
  );
};

export default Carousel;
