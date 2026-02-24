"use client";
import React from "react";
import Image from "next/image";

const AboutSection = () => {
    return (
        <section className="section_amenities-hero theme-bg-light aboutabout section py-5">
            <div className="padding-global">
                <div className="container-large">
                    {/* About Section */}
                    <section className="section-1">
                        <div className="container-fluid">
                            <div className="row align-items-center">
                                {/* Left Image (Desktop) */}
                                <div className="col-md-6 d-none d-md-block">
                                    <Image
                                        alt="Luxury interior"
                                        width={648}
                                        height={338}
                                        className="img-fluid w-100 rounded-3 shadow"
                                        src="/images/about-about.png"
                                        style={{ objectFit: "cover", minHeight: "400px" }}
                                    />
                                </div>

                                {/* Right Text */}
                                <div className="col-md-6">
                                    <h2 className="mb-3 theme-color-dark fs-2 text-center text-md-start">
                                        About Us
                                    </h2>
                                    <p className="mb-3 theme-color-dark text-justify">
                                        Mythri Builders is a trusted real estate developer in Bangalore,
                                        committed to building communities that thrive. We combine modern
                                        design, sustainability, and transparency to create premium
                                        residential projects that feel like home from day one.
                                    </p>
                                    <p className="mb-3 theme-color-dark text-justify">
                                        With years of experience, our approach emphasizes quality, attention
                                        to detail, and timely delivery. Every project is designed to foster
                                        connection with the environment and with the community, ensuring a
                                        harmonious living experience.
                                    </p>
                                    <p className="mb-0 theme-color-dark text-justify">
                                        Our goal is not just to build houses, but to craft lasting
                                        relationships with our clients through integrity, trust, and
                                        exceptional service.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Mobile Image */}
                        <div className="d-md-none mt-4">
                            <Image
                                alt="Luxury interior"
                                width={648}
                                height={338}
                                className="img-fluid w-100 rounded-3"
                                src="/images/about-about.png"
                                style={{ objectFit: "cover", minHeight: "350px" }}
                            />
                        </div>
                    </section>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
