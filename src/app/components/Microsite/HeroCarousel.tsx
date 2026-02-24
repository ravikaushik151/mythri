"use client";
import React, { useEffect } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const HeroCarousel = () => {
    useEffect(() => {
        import("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);

    return (
        <section className="position-relative p-0">
            <Carousel fade indicators={false} controls={false} interval={4000}>
                {[1, 2].map((i) => (
                    <Carousel.Item key={i}>
                        <div
                            className="d-flex align-items-center justify-content-start"
                            style={{
                                backgroundImage: `url(/images/mythri-banner${i}.jpg)`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                height: "100vh",
                            }}
                        >
                            <div className="overlay"></div>
                            <div className="container text-white position-relative z-3">
                                <h1 className="fw-bold display-5">
                                    Mythri Sankalp -<br /> Designed to Touch Every Sense
                                </h1>
                                <p className="lead">
                                    Premium Biophilic Homes in Dhanori - Lohegaon
                                </p>
                            </div>
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>

            <style jsx>{`
        .overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.35);
        }
      `}</style>
        </section>
    );
};

export default HeroCarousel;
