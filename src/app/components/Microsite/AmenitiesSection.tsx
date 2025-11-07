"use client";
import React from "react";
import Image from "next/image";

const AmenitiesSection = () => {
    const amenities = [
        "Badminton Court",
        "Basketball Court",
        "Calisthenic Open Gym",
        "Zip Line",
        "Gymnasium",
        "Pool Table",
        "Foosball Table",
        "Carrom",
        "Card Table",
        "Chess Board",
        "Jogging Track",
        "Beach Volleyball Court",
        "Tennis Court",
        "Skating Roller Park",
        "Tricycle Park / Traffic Island",
        "Hotfoot Court",
    ];

    return (
        <section className="py-5 bg-white">
            <div className="container">
                {/* Section Heading */}
                <h2 className="mb-3 theme-color-dark fs-2 text-center">Amenities</h2>
                <p className="text-muted mx-auto mb-5 text-justify" style={{ maxWidth: "850px" }}>
                    Discover spaces that awaken your senses and nurture your spirit. From tranquil
                    garden retreats to flowing water features, each amenity at Mythri Sankalp invites
                    calm and connection. Meander through nature-inspired pathways, breathe deeply in
                    lush sanctuaries, and gather effortlessly in welcoming spaces designed to enrich
                    everyday life.
                </p>

                <div className="row align-items-start g-4">
                    {/* Left Side Image */}
                    <div className="col-md-6">
                        <div className="position-relative rounded-4 overflow-hidden shadow-sm">
                            <Image
                                src="/images/badmiton.jpg"
                                alt="Calisthenic Open Gym"
                                width={700}
                                height={500}
                                className="img-fluid rounded-4"
                            />
                            <span
                                className="position-absolute bottom-0 start-0 text-white bg-dark bg-opacity-75 px-3 py-1 small rounded-top"
                                style={{ fontSize: "0.9rem" }}
                            >
                                Calisthenic Open Gym
                            </span>
                        </div>
                    </div>

                    {/* Right Side Text */}
                    <div className="col-md-6">
                        <h5 className="text-success mb-3 fw-semibold">Active Zone</h5>
                        <p className="text-muted mb-4" style={{ fontSize: "0.95rem" }}>
                            A dynamic and invigorating space, the active zone blends nature’s energy with
                            modern fitness and recreation. Here, movement, play, and exploration create a
                            path to holistic living.
                        </p>

                        <div className="row">
                            {amenities.map((item, index) => (
                                <div key={index} className="col-6 mb-2 d-flex align-items-start">
                                    <span className="me-2 text-success">⚬</span>
                                    <span className="text-dark" style={{ fontSize: "0.95rem" }}>
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        section {
          scroll-margin-top: 80px;
        }
      `}</style>
        </section>
    );
};

export default AmenitiesSection;
