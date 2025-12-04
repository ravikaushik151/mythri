"use client";

import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Carousel, Container, Row, Col, Form, Button, Modal } from "react-bootstrap";
import Image from "next/image";
import ScheduleVisitForm from "../components/ScheduleVisitForm";

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
            <section className="p-0">
                <Carousel fade interval={3000}>
                    {/* === Slide 1 === */}
                    <Carousel.Item>
                        <picture>
                            {/* Mobile Image */}
                            <source
                                media="(max-width: 767px)"
                                srcSet="/images/sankalp/mobile banner_sankalp.webp"
                            />
                            {/* Desktop Image */}
                            <img
                                className="d-block w-100"
                                src="/images/sankalp/Website banner copy.webp"
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
                        src="/images/sankalp/Mythri Sankalp DKM Logo copy.webp"
                        alt="Mythri Builders"
                        width={200}
                        height={300}
                        className="img-fluid rounded"
                    />

                    {/* ===== Description ===== */}
                    <p
                        className="mx-auto mt-3"
                        style={{
                            maxWidth: "700px",
                            fontSize: "19px",
                            color: "#585858",
                            lineHeight: "1.8",
                            fontFamily: "'Source Sans 3', sans-serif",
                        }}
                    >
                        Tucked away in the serene enclave of KR Puram, Mythri Sankalp is where Roman-inspired architecture meets modern city living. Designed for those who value elegance and practicality, it offers a calm retreat amidst Bengaluru’s bustling energy.
                    </p>
                    <p
                        className="mx-auto mt-3"
                        style={{
                            maxWidth: "700px",
                            fontSize: "19px",
                            color: "#585858",
                            lineHeight: "1.8",
                            fontFamily: "'Source Sans 3', sans-serif",
                        }}
                    >
                        Every residence is crafted to balance aesthetics with functionality - where natural light, ventilation, and thoughtful design redefine everyday comfort. Here, life flows seamlessly between family, community, and tranquility.
                    </p>

                    {/* ===== Info Row ===== */}
                    <Row
                        className="justify-content-center mt-5 mb-4 text-center"
                        style={{
                            fontSize: "16px",
                            color: "#4b3a2a",
                        }}
                    >
                        <Col md={3} sm={6} xs={12} className="mb-3">
                            <h3 className="mb-md-0 mb-4 microsite-about">
                                2 & 3 BHK <br /> Premium Homes
                            </h3>
                        </Col>

                        <Col md={3} sm={6} xs={12} className="mb-3 border-start border-end">
                            <h3 className="mb-md-0 mb-4 microsite-about">
                                KR Puram <br /> Bengaluru
                            </h3>
                        </Col>

                        <Col md={3} sm={6} xs={12} className="mb-3">
                            <h3 className="mb-0 microsite-about">
                                35 Lifestyle <br /> Amenities
                            </h3>
                        </Col>
                    </Row>

                    {/* ===== Image ===== */}
                    <div className="mt-4">
                        <Image
                            src="/images/sankalp/Sity_microsite.webp"
                            alt="Mythri Builders"
                            width={900}
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
                            maxWidth: "700px",
                            fontSize: "19px",
                            color: "#585858",
                            lineHeight: "1.8",
                            fontFamily: "'Source Sans 3', sans-serif",
                        }}
                    >Arched balconies, clean facades, and well-ventilated layouts bring classical beauty into a modern context. <br /> Every home is designed to maximize natural light and airflow, creating a seamless blend of architectural artistry and everyday comfort.
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
                <div className="container-fluid g-0">
                    <Image
                        src="/images/sankalp/banner image.webp"
                        alt="Tennis Player"
                        width={600}
                        height={400}
                        className="img-fluid w-100"
                    />
                </div>
            </section>
            <section data-aos="fade-up"
                data-aos-delay="200" className="life-earth" style={{ backgroundColor: "#f7f2eb", padding: "80px 0", fontFamily: "'Source Sans 3', sans-serif", }}>
                <div className="container-fluid">
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
                                    maxWidth: "700px",
                                    fontSize: "19px",
                                    color: "#585858",
                                    lineHeight: "1.8",
                                    width: "90%",
                                }}
                            >
                                Every space at Mythri Sankalp is crafted to enrich daily life - blending relaxation, recreation, and community together. <br />
                                From quiet corners to active zones, discover amenities designed for both peace and play.

                            </p>
                        </div>
                        <div className="col-md-6 text-center p-0">
                            <Image
                                src="/images/sankalp/Amenities.webp"
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
                                src="/images/sankalp/Amenities2.webp"
                                alt="Child on swing"
                                width={600}
                                height={400}
                                className="img-fluid w-100"
                            />
                        </div>
                        <div className="col-md-6 px-5">
                            <div
                                style={{
                                    maxWidth: "700px",
                                    fontSize: "19px",
                                    color: "#585858",
                                    lineHeight: "1.8",
                                }}
                            >
                                <div className="row align-items-center mb-5">

                                    <div className="col-md-6 col-6 px-md-5">
                                        <ul className="list-unstyled">
                                            <li>Clubhouse</li>
                                            <li>Swimming Pool</li>
                                            <li>Kids Pool</li>
                                            <li>Open Amphitheatre</li>
                                            <li>Half Basketball Court</li>
                                            <li>Multipurpose Play Turf</li>
                                            <li>Cricket Pitch</li>
                                            <li>Indoor Games</li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6 col-6 px-md-5">
                                        <ul className="list-unstyled">
                                            <li>Kids Play Area</li>
                                            <li>Walking Jogging Track</li>
                                            <li>Elder Sitting Zone</li>
                                            <li>Adventure Wall</li>
                                            <li>Fragrance Garden</li>
                                            <li>Bonfire Court</li>
                                            <li>Outdoor Workstation</li>
                                            <li>Barbeque Zone</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <p
                                className="mx-auto mb-0"
                                style={{
                                    marginTop: "70px",
                                    maxWidth: "700px",
                                    fontSize: "19px",
                                    color: "#585858",
                                    lineHeight: "1.8",
                                }}
                            >Every corner at Mythri Sankalp is designed with purpose and poise.
                                Grand entrances welcome you with timeless elegance, landscaped courtyards breathe serenity into your routine, and airy balconies invite the outdoors into your home. <br />
                                Whether it’s a quiet morning yoga session, an evening by the pool, or quality time with loved ones - these amenity spaces adapt beautifully to every mood, every moment, and every version of your day.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section data-aos="fade-up"
                data-aos-delay="200" className="p-0">
                <div className="container-fluid g-0">
                    <Image
                        src="/images/sankalp/interior_sank.webp"
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
                            maxWidth: "700px",
                            fontSize: "19px",
                            color: "#585858",
                            lineHeight: "1.8",
                        }}
                    >
                        Every detail is designed to support this way of life. Double-height lobbies
                        create an airy welcome, spacious balconies bring the outdoors closer, and
                        verandas encourage slow evenings spent in good company. Whether you’re
                        seeking solitude, movement, or togetherness, the spaces adapt to every
                        version of your day.
                    </p>

                    {/* Buttons */}
                    <div className="d-flex justify-content-center gap-3 mt-4">
                        <button
                            className="btn btn-dark px-4 py-2"
                            style={{ borderRadius: 0, fontSize: "14px", letterSpacing: "1px" }}
                            onClick={() => handleShow("/images/sankalp/floor plan_Sankalp.webp")}
                        >
                            FLOOR PLANS
                        </button>
                        <button
                            className="btn btn-dark px-4 py-2"
                            style={{ borderRadius: 0, fontSize: "14px", letterSpacing: "1px" }}
                            onClick={() => handleShow("/images/sankalp/master_plan_Sankalp.webp")}
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
                        The Project Setting at Sankalp
                    </h3>

                    <div className="col-lg-10 mx-auto">
                        <Carousel indicators={false} controls={true} interval={3000}>
                            <Carousel.Item>
                                <Image
                                    src="/images/sankalp/project img.webp"
                                    alt="Project View 1"
                                    width={900}
                                    height={400}
                                    className="d-block w-100 rounded carousel-img"
                                />
                            </Carousel.Item>

                            <Carousel.Item>
                                <Image
                                    src="/images/sankalp/project img 2webp.webp"
                                    alt="Project View 2"
                                    width={900}
                                    height={400}
                                    className="d-block w-100 rounded carousel-img"
                                />
                            </Carousel.Item>

                            <Carousel.Item>
                                <Image
                                    src="/images/sankalp/project img 3.webp"
                                    alt="Project View 3"
                                    width={900}
                                    height={400}
                                    className="d-block w-100 rounded carousel-img"
                                />
                            </Carousel.Item>
                        </Carousel>
                        <p
                            className="mx-auto d-none"
                            style={{
                                marginTop: "60px",
                                maxWidth: "700px",
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
            <section className="location" data-aos="fade-up"
                data-aos-delay="200"
                style={{ backgroundColor: "#f7f2eb", padding: "80px 0", fontFamily: "'Source Sans 3', sans-serif", }}
            >
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 text-center">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.037774570284!2d77.6996934!3d13.0332665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11a726798437%3A0xcb8d846f93060b10!2sMythri%20Sankalp%20DKM!5e0!3m2!1sen!2sin!4v1764853141521!5m2!1sen!2sin"
                                width="100%"
                                height="600"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            >
                            </iframe>
                        </div>
                    </div>
                    <div className="row mt-5  justify-content-center">
                        {/* Left side heading */}
                        <div className="col-md-3 d-flex align-items-center justify-content-center">
                            <h3 className="text-center mb-5"
                                style={{
                                    fontSize: "35px",
                                    color: "#585858",
                                    lineHeight: "1.8",
                                }}>
                                Location Advantages
                            </h3>
                        </div>

                        {/* Right side location list */}
                        <div className="col-md-9 px-4">
                            <div
                                className="row"
                                style={{
                                    fontSize: "19px",
                                    color: "#e3e3e3",
                                    lineHeight: "2",
                                    fontFamily: "'Playfair Display', serif",
                                }}
                            >
                                <div className="col-md-4 col-sm-6 col-12 mb-4">
                                    <h5 style={{ color: "#c79a3a", fontWeight: "600" }}>BUSINESS HUBS</h5>
                                    <p className="mb-1">RMZ Infinity <span style={{ float: "right" }}>19 Min</span></p>
                                    <p className="mb-1">Beary’s Global Research (BCRT) <span style={{ float: "right" }}>23 Min</span></p>
                                    <p className="mb-1">Bhoruka Technology Park <span style={{ float: "right" }}>25 Min</span></p>
                                    <p className="mb-1">Bagmane Tech Park <span style={{ float: "right" }}>26 Min</span></p>
                                    <p className="mb-1">Nalapad Brigade Centre <span style={{ float: "right" }}>26 Min</span></p>
                                    <p className="mb-1">Bagmane Business Park <span style={{ float: "right" }}>26 Min</span></p>
                                </div>

                                {/* === Column 2: SCHOOLS === */}
                                <div className="col-md-4 col-sm-6 col-12 mb-4">
                                    <h5 style={{ color: "#c79a3a", fontWeight: "600" }}>SCHOOLS</h5>
                                    <p className="mb-1">Birla Open Minds International <span style={{ float: "right" }}>2 Min</span></p>
                                    <p className="mb-1">Christ International School <span style={{ float: "right" }}>2 Min</span></p>
                                    <p className="mb-1">New Baldwin International School <span style={{ float: "right" }}>5 Min</span></p>
                                    <p className="mb-1">Narayana E-Techno School <span style={{ float: "right" }}>5 Min</span></p>
                                    <p className="mb-1">New Indus Valley School <span style={{ float: "right" }}>6 Min</span></p>
                                    <p className="mb-1">Don Bosco College <span style={{ float: "right" }}>7 Min</span></p>
                                </div>

                                {/* === Column 3: HEALTHCARE === */}
                                <div className="col-md-4 col-sm-6 col-12 mb-4">
                                    <h5 style={{ color: "#c79a3a", fontWeight: "600" }}>HEALTHCARE</h5>
                                    <p className="mb-1">Sathya Sai Orthopaedic <span style={{ float: "right" }}>14 Min</span></p>
                                    <p className="mb-1">East Point Hospital <span style={{ float: "right" }}>16 Min</span></p>
                                    <p className="mb-1">Columbia Hospital <span style={{ float: "right" }}>18 Min</span></p>
                                    <p className="mb-1">Miracle Hospital <span style={{ float: "right" }}>26 Min</span></p>
                                    <p className="mb-1">Aaxis Hospital <span style={{ float: "right" }}>26 Min</span></p>
                                </div>

                                {/* === Column 4: SHOPPING MALLS === */}
                                <div className="col-md-4 col-sm-6 col-12 mb-4">
                                    <h5 style={{ color: "#c79a3a", fontWeight: "600" }}>SHOPPING MALLS</h5>
                                    <p className="mb-1">Gopalan Grand Mall <span style={{ float: "right" }}>20 Min</span></p>
                                    <p className="mb-1">Orion Uptown Mall <span style={{ float: "right" }}>20 Min</span></p>
                                    <p className="mb-1">Decathlon <span style={{ float: "right" }}>20 Min</span></p>
                                    <p className="mb-1">Phoenix Marketcity <span style={{ float: "right" }}>25 Min</span></p>
                                </div>

                                {/* === Column 5: CONNECTIVITY === */}
                                <div className="col-md-4 col-sm-6 col-12 mb-4">
                                    <h5 style={{ color: "#c79a3a", fontWeight: "600" }}>CONNECTIVITY</h5>
                                    <p className="mb-1">KR Puram Metro Station <span style={{ float: "right" }}>15 Min</span></p>
                                    <p className="mb-1">KR Puram Railway Station <span style={{ float: "right" }}>15 Min</span></p>
                                    <p className="mb-1">Hoodi Metro Station <span style={{ float: "right" }}>25 Min</span></p>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section data-aos="fade-up"
                data-aos-delay="200" className="p-0">
                <div className="container-fluid g-0">
                    <Image
                        src="/images/sankalp/Swimming pool_sity_microsite copy.webp"
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
                            maxWidth: "700px",
                            fontSize: "19px",
                            color: "#585858",
                            lineHeight: "1.8",
                        }}
                    >
                        Nandi Hills is a prime location, offering serene living with significant land appreciation—prices rising over 20% annually from the last 6 years. Upcoming infrastructure like Foxconn, Bengaluru Airport City, and luxury hotels will enhance connectivity and lifestyle. Investing here means enjoying both natural beauty and strong future returns.
                    </p>

                    <div className="col-lg-10 mx-auto">
                        <Image
                            src="/images/sankalp/interior2.webp"
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
