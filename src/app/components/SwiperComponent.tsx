'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import { Autoplay, Scrollbar, Navigation } from 'swiper/modules';
import 'swiper/css/autoplay';
import Image from 'next/image';
import { useRef, useEffect } from 'react';

const slides = [
    {
        src: '/images/9M-Road-View-min.jpg',
        alt: '9M road view',
        caption: 'The wide avenues that you will soon stroll down',
    },
    {
        src: '/images/12M-Road-View-min.jpg',
        alt: '12M road view',
        caption: 'Walk into the future',
    },
    {
        src: '/images/Amphitheater-View-min.jpg',
        alt: 'Amphitheater View',
        caption: 'Leisure-time at the open-air theatre',
    },
    {
        src: '/images/Basketball-Court-View-min.jpg',
        alt: 'Basketball Court View',
        caption: 'State-of-the-art sporting facilities',
    },
    {
        src: '/images/Club-Entrance-View-min.jpg',
        alt: 'Club Entrance View',
        caption: 'The Clubhouse, built for relaxation and recreation',
    },
    {
        src: '/images/Entry-Portal-View-min.jpg',
        alt: 'Entry Portal View',
        caption: 'Make a grand entrance',
    },
    {
        src: '/images/Leisure-Park-View-min.jpg',
        alt: 'Leisure Park View',
        caption: 'Lush parks and green spaces that will rejuvenate you',
    },
    {
        src: '/images/Plot-Entrance-View-min.jpg',
        alt: 'Plot Entrance View',
        caption: 'Our smart lighting solutions',
    },
    {
        src: '/images/Pool-Deck-View-min.jpg',
        alt: 'Pool Deck View',
        caption: 'A pool built to be your own oasis',
    },
    {
        src: '/images/Roundbout-View-min.jpg',
        alt: 'Roundabout View',
        caption: 'The perfect balance of modern architecture and greenery',
    },
];

export default function SwiperGallery() {
    const prevRef = useRef<HTMLButtonElement | null>(null);
    const nextRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        // Needed to force Swiper to recognize custom buttons
    }, []);
    return (
        <div className="swiper-container">
            <Swiper
                modules={[Autoplay, Scrollbar, Navigation]}
                autoplay={{ delay: 4000 }}
                loop
                slidesPerView={1}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                scrollbar={{
                    el: '.swiper-scrollbar',
                    draggable: true,
                }}
                onBeforeInit={(swiper) => {
                    if (typeof swiper.params.navigation !== 'boolean') {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                    }
                }}
                className="rounded-xl overflow-hidden swiper-wrapper"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index} className='swiper-slide'>

                        <div className="swiper-slider_overlay"></div>
                        <Image
                            src={slide.src}
                            alt={slide.alt}
                            width={1920}
                            height={1080}
                            className="w-full object-cover"
                            loading="lazy"
                        />
                        <div className="swiper-slide_text-wrap">
                            <div className="text-size-regular text-color-offwhite">
                                {slide.caption}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            {/* Navigation Buttons */}
            <div className="swiper-buttons absolute inset-0 flex justify-between items-center px-4 z-40">
                <button
                    ref={prevRef}
                    className="swiper-button-prev bg-transparent"
                    aria-label="Previous"
                >
                    <div className="w-12 h-12">{/* SVG: Left Arrow */}</div>
                    <svg width="48" height="47" viewBox="0 0 48 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="48" height="46.1187" rx="23.0593" transform="matrix(-1 0 0 1 48 0)" fill="#738E62" />
                        <path d="M34.9355 24.2074V21.8851L17.5627 21.9145L24.7352 14.7714L23.0891 13.0664L13.0651 23.0316L23.0597 33.0555L24.7058 31.3506L17.5333 24.2074H34.9355Z" fill="#F3F4EF" />
                    </svg>
                </button>
                <div
                    ref={nextRef}
                    className="swiper-button-next cursor-pointer"
                    aria-label="Next"
                >
                    <div className="w-12 h-12">{/* SVG: Right Arrow */}</div>
                    <svg width="48" height="47" viewBox="0 0 48 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="48" height="46.1187" rx="23.0593" fill="#738E62" />
                        <path d="M13.0645 24.2074V21.8851L30.4373 21.9145L23.2648 14.7714L24.9109 13.0664L34.9349 23.0316L24.9403 33.0555L23.2942 31.3506L30.4667 24.2074H13.0645Z" fill="#F3F4EF" />
                    </svg>
                </div>
            </div>

            {/* Scrollbar */}
            <div className="swiper-scrollbar absolute bottom-0 left-0 right-0 z-40" />
        </div>
    );
}
