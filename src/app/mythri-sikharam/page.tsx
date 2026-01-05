"use client";

import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Carousel, Container, Row, Col, Form, Button, Modal } from "react-bootstrap";
import Image from "next/image";
import ScheduleVisitForm from "../components/ScheduleVisitForm";
import Walkthrough from "../components/Microsite/Walkthrough";
import Specifications from "../components/Microsite/Specifications";
import { mythriSikharamSpecs } from "../data/mythriSikharam";

export default function MicoristePage() {
    const [show, setShow] = useState(false);
    const [popupImage, setPopupImage] = useState("");

    const handleShow = (img) => {
        setPopupImage(img);
        setShow(true);
    };

    const handleClose = () => setShow(false);

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <>
            {/* ===== Banner Section ===== */}
            <section className="p-0 position-relative">
                <Carousel
                    fade
                    interval={null}     // ❌ auto slide off
                    indicators={false}  // ❌ dots hide
                    controls={false}    // ❌ arrows hide
                >
                    {/* === Slide 1 === */}
                    <Carousel.Item>
                        <picture>
                            {/* Mobile Image */}
                            <source
                                media="(max-width: 767px)"
                                srcSet="/images/sikharam/Mob_ban_sikharam.webp"
                            />
                            {/* Desktop Image */}
                            <img
                                className="d-block w-100"
                                src="/images/sikharam/Website banner_sikharam.webp"
                                alt="First slide"
                                style={{ height: "80vh", objectFit: "cover" }}
                            />
                        </picture>

                        <Carousel.Caption className="d-none">
                            <h3>Welcome to Our Project</h3>
                            <p>Discover luxury living like never before.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                {/* ✅ RERA Number Overlay */}
                <div className="rera-badge">
                    <strong>RERA No:</strong> PRM/KA/RERA/1251/446/PR/280525/007790
                </div>
            </section>


            {/* ===== Schedule Visit Section ===== */}
            <ScheduleVisitForm />
            <section data-aos="fade-up"
                data-aos-delay="200" className="about-micro"
                style={{
                    backgroundColor: "#FBFBF4",
                    color: "#5c4a3b",
                    padding: "80px 0",
                    fontFamily: "'Source Sans 3', sans-serif",
                }}
            >
                <Container className="text-center">
                    {/* ===== Title ===== */}
                    <Image
                        src="/images/sikharam/Sikharam Logo.webp"
                        alt="Mythri Builders"
                        width={200}
                        height={300}
                        className="img-fluid rounded"
                    />

                    {/* ===== Description ===== */}
                    <p
                        className="mx-auto mt-5"
                        style={{
                            maxWidth: "900px",
                            fontSize: "19px",
                            color: "#585858",
                            lineHeight: "1.8",
                            fontFamily: "'Source Sans 3', sans-serif",
                        }}
                    >
                        Discover the Art of Elevated Living <br /> Mythri Sikharam is a luxury high-rise residential community by Mythri Builders, thoughtfully designed to deliver a refined lifestyle in one of Bengaluru’s fastest-growing corridors and an ideal address for those seeking flats near RGA Tech Park Bangalore.
                    </p>
                    <p
                        className="mx-auto mt-3"
                        style={{
                            maxWidth: "900px",
                            fontSize: "19px",
                            color: "#585858",
                            lineHeight: "1.8",
                            fontFamily: "'Source Sans 3', sans-serif",
                        }}
                    >
                        Located off Sarjapur Road, Hadosiddapura, this premium development of thoughtfully planned Flats For Sale In Sarjapur Road blends contemporary architecture, open planning, and serene landscaping. Each home, including the efficiently designed 2 BHK flats in Sarjapur Road, is crafted to offer abundant natural light, cross ventilation, and seamless functionality. <br /> Here, life moves at your pace - calm, connected, and elevated.
                    </p>

                    {/* ===== Info Row ===== */}
                    <Row
                        className="justify-content-center mt-5 mb-4 text-center"
                        style={{
                            fontSize: "16px",
                            color: "#4b3a2a",
                        }}
                    >
                        <Col md={4} sm={6} xs={12} className="mb-3">
                            <h3 className="mb-md-0 mb-4 microsite-about">
                                2 & 3 BHK <br /> Premium Homes
                            </h3>
                        </Col>

                        <Col md={4} sm={6} xs={12} className="mb-3 border-start border-end">
                            <h3 className="mb-md-0 mb-4 microsite-about">
                                Off Sarjapur Road <br /> Bengaluru
                            </h3>
                        </Col>

                        <Col md={4} sm={6} xs={12} className="mb-3">
                            <h3 className="mb-0 microsite-about">
                                60 Lifestyle <br /> Amenities
                            </h3>
                        </Col>
                        <Col md={4} sm={6} xs={12} className="mb-3 border-end">
                            <h3 className="mb-0 microsite-about">
                                2.04 Acres <br /> Project Land Area
                            </h3>
                        </Col>

                        <Col md={4} sm={6} xs={12} className="mb-3 border-start border-end">
                            <h3 className="mb-0 microsite-about">
                                182 <br /> Premium Apartments
                            </h3>
                        </Col>

                        <Col md={4} sm={6} xs={12} className="mb-3">
                            <h3 className="mb-0 microsite-about">
                                60% <br /> Open Space
                            </h3>
                        </Col>
                    </Row>

                    {/* ===== Image ===== */}
                    <div className="mt-4">
                        <Image
                            src="/images/sikharam/earth_homes_sikharam.webp"
                            alt="Mythri Builders"
                            width={1920}
                            height={600}
                            className="img-fluid rounded"
                            style={{
                                boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                                borderRadius: "0px",
                            }}
                        />
                    </div>
                    <p
                        className="mx-auto mt-3"
                        style={{
                            maxWidth: "900px",
                            fontSize: "19px",
                            color: "#585858",
                            lineHeight: "1.8",
                            fontFamily: "'Source Sans 3', sans-serif",
                        }}
                    >Elegantly designed facades, spacious balconies, and well-ventilated layouts come together to create an elevated lifestyle experience for residents choosing flats near RGA Tech Park Bangalore.<br /> Designed for natural light and effortless airflow, each home offers everyday luxury with smart planning and lasting comfort.
                    </p>
                </Container>

                {/* ===== Google Font ===== */}
                <style jsx global>{`
                    @import url('https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap');
                `}</style>
            </section>
            <section data-aos="fade-up"
                data-aos-delay="200" className="p-0" style={{
                    backgroundColor: "#FBFBF4",
                    color: "#5c4a3b",
                    padding: "80px 0",
                    fontFamily: "'Source Sans 3', sans-serif",
                }}>
                <div className="container g-0">
                    <Image
                        src="/images/sikharam/Interior img1_sikharam.webp"
                        alt="Tennis Player"
                        width={600}
                        height={400}
                        className="img-fluid w-100"
                    />
                </div>
            </section>
            <section data-aos="fade-up"
                data-aos-delay="200" className="life-earth" style={{ backgroundColor: "#f7f2eb", padding: "80px 0", fontFamily: "'Source Sans 3', sans-serif", }}>
                <div className="container">
                    <h3 className="text-center mb-5"
                        style={{
                            fontSize: "35px",
                            color: "#585858",
                            lineHeight: "1.8",
                        }}>
                        The Art of Thoughtful Amenity
                    </h3>

                    {/* Row 1: Text left, Image right */}
                    <div className="row align-items-center mb-5">
                        <div className="col-md-6 px-5">
                            <p
                                className="mx-auto mt-3"
                                style={{
                                    maxWidth: "900px",
                                    fontSize: "19px",
                                    color: "#585858",
                                    lineHeight: "1.8",
                                    width: "90%",
                                }}
                            >
                                Every space at Mythri Sikharam is crafted to enrich daily life - blending relaxation, recreation, and community together. <br />
                                From quiet corners to active zones, discover amenities designed for both peace and play.

                            </p>
                        </div>
                        <div className="col-md-6 text-center p-0">
                            <Image
                                src="/images/sikharam/Amenities1_Sikharam.webp"
                                alt="Tennis Player"
                                width={600}
                                height={400}
                                className="img-fluid w-100"
                            />
                        </div>
                    </div>

                    {/* Row 2: Image left, Text right */}
                    <div className="row align-items-center">
                        <div className="col-md-6 text-center mb-4 mb-md-0 p-0">
                            <Image
                                src="/images/sikharam/Amenities2_sikharam.webp"
                                alt="Child on swing"
                                width={600}
                                height={400}
                                className="img-fluid w-100"
                            />
                        </div>
                        <div className="col-md-6 px-5">
                            <div
                                style={{

                                    fontSize: "19px",
                                    color: "#585858",
                                    lineHeight: "1.8",
                                }}
                            >
                                <div className="row align-items-center mb-5">

                                    <div className="row d-flex justify-content-center">
                                        <div className="col-md-6 col-6 px-md-3">
                                            <ul className="list-unstyled">
                                                <li>Clubhouse with Terrace</li>
                                                <li>Outdoor Working Zone</li>
                                                <li>Multipurpose Hall</li>
                                                <li>Swimming Pool & Kids Pool</li>
                                                <li>Jacuzzi with Seating</li>
                                                <li>Gymnasium & Outdoor Gym</li>
                                                <li>Zumba & Rooftop Yoga Deck</li>
                                                <li>Indoor Games Room</li>
                                                <li>Creche (Day Care)</li>
                                                <li>Coworking Zone</li>
                                                <li>Laundry Service</li>
                                                <li>Waiting Lounge</li>
                                                <li>Seating & Swing Pods</li>
                                                <li>Canopy & Seaters</li>
                                            </ul>
                                        </div>
                                        <div className="col-md-6 col-6 px-md-3">
                                            <ul className="list-unstyled">
                                                <li>Pickleball Court</li>
                                                <li>Half Basketball Court</li>
                                                <li>Cricket Practice Pitch/Net</li>
                                                <li>Skating Rink</li>
                                                <li>Jogging Track</li>
                                                <li>Rock Climbing Wall/Hall</li>
                                                <li>Jungle Gym & Kids' Play Area</li>
                                                <li>Trampoline Area</li>
                                                <li>Mini Theatre</li>
                                                <li>Amphitheatre Terrace</li>
                                                <li>Performance Deck</li>
                                                <li>Barbeque Area & Bonfire Court</li>
                                                <li>Pet Park</li>
                                                <li>Giant Chess</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <p
                                className="mx-auto mb-0"
                                style={{
                                    marginTop: "70px",
                                    maxWidth: "900px",
                                    fontSize: "19px",
                                    color: "#585858",
                                    lineHeight: "1.8",
                                }}
                            >Every corner at Mythri Sikharam is designed with purpose and poise.
                                Grand entrances welcome you with timeless elegance, landscaped courtyards breathe serenity into your routine, and airy balconies invite the outdoors into your home. <br />
                                Whether it’s a quiet morning yoga session, an evening by the pool, or quality time with loved ones - these amenity spaces adapt beautifully to every mood, every moment, and every version of your day.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section data-aos="fade-up"
                data-aos-delay="200" className="p-0">
                <div className="container g-0">
                    <Image
                        src="/images/sikharam/Interior img2_sikharam.webp"
                        alt="Tennis Player"
                        width={600}
                        height={400}
                        className="img-fluid w-100"
                    />
                </div>
            </section>
            <section data-aos="fade-up"
                data-aos-delay="200"
                className="text-center"
                style={{ backgroundColor: "#f7f2eb", padding: "80px 0", fontFamily: "'Source Sans 3', sans-serif", }}
            >
                <div className="container">
                    {/* Section Title */}
                    <h3 className="text-center mb-5"
                        style={{
                            fontSize: "35px",
                            color: "#585858",
                            lineHeight: "1.8",
                        }}>
                        Spaces That Make It Possible
                    </h3>

                    {/* Paragraph */}
                    <p
                        className="mx-auto"
                        style={{
                            marginTop: "0px",
                            maxWidth: "900px",
                            fontSize: "19px",
                            color: "#585858",
                            lineHeight: "1.8",
                        }}
                    >
                        Every detail is designed to support this way of life. Double-height lobbies create an airy welcome, spacious balconies bring the outdoors closer, and verandas encourage slow evenings spent in good company. Whether you’re seeking solitude, movement, or togetherness, these 2 BHK flats in Sarjapur Road and expansive 3 BHK residences adapt to every version of your day.
                    </p>

                    {/* Buttons */}
                    <div className="d-flex justify-content-center gap-3 mt-4">
                        <button
                            className="btn btn-dark px-4 py-2"
                            style={{ borderRadius: 0, fontSize: "14px", letterSpacing: "1px" }}
                            onClick={() => handleShow("/images/sikharam/Floorplan_sikharam.webp")}
                        >
                            FLOOR PLANS
                        </button>
                        <button
                            className="btn btn-dark px-4 py-2"
                            style={{ borderRadius: 0, fontSize: "14px", letterSpacing: "1px" }}
                            onClick={() => handleShow("/images/sikharam/Masterplan_sikharam.webp")}
                        >
                            MASTER PLAN
                        </button>
                    </div>

                    {/* Divider */}
                    <div className="my-5"></div>

                    {/* Project Slider Section */}
                    <h3 className="text-center mb-5"
                        style={{
                            fontSize: "35px",
                            color: "#585858",
                            lineHeight: "1.8",
                        }}>
                        The Project Setting at Sikharam
                    </h3>

                    <div className="col-lg-10 mx-auto">
                        <Carousel indicators={false} controls={true} interval={3000}>
                            <Carousel.Item>
                                <Image
                                    src="/images/sikharam/Sikharam_project image1.webp"
                                    alt="Project View 1"
                                    width={1920}
                                    height={500}
                                    className="d-block w-100 rounded carousel-img"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image
                                    src="/images/sikharam/Sikharam_project image2.webp"
                                    alt="Project View 2"
                                    width={1920}
                                    height={500}
                                    className="d-block w-100 rounded carousel-img"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image
                                    src="/images/sikharam/Sikharam_project image3.webp"
                                    alt="Project View 3"
                                    width={1920}
                                    height={500}
                                    className="d-block w-100 rounded carousel-img"
                                />
                            </Carousel.Item>
                        </Carousel>

                        <p
                            className="mx-auto d-none"
                            style={{
                                marginTop: "60px",

                                fontSize: "19px",
                                color: "#585858",
                                lineHeight: "1.8",
                            }}
                        >
                            Mythri Builders is part of The Earth at Nandi Hills, a vast, nature-rich community with a clubhouse, premium amenities, and lush surroundings.
                        </p>
                    </div>

                    {/* Image Popup Modal */}
                    <Modal show={show} onHide={handleClose} centered size="lg">
                        <Modal.Body className="p-0">
                            <Image
                                src={popupImage}
                                alt="Popup Plan"
                                width={1000}
                                height={700}
                                className="img-fluid w-100"
                            />
                        </Modal.Body>
                    </Modal>
                </div>
            </section>

            <Walkthrough
                title="Project Walkthrough"
                thumbnail="/images/youtube.webp"
                youtubeId="HHHPiHl32Q8"
            />
            <section className="specifications">
                <div className="container">
                    {/* Heading */}
                    <div className="row">
                        <div className="col-12">
                            <h3
                                className="text-center mb-5"
                                style={{
                                    fontSize: "35px",
                                    color: "#585858",
                                    lineHeight: "1.8",
                                }}
                            >
                                Specifications
                            </h3>
                        </div>
                    </div>

                    {/* Specifications Cards */}
                    <Specifications data={mythriSikharamSpecs} />
                </div>
            </section>
            <section className="location pt-0" data-aos="fade-up"
                data-aos-delay="200"
                style={{ backgroundColor: "#f7f2eb", padding: "80px 0", fontFamily: "'Source Sans 3', sans-serif", }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.195422686035!2d77.7010426!3d12.895152099999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae131c6b67be83%3A0x562f0e0f1e8e09ef!2sMYTHRI%20SIKHARAM!5e0!3m2!1sen!2sin!4v1764853066118!5m2!1sen!2sin"
                                width="100%"
                                height="600"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                    </div>
                    <div className="row mt-5  justify-content-center">
                        {/* Left side heading */}
                        <div className="col-md-3 d-flex align-items-center justify-content-center">
                            <h3 className="text-center mb-5"
                                style={{
                                    fontSize: "32px",
                                    color: "#585858",
                                    lineHeight: "1.8",
                                }}>
                                Location Advantages
                            </h3>
                        </div>

                        {/* Right side location list */}
                        <div className="col-md-9">
                            <div
                                className="row"
                                style={{
                                    fontSize: "16px",
                                    color: "#e3e3e3",
                                    lineHeight: "2",
                                    fontFamily: "'Playfair Display', serif",
                                }}
                            >
                                {/* === Column 1: IT PARKS === */}
                                <div className="col-md-6 col-sm-6 col-12 mb-4">
                                    <h5 style={{ color: "#c79a3a", fontWeight: "600" }}>IT PARKS</h5>
                                    <p className="mb-1">RGA Tech Park <span style={{ float: "right" }}>2 Min</span></p>
                                    <p className="mb-1">Wipro HQ <span style={{ float: "right" }}>2 Min</span></p>
                                    <p className="mb-1">RMZ Ecoworld <span style={{ float: "right" }}>12 Min</span></p>
                                    <p className="mb-1">Intel <span style={{ float: "right" }}>18 Min</span></p>
                                    <p className="mb-1">RMZ Ecospace <span style={{ float: "right" }}>18 Min</span></p>
                                    <p className="mb-1">Cessna Business Tech Park <span style={{ float: "right" }}>19 Min</span></p>
                                    <p className="mb-1">HSR Layout <span style={{ float: "right" }}>22 Min</span></p>
                                    <p className="mb-1">Electronic City <span style={{ float: "right" }}>30 Min</span></p>
                                </div>

                                {/* === Column 2: SCHOOLS === */}
                                <div className="col-md-6 col-sm-6 col-12 mb-4">
                                    <h5 style={{ color: "#c79a3a", fontWeight: "600" }}>SCHOOLS</h5>
                                    <p className="mb-1">TSIB Bangalore <span style={{ float: "right" }}>7 Min</span></p>
                                    <p className="mb-1">DPS East <span style={{ float: "right" }}>8 Min</span></p>
                                    <p className="mb-1">Harvest International School <span style={{ float: "right" }}>9 Min</span></p>
                                    <p className="mb-1">Prakriya Green Wisdom School <span style={{ float: "right" }}>10 Min</span></p>
                                    <p className="mb-1">Greenwood High International <span style={{ float: "right" }}>11 Min</span></p>
                                    <p className="mb-1">Primus International School <span style={{ float: "right" }}>12 Min</span></p>
                                    <p className="mb-1">Oakridge International School <span style={{ float: "right" }}>13 Min</span></p>
                                </div>

                                {/* === Column 3: HOSPITALS === */}
                                <div className="col-md-6 col-sm-6 col-12 mb-4">
                                    <h5 style={{ color: "#c79a3a", fontWeight: "600" }}>HOSPITALS</h5>
                                    <p className="mb-1">Punarjani Ayurvedic Hospital <span style={{ float: "right" }}>5 Min</span></p>
                                    <p className="mb-1">Belenus Champion Hospital <span style={{ float: "right" }}>10 Min</span></p>
                                    <p className="mb-1">Cloudnine Hospital <span style={{ float: "right" }}>10 Min</span></p>
                                    <p className="mb-1">Motherhood Hospital (Sarjapur) <span style={{ float: "right" }}>12 Min</span></p>
                                    <p className="mb-1">Manipal Hospital (Bellandur) <span style={{ float: "right" }}>15 Min</span></p>
                                    <p className="mb-1">Sakra World Hospital <span style={{ float: "right" }}>18 Min</span></p>
                                    <p className="mb-1">Columbia Asia Hospital <span style={{ float: "right" }}>22 Min</span></p>
                                </div>

                                {/* === Column 4: NEARBY AREA === */}
                                <div className="col-md-6 col-sm-6 col-12 mb-4">
                                    <h5 style={{ color: "#c79a3a", fontWeight: "600" }}>NEARBY AREA</h5>
                                    <p className="mb-1">D-Mart <span style={{ float: "right" }}>2 Min</span></p>
                                    <p className="mb-1">Decathlon <span style={{ float: "right" }}>5 Min</span></p>
                                    <p className="mb-1">Big Pitcher <span style={{ float: "right" }}>10 Min</span></p>
                                    <p className="mb-1">The Bier Library <span style={{ float: "right" }}>10 Min</span></p>
                                    <p className="mb-1">Upcoming INOX <span style={{ float: "right" }}>17 Min </span></p>
                                    <p className="mb-1">Central Mall, Bellandur <span style={{ float: "right" }}>18 Min</span></p>
                                    <p className="mb-1">HSR Layout <span style={{ float: "right" }}>22 Min</span></p>
                                    <p className="mb-1">Forum Mall, Koramangala <span style={{ float: "right" }}>28 Min</span></p>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section data-aos="fade-up"
                data-aos-delay="200" className="p-0">
                <div className="container g-0">
                    <Image
                        src="/images/sikharam/Swimming pool_sikharam.webp"
                        alt="Tennis Player"
                        width={600}
                        height={400}
                        className="img-fluid w-100"
                    />
                </div>
            </section>
            <section data-aos="fade-up"
                data-aos-delay="200"
                className="text-center d-none"
                style={{ backgroundColor: "#f7f2eb", padding: "80px 0", fontFamily: "'Source Sans 3', sans-serif", }}
            >
                <div className="container">
                    {/* Section Title */}
                    <h3 className="text-center mb-5"
                        style={{
                            fontSize: "35px",
                            color: "#585858",
                            lineHeight: "1.8",
                        }}>
                        The Nandi Hills
                    </h3>

                    {/* Paragraph */}
                    <p
                        className="mx-auto d-none"
                        style={{
                            marginTop: "0px",

                            fontSize: "19px",
                            color: "#585858",
                            lineHeight: "1.8",
                        }}
                    >
                        Nandi Hills is a prime location, offering serene living with significant land appreciation—prices rising over 20% annually from the last 6 years. Upcoming infrastructure like Foxconn, Bengaluru Airport City, and luxury hotels will enhance connectivity and lifestyle. Investing here means enjoying both natural beauty and strong future returns.
                    </p>

                    <div className="col-lg-10 mx-auto">
                        <Image
                            src="/images/sikharam/Banner image2_sikharam.webp"
                            alt="Tennis Player"
                            width={600}
                            height={400}
                            className="img-fluid w-100 mt-5"
                        />

                        <p
                            className="mx-auto"
                            style={{
                                marginTop: "60px",
                                maxWidth: "900px",
                                fontSize: "19px",
                                color: "#585858",
                                lineHeight: "1.8",
                            }}
                        >
                            For over 40 years, SRK Infra has been building trust alongside structures. Founded on ‘dharma’, quality, and design excellence, we create value for communities while pursuing perfection. Hence, we’ve transformed into SRKP with a renewed vision to pioneer next generation developmental excellence.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
