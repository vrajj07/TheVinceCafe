import React from 'react';
import { offer } from '../../Data';
import { Link } from 'react-router-dom';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay'; // Import Autoplay styles

// Import required modules
import { Pagination, EffectFade, Autoplay } from 'swiper/modules';

import './Offers.css';

const Offers = () => {
  return (
    <>
      <section className="offer section" id="offer">
        <h2 className="section_title" data-title="Offers">
            Special Offer For You!
        </h2>

        <Swiper modules={[Pagination, EffectFade, Autoplay]} effect="fade" pagination={{ clickable: true, dynamicBullets: true }} autoplay={{ delay: 2500, disableOnInteraction: false }} className="container" spaceBetween={30} slidesPerView={1} loop={true}>
            {offer.map(({ img, title, discount, description }, index) => (
            <SwiperSlide className="offer_item" key={index}>
                <div className="offer_img-wrapper">
                    <img src={img} alt="" className="offer_img" />
                </div>
                <div className="offer_content">
                    <h3 className="offer_title">{title}</h3>
                    <span className="offer_discount">{discount}</span>
                    <p className="offer_description">{description}</p>
                    <Link to="/menupage" className="btn">Order Now</Link>
                </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default Offers;
