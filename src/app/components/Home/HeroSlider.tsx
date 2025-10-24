'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade, Pagination } from 'swiper/modules'; // ← Add Pagination
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination'; // ← Import Pagination styles
import Image from 'next/image';
import Link from 'next/link';

const slides = [
    {
        title: 'Luxury reimagined in green. Welcome to Mythri Builders',
        subtitle: '',
        desc: 'In a home kissed by trees and wrapped in serenity, you don’t just live — you thrive',
        button: '',
        href: '',
        img: '/images/hero-image-edit-4-new.webp',
    },
];

export default function HomeHeroSlider() {
    return (
        <div className="overflow-hidden position-relative">
            <Swiper
                modules={[Autoplay, Navigation, EffectFade, Pagination]}
                navigation={{
                    prevEl: '.swiper-button-prev',
                    nextEl: '.swiper-button-next',
                }}
                pagination={{ clickable: true }} // ← Enable indicators
                effect="fade"
                loop
                autoplay={{ delay: 5000 }}
                className="custom-swiper"
            >

                {slides.map((slide, i) => (
                    <SwiperSlide key={i}>
                        <div className="position-relative text-white d-flex align-items-center" style={{ height: '100vh' }}>
                            <Image
                                src={slide.img}
                                alt={slide.title}
                                fill
                                priority
                                fetchPriority="high"
                                sizes="100vw"
                                className="object-cover z-n1"

                            />
                            <div className="container position-relative z-1">
                                <div className="d-flex">
                                    <div>
                                        <h1 className="display-3 fw-bold mb-3 w-100 text-center">Luxury reimagined in green. <br /> Welcome to Mythri Builders</h1>

                                        {slide.subtitle && <h4 className="mb-3 fw-light">{slide.subtitle}</h4>}

                                        {slide.desc && <p className="mb-4 lead text-center w-100 text-success">In a home kissed by trees and wrapped in serenity, <br /> you don’t just live - you thrive</p>}
                                    </div>
                                    <Link href={slide.href} className="btn btn-outline-light px-4 py-2 d-none  text-center">
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
        </div >
    );
}

