'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

const testimonials = [
    {
        text: "My experience with Mythri Builders has been nothing short of exceptional. From the initial consultation to the final handover, their professionalism, transparency, and commitment to quality stood out. The project was completed exactly as promised, with top-notch craftsmanship and meticulous detailing. It’s clear why they are recognised among the Best Builders in Bangalore. I’m proud to call a Mythri home my own.",
        name: "Mr. Arjun Menon",
    },
    {
        text: "Choosing Mythri Builders was one of the best decisions we made. The team maintained clear communication throughout the process and delivered our apartment on time with impeccable finishes. Their customer-first approach and dedication to excellence truly reflect their reputation as one of the Top Builders in Bangalore.",
        name: "Mrs. Divya Rao",
    },
    {
        text: "Purchasing a property with Mythri Builders Bangalore has been a rewarding experience. Their management team ensured every step was smooth and well-coordinated, keeping me informed throughout the process. The commitment to quality, adherence to timelines, and ethical approach they maintain make them a benchmark for reliability in the real estate industry. Investing with Mythri Builders gave me not just a home, but complete peace of mind.",
        name: "Mrs. Sneha Narayanan",
    },
];

const TestimonialSlider = () => {
    return (
        <section className="px-md-5 px-3 bg-light theme-bg-light testimonials pt-5 pb-5">
            <h2 className="text-center fw-bold theme-color-dark">TESTIMONIALS</h2>

            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000 }}
                breakpoints={{
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                className="mb-5 mt-5"
            >
                {testimonials.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="info-box p-4 theme-bg-dark shadow-sm h-100 rounded d-flex flex-column justify-content-between">
                            <p className="theme-color-light mb-3 text-justify">{item.text}</p>
                            <h6 className="text-center fw-bold text-white mt-auto">
                                – {item.name}
                            </h6>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default TestimonialSlider;
