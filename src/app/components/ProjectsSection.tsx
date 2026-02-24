"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

// 1. Swiper Imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// 2. Swiper CSS Imports (Crucial for arrows and dots to show)
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// NOTE: These CSS files must be accessible. If they don't load, the navigation won't display.

// Your project data
const projects = [
    {
        title: "Mythri Street",
        imageDesktop: "/images/mythri-street.jpeg",
        imageMobile: "/images/m street mobile.webp",
        link: "/mythri-street",
    },
    {
        title: "Mythri Sity",
        imageDesktop: "/images/sity_desktop.webp",
        imageMobile: "/images/sity_mobile.webp",
        link: "/mythri-sity",
    },
    {
        title: "Mythri Sikharam",
        imageDesktop: "/images/sikhram_desk.webp",
        imageMobile: "/images/sikhram_mob.webp",
        link: "/mythri-sikharam",
    },
    {
        title: "Mythri Sankalp",
        imageDesktop: "/images/sankalp_desk.webp",
        imageMobile: "/images/sankalp_mobile.webp",
        link: "/mythri-sankalp",
    }
];

const ProjectsSwiper = () => {
    return (
        <section className="container py-5">
            <h2 className="text-center mb-4">Ongoing Projects</h2>

            {/* Swiper Container. Added relative positioning helper class if you need to custom style arrows */}
            <div className="position-relative">
                <Swiper
                    modules={[Autoplay, Pagination, Navigation]}
                    slidesPerView={1}
                    spaceBetween={0}
                    loop={true}

                    speed={1200}              // 🔥 Smooth transition speed (1.2 sec)
                    effect="slide"            // default slide but smoother

                    pagination={{ clickable: true }}
                    navigation={true}

                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}

                    className="projects-swiper-container"
                >

                    {/* Swiper Slides */}
                    {projects.map((project, index) => (
                        <SwiperSlide key={index}>
                            <Link href={project.link} passHref>
                                <div>
                                    {/* Desktop Image */}
                                    <div className="d-none d-md-block">
                                        <Image
                                            src={project.imageDesktop}
                                            alt={project.title}
                                            width={1400}
                                            height={700}
                                            className="d-block w-100 "
                                        // Optional: Add 'priority' if this is above the fold
                                        />
                                    </div>

                                    {/* Mobile Image */}
                                    <div className="d-block d-md-none">
                                        <Image
                                            src={project.imageMobile}
                                            alt={project.title}
                                            width={600}
                                            height={500}
                                            className="d-block w-100 img-fluid"
                                            style={{objectFit:"cover",objectPosition:"center"}}
                                        />
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default ProjectsSwiper;