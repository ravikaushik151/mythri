"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Thumbs,
  Autoplay,
  EffectFade,
} from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Gallery = ({
  images = [],
  title = "GALLERY",
  subtitle = ""
}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [mainSwiper, setMainSwiper] = useState(null);

  return (
    <section id="gallery" className="">
      <div className="container">
        <div className="col-sm-12 col-md-12 text-center">

          {/* Heading */}
          <div className="text-center mb-5">
            <h2 className="gallery-title small-title">{title}</h2>
            <p className="gallery-subtitle">
              <b>{subtitle}</b>
            </p>
          </div>

          <div className="gallery-box position-relative">

            {/* Custom Arrows */}
            <button
              className="gallery-arrow left"
              onClick={() => mainSwiper?.slidePrev()}
            >
              <FaChevronLeft />
            </button>

            <button
              className="gallery-arrow right"
              onClick={() => mainSwiper?.slideNext()}
            >
              <FaChevronRight />
            </button>

            {/* Main Slider */}
            <Swiper
              onSwiper={setMainSwiper}
              modules={[Thumbs, Autoplay, EffectFade]}
              effect="fade"
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              thumbs={{ swiper: thumbsSwiper }}
              className="gallery-main"
            >
              {images.map((img, i) => (
                <SwiperSlide key={i}>
                  <div className="gallery-image-wrap">
                    <img
                      src={img}
                      alt={`Gallery ${i + 1}`}
                      loading="lazy"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Thumbnails */}
            <Swiper
              onSwiper={setThumbsSwiper}
              modules={[Thumbs]}
              spaceBetween={12}
              slidesPerView={6}
              watchSlidesProgress
              centerInsufficientSlides={true}
              breakpoints={{
                0: { slidesPerView: 3 },
                768: { slidesPerView: 5 },
                1024: { slidesPerView: 6 },
              }}
              className="gallery-thumbs"
            >

              {images.map((img, i) => (
                <SwiperSlide key={i}>
                  <div className="thumb-wrap">
                    <img
                      src={img}
                      alt={`Thumb ${i + 1}`}
                      loading="lazy"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
