"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const coreValues = [
  {
    title: "Transparency",
    text: "Every promise made is a promise kept.",
    img: "/images/Transaprency.png",
  },
  {
    title: "Punctuality",
    text: "We deliver on time, every time.",
    img: "/images/Punctuality.png",
  },
  {
    title: "Trust",
    text: "The foundation on which every Mythri relationship is built.",
    img: "/images/Trust.png",
  },
  {
    title: "Focus",
    text: "One project, one vision - executed with precision.",
    img: "/images/Focus.png",
  },
  {
    title: "Integrity",
    text: "Ethics in every action, honesty in every deal.",
    img: "/images/Integrity.png",
  },
  {
    title: "Excellence",
    text: "Quality that endures, design that inspires.",
    img: "/images/Excellence.png",
  },
];

export default function CoreValuesGrid() {
  return (
    <section className="core-values-section py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold theme-color-dark">Mythri Builders Core Values</h2>
          <p className="text-muted text-center fs-4 d-none">
            Our principles define who we are and how we work.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="d-none d-md-block">
          <div className="row g-4">
            {coreValues.map((item, index) => (
              <div key={index} className="col-12 col-md-6 col-lg-4">
                <div className="core-value-card position-relative p-4 text-center h-100">
                  <div className="icon-circle mb-3 mx-auto">
                    <Image
                      src={item.img}
                      alt={item.title}
                      width={80}
                      height={80}
                      className="img-fluid"
                    />
                  </div>
                  <h5 className="fw-bold mb-2">{item.title}</h5>
                  <p className="text-muted text-center">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Slider */}
        <div className="d-md-none">
          <Swiper
            modules={[Pagination, Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
          >
            {coreValues.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="core-value-card position-relative p-4 text-center h-100">
                  <div className="icon-circle mb-3 mx-auto">
                    <Image
                      src={item.img}
                      alt={item.title}
                      width={80}
                      height={80}
                      className="img-fluid"
                    />
                  </div>
                  <h5 className="fw-bold mb-2">{item.title}</h5>
                  <p className="text-muted text-center">{item.text}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <p className="text-muted text-center fs-6 mt-4">At Mythri Builders, these values shape every decision and every home, reinforcing why many homebuyers consider us among the Best Builders in Bangalore.</p>
      </div>
    </section>
  );
}
