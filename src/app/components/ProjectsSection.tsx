"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const projects = [
    {
        title: "Mythri Street",
        imageDesktop: "/images/M street Desktop.webp",
        imageMobile: "/images/m street mobile.webp",
        link: "/mythri-street",
    },
    {
        title: "Mythri Sity",
        imageDesktop: "/images/sity.webp",
        imageMobile: "/images/sity.webp",
        link: "/mythri-sity",
    },
    {
        title: "Mythri Sikharam",
        imageDesktop: "/images/sikharam.webp",
        imageMobile: "/images/sikharam.webp",
        link: "/mythri-sikharam",
    },
    {
        title: "Mythri Sankalp",
        imageDesktop: "/images/mythrisapphire.webp",
        imageMobile: "/images/mythrisapphire.webp",
        link: "/mythri-sankalp",
    }
];

const ProjectsCarousel = () => {
    return (
        <section className="container py-5">
            <h2 className="text-center mb-4">Ongoing Projects</h2>

            <div id="projectsCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`carousel-item ${index === 0 ? "active" : ""}`}
                        >
                            <Link href={project.link}>
                                <div>
                                    {/* Desktop Image */}
                                    <div className="d-none d-md-block">
                                        <Image
                                            src={project.imageDesktop}
                                            alt={project.title}
                                            width={1400}
                                            height={700}
                                            className="d-block w-100"
                                        />
                                    </div>

                                    {/* Mobile Image */}
                                    <div className="d-block d-md-none">
                                        <Image
                                            src={project.imageMobile}
                                            alt={project.title}
                                            width={600}
                                            height={500}
                                            className="d-block w-100"
                                        />
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Controls */}
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#projectsCarousel"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>

                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#projectsCarousel"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </section>
    );
};

export default ProjectsCarousel;
