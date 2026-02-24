'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade, Pagination } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';

const slides = [
  {
    title: '',
    subtitle: '',
    desc: '',
    button: '',
    href: '',
    desktopImg: '/images/hero-image-edit-9.jpg',
    mobileImg: '/images/Mob_banner_Eara.jpeg.jpg', // ← Mobile banner
  },
  // add more slides if needed
];

export default function MicroHomeHeroSlider() {
  return (
    <div className="overflow-hidden position-relative">
      <Swiper
        modules={[Autoplay, Navigation, EffectFade, Pagination]}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
        pagination={{ clickable: true }}
        effect="fade"
        loop
        autoplay={{ delay: 5000 }}
        className="custom-swiper"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="position-relative text-white d-flex align-items-center micositeheader">
              {/* Desktop Image */}
              <div className="d-none d-md-block">
                <Image
                  src={slide.desktopImg}
                  alt={slide.title}
                  layout="fill"
                  objectFit="cover"
                  className="z-n1"
                />
              </div>
              {/* Mobile Image */}
              <div className="d-block d-md-none">
                <Image
                  src={slide.mobileImg}
                  alt={slide.title}
                  layout="fill"
                  objectFit="cover"
                  className="z-n1"
                />
              </div>

              <div className="container position-relative z-1">
                <div className="text-start">
                  <h1 className="display-3 fw-bold mb-3">{slide.title}</h1>
                  {slide.subtitle && <h4 className="mb-3 fw-light">{slide.subtitle}</h4>}
                  {slide.desc && <p className="mb-4 lead">{slide.desc}</p>}
                  <Link href={slide.href} className="btn btn-outline-light px-4 py-2 d-none">
                    {slide.button}
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Swiper Nav Buttons */}
        <div className="swiper-button-prev text-white" />
        <div className="swiper-button-next text-white" />
      </Swiper>
    </div>
  );
}
