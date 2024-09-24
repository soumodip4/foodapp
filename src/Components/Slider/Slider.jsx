import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { EffectCoverflow,Pagination,Navigation,Autoplay } from 'swiper/modules';
import "./Slider.css"

// import { EffectCoverflow, Pagination, Navigation } from 'swiper';

// import slide_image_1 from './assets/images/img_1.jpg';
// import slide_image_2 from './assets/images/img_2.jpg';
// import slide_image_3 from './assets/images/img_3.jpg';
// import slide_image_4 from './assets/images/img_4.jpg';
// import slide_image_5 from './assets/images/img_5.jpg';
// import slide_image_6 from './assets/images/img_6.jpg';
// import slide_image_7 from './assets/images/img_7.jpg';

function Slider() {
  return (
    <div className="container">
      <h4 className='sub-heading'>Choose & Enjoy</h4>
      <h2 className="heading">What Do You Want <br /> To Eat Today?</h2>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation,Autoplay]}
        speed={3000}
      autoplay={{ delay: 1000 }}
        className="swiper_container"
      >
        <SwiperSlide className='swiper-details swipe1'>
          {/* <img src={slide_image_1} alt="slide_image" /> */}
          {/* <img src="images/srimps.jpg" alt="" />  */}
         
        </SwiperSlide>
        <SwiperSlide className='swiper-details swipe2'>
        {/* <img src="images/salmons.jpg" alt="slide2" /> */}
          {/* <img src={slide_image_2} alt="slide_image" /> */}
         
          
        </SwiperSlide>
        <SwiperSlide className='swiper-details swipe3'>
          {/* <img src={slide_image_3} alt="slide_image" /> */}
          {/* <img src="images/berry.jpg" alt="" /> */}
        </SwiperSlide>
        <SwiperSlide className='swiper-details swipe4'>
          {/* <img src={slide_image_4} alt="slide_image" /> */}
          {/* <img src="images/seafood.jpg" alt="" /> */}
        </SwiperSlide>
        <SwiperSlide className='swiper-details swipe5'>
          {/* <img src={slide_image_5} alt="slide_image" /> */}
          {/* <img src="images/dessert.jpg" alt="" /> */}
        </SwiperSlide>
        <SwiperSlide className='swiper-details swipe6'>
          {/* <img src={slide_image_6} alt="slide_image" /> */}
          {/* <img src="images/mutton.jpg" alt="" /> */}
        </SwiperSlide>
        <SwiperSlide className='swiper-details swipe7'>
          {/* <img src={slide_image_7} alt="slide_image" /> */}
          {/* <img src="images/noodls.jpg" alt="" /> */}
        </SwiperSlide>
        <SwiperSlide className='swiper-details swipe8'>
          {/* <img src={slide_image_7} alt="slide_image" /> */}
          {/* <img src="images/chesse.jpg" alt="" /> */}
        </SwiperSlide>
        <SwiperSlide className='swiper-details swipe9'>
          {/* <img src={slide_image_7} alt="slide_image" /> */}
          {/* <img src="images/chiken.jpg" alt="" /> */}
          <h3>chiken</h3>
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default Slider;