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
import { useMenu } from "../context/MenuContext";
import Gallery from "../components/Gallery";
import { useEnquiry } from "../components/EnquiryContext";
import {
    FaHome,
    FaMapMarkedAlt,
    FaSpa,
    FaExpandArrowsAlt,
    FaCity,
    FaCompass,
    FaLeaf
} from "react-icons/fa";
import {
    FaSwimmingPool,
    FaChild,
    FaBasketballBall,
    FaDumbbell,
    FaWalking,
    FaBolt,
    FaShieldAlt,
    FaGamepad,
    FaUsers,
    FaVideo,
    FaTree,
    FaPaw,
    FaLaptop,
    FaChair,
    FaCouch,
    FaUmbrella,
    FaTableTennis,
    FaBaseballBall,
    FaSkating,
    FaMountain,
    FaParachuteBox,
    FaMusic,
    FaFire,
    FaChessKing,
    FaTshirt
} from "react-icons/fa";

export default function MicoristePage() {
    const { openDrawer } = useEnquiry();
    const { menuOpen } = useMenu();
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
                <div className={`rera-badge ${menuOpen ? "hide-rera" : ""}`}>
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
                            fontSize: "16px",
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
                            fontSize: "16px",
                            color: "#585858",
                            lineHeight: "1.8",
                            fontFamily: "'Source Sans 3', sans-serif",
                        }}
                    >
                        Located off Sarjapur Road, Hadosiddapura, this premium development of thoughtfully planned Flats For Sale In Sarjapur Road blends contemporary architecture, open planning, and serene landscaping. Each home, including the efficiently designed 2 BHK flats in Sarjapur Road, is crafted to offer abundant natural light, cross ventilation, and seamless functionality. <br /> Here, life moves at your pace - calm, connected, and elevated.
                    </p>

                    {/* ===== Info Row ===== */}
                    <div className="d-block">
                        <Container className="mt-4 mb-4">
                            <Row className="g-3 text-center">

                                <Col xs={4}>
                                    <div className="p-3 h-100 border rounded-3 mobile-highlight">
                                        <FaHome size={22} color="#4b3a2a" className="mb-2" />
                                        <h6 className="fw-bold mb-1">2 & 3 BHK</h6>
                                        <p className="text-muted mb-0">Premium Homes</p>
                                    </div>
                                </Col>

                                <Col xs={4}>
                                    <div className="p-3 h-100 border rounded-3 mobile-highlight">
                                        <FaMapMarkedAlt size={22} color="#4b3a2a" className="mb-2" />
                                        <h6 className="fw-bold mb-1">Sarjapur Road</h6>
                                        <p className="text-muted mb-0">Bengaluru</p>
                                    </div>
                                </Col>

                                <Col xs={4}>
                                    <div className="p-3 h-100 border rounded-3 mobile-highlight">
                                        <FaSpa size={22} color="#4b3a2a" className="mb-2" />
                                        <h6 className="fw-bold mb-1">60+</h6>
                                        <p className="text-muted mb-0">Amenities</p>
                                    </div>
                                </Col>

                                <Col xs={4}>
                                    <div className="p-3 h-100 border rounded-3 mobile-highlight">
                                        <FaExpandArrowsAlt size={22} color="#4b3a2a" className="mb-2" />
                                        <h6 className="fw-bold mb-1">2.04 Acres</h6>
                                        <p className="text-muted mb-0">Project Area</p>
                                    </div>
                                </Col>

                                <Col xs={4}>
                                    <div className="p-3 h-100 border rounded-3 mobile-highlight">
                                        <FaCity size={22} color="#4b3a2a" className="mb-2" />
                                        <h6 className="fw-bold mb-1">182</h6>
                                        <p className="text-muted mb-0">Apartments</p>
                                    </div>
                                </Col>

                                <Col xs={4}>
                                    <div className="p-3 h-100 border rounded-3 mobile-highlight">
                                        <FaLeaf size={22} color="#4b3a2a" className="mb-2" />
                                        <h6 className="fw-bold mb-1">60%</h6>
                                        <p className="text-muted mb-0">Open Space</p>
                                    </div>
                                </Col>

                            </Row>
                        </Container>
                    </div>

                    <section className="pricing-section" data-aos="fade-up" data-aos-delay="200">
                        <div className="container">

                            {/* PROJECT HEADER */}
                            <div className="row">
                                <div className="col-12">
                                    <div className="project-header text-center">
                                        <h1 className="text-dark mb-3">Mythri Sikharam – Off Sarjapur Road</h1>

                                        <span className="highlight">
                                            2 & 3 BHK Luxury Apartments
                                        </span>

                                        <p className="sub-text">
                                            2.04 Acres | 182 Apartments | 60+ Amenities
                                        </p>

                                        <span className="highlight">
                                            Register Now to Avail Special Launch Prices
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* CONFIGURATION TABLE */}
                            <div className="row">
                                <div className="col-12">
                                    <div className="table-wrapper">
                                        <table className="pricing-table">
                                            <thead>
                                                <tr>
                                                    <th>Configuration</th>
                                                    <th>Area Range</th>
                                                    <th>Price</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                <tr>
                                                    <td><b>2 BHK</b></td>
                                                    <td>1,203 – 1,220 sq. ft</td>
                                                    <td>
                                                        <button className="unlock-btn" onClick={openDrawer}>
                                                            Unlock Price
                                                        </button>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td><b>3 BHK 2T</b></td>
                                                    <td>1,390 – 1,452 sq. ft</td>
                                                    <td>
                                                        <button className="unlock-btn" onClick={openDrawer}>
                                                            Unlock Price
                                                        </button>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td><b>3 BHK 3T</b></td>
                                                    <td>1,531 sq. ft</td>
                                                    <td>
                                                        <button className="unlock-btn" onClick={openDrawer}>
                                                            Unlock Price
                                                        </button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            {/* FOOTER NOTE */}
                            <div className="row mt-5">
                                <div className="col-12 footer-note">
                                    <mark>
                                        Limited Time Offer <br />
                                        RERA Approved: PRM/KA/RERA/1251/446/PR/280525/007790
                                    </mark>
                                </div>
                            </div>

                        </div>
                    </section>

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
                        className="mx-auto mt-5"
                        style={{
                            maxWidth: "900px",
                            fontSize: "16px",
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
                <div className="container my-5">
                    <h2 className="gallery-title small-title text-center">The Art of Thoughtful Amenity</h2>
                    <p
                        className="mx-auto mt-3 text-center"
                        style={{
                            maxWidth: "900px",
                            fontSize: "16px",
                            color: "#585858",
                            lineHeight: "1.8",
                            fontFamily: "'Source Sans 3', sans-serif",
                        }}
                    >Every space at Mythri Sikharam is crafted to enrich daily life blending relaxation, recreation, and community together. From quiet corners to active zones, discover amenities designed for both peace and play.</p>
                </div>

            </section>
            <section data-aos="fade-up"
                data-aos-delay="200" className="life-earth" style={{ backgroundColor: "#f7f2eb", fontFamily: "'Source Sans 3', sans-serif", }}>
                <div className="container">
                    <div className="text-center">
                        <h2 className="gallery-title small-title" >Amenities</h2>
                    </div>

                    {/* Row 2: Image left, Text right */}
                    <div className="row align-items-center ">

                        <div className="col-md-12">
                            <div
                                style={{
                                    fontSize: "16px",
                                    color: "#585858",
                                    lineHeight: "1.8",
                                }}
                            >
                                <div className="row">
                                    <div className="col-12">
                                        <div className="amenities-section">

                                            <div className="row g-2">
                                                {[
                                                    { icon: <FaUsers size={60} color="#4b3a2a" className="mb-2" />, label: "Clubhouse with Terrace" },
                                                    { icon: <FaLaptop size={60} color="#4b3a2a" className="mb-2" />, label: "Outdoor Working Zone" },
                                                    { icon: <FaUsers size={60} color="#4b3a2a" className="mb-2" />, label: "Multipurpose Hall" },
                                                    { icon: <FaSwimmingPool size={60} color="#4b3a2a" className="mb-2" />, label: "Swimming Pool & Kids Pool" },
                                                    { icon: <FaSpa size={60} color="#4b3a2a" className="mb-2" />, label: "Jacuzzi with Seating" },
                                                    { icon: <FaDumbbell size={60} color="#4b3a2a" className="mb-2" />, label: "Gymnasium & Outdoor Gym" },
                                                    { icon: <FaSpa size={60} color="#4b3a2a" className="mb-2" />, label: "Zumba & Rooftop Yoga Deck" },
                                                    { icon: <FaGamepad size={60} color="#4b3a2a" className="mb-2" />, label: "Indoor Games Room" },
                                                    { icon: <FaChild size={60} color="#4b3a2a" className="mb-2" />, label: "Creche (Day Care)" },
                                                    { icon: <FaLaptop size={60} color="#4b3a2a" className="mb-2" />, label: "Coworking Zone" },
                                                    { icon: <FaTshirt size={60} color="#4b3a2a" className="mb-2" />, label: "Laundry Service" },
                                                    { icon: <FaChair size={60} color="#4b3a2a" className="mb-2" />, label: "Waiting Lounge" },
                                                    { icon: <FaCouch size={60} color="#4b3a2a" className="mb-2" />, label: "Seating & Swing Pods" },
                                                    { icon: <FaUmbrella size={60} color="#4b3a2a" className="mb-2" />, label: "Canopy & Seaters" },
                                                    { icon: <FaTableTennis size={60} color="#4b3a2a" className="mb-2" />, label: "Pickleball Court" },
                                                    { icon: <FaBasketballBall size={60} color="#4b3a2a" className="mb-2" />, label: "Half Basketball Court" },
                                                    { icon: <FaBaseballBall size={60} color="#4b3a2a" className="mb-2" />, label: "Cricket Practice Pitch/Net" },
                                                    { icon: <FaSkating size={60} color="#4b3a2a" className="mb-2" />, label: "Skating Rink" },
                                                    { icon: <FaWalking size={60} color="#4b3a2a" className="mb-2" />, label: "Jogging Track" },
                                                    { icon: <FaMountain size={60} color="#4b3a2a" className="mb-2" />, label: "Rock Climbing Wall/Hall" },
                                                    { icon: <FaTree size={60} color="#4b3a2a" className="mb-2" />, label: "Jungle Gym & Kids' Play Area" },
                                                    { icon: <FaParachuteBox size={60} color="#4b3a2a" className="mb-2" />, label: "Trampoline Area" },
                                                    { icon: <FaVideo size={60} color="#4b3a2a" className="mb-2" />, label: "Mini Theatre" },
                                                    { icon: <FaUsers size={60} color="#4b3a2a" className="mb-2" />, label: "Amphitheatre Terrace" },
                                                    { icon: <FaMusic size={60} color="#4b3a2a" className="mb-2" />, label: "Performance Deck" },
                                                    { icon: <FaFire size={60} color="#4b3a2a" className="mb-2" />, label: "Barbeque Area & Bonfire Court" },
                                                    { icon: <FaPaw size={60} color="#4b3a2a" className="mb-2" />, label: "Pet Park" },
                                                    { icon: <FaChessKing size={60} color="#4b3a2a" className="mb-2" />, label: "Giant Chess" },
                                                ].map((item, i) => (
                                                    <div key={i} className="col-lg-3 col-md-4 col-6">
                                                        <div className="amenity-box text-center p-2">
                                                            <div className="amenity-icon">{item.icon}</div>
                                                            <p className="fs-6">{item.label}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
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
                        src="/images/sikharam/Interior img1_sikharam.webp"
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
                            fontSize: "16px",
                            color: "#585858",
                            lineHeight: "1.8",
                        }}
                    >
                        Every detail is designed to support this way of life. Double-height lobbies create an airy welcome, spacious balconies bring the outdoors closer, and verandas encourage slow evenings spent in good company. Whether you’re seeking solitude, movement, or togetherness, these 2 BHK flats in Sarjapur Road and expansive 3 BHK residences adapt to every version of your day.
                    </p>

                    {/* Buttons */}
                    <div className="d-flex justify-content-center gap-3 mt-4">
                        <Button
                            variant="dark"
                            className="px-4 py-2"
                            style={{ borderRadius: 0, fontSize: "14px", letterSpacing: "1px" }}
                            onClick={() => handleShow("/images/sikharam/Floorplan_sikharam.webp")}
                        >
                            FLOOR PLANS
                        </Button>
                        <Button
                            variant="dark"
                            className="px-4 py-2"
                            style={{ borderRadius: 0, fontSize: "14px", letterSpacing: "1px" }}
                            onClick={() => handleShow("/images/sikharam/Masterplan_sikharam.webp")}
                        >
                            MASTER PLAN
                        </Button>
                    </div>

                    {/* Divider */}
                    <div className="my-5"></div>

                    <Gallery
                        images={[
                            "/images/sikharam/Sikharam_project image1.webp",
                            "/images/sikharam/Sikharam_project image2.webp",
                            "/images/sikharam/Sikharam_project image3.webp",
                            "/images/sikharam/Swimming pool_sikharam.webp",
                            "/images/sikharam/Website banner_sikharam.webp"
                        ]}
                        title="GALLERY"
                        subtitle="Luxury 2 & 3 BHK Apartments in Off Sarjapur Road"
                    />

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
                thumbnail="/images/sikharam-youtube.webp"
                youtubeId="YeIsDzqscR8"
            />
            <section className="specifications" data-aos="fade-up" data-aos-delay="200">
                <div className="container">
                    {/* Heading */}
                    <div className="row">
                        <div className="col-12">
                            <div className="text-center">
                                <h2 className="gallery-title small-title">Specifications</h2>
                            </div>
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
                        <div className="col-md-12 d-flex align-items-center justify-content-center">
                            <h3 className="text-center mb-4 gallery-title small-title text-size-upper"
                                style={{
                                    fontSize: "32px",
                                    fontFamily: "'Playfair Display', serif",
                                    padding: "30px 0"
                                }}>
                                Location Advantages
                            </h3>
                        </div>

                        {/* Right side location list */}
                        <div className="col-md-12">
                            <div
                                className="row"
                                style={{
                                    fontSize: "16px",
                                    color: "#585858",
                                    lineHeight: "2",
                                    fontFamily: "'Playfair Display', serif",
                                }}
                            >
                                {/* === Column 1: IT PARKS === */}
                                <div className="col-md-6 col-sm-6 col-12 mb-4">
                                    <h5 style={{ color: "#c79a3a", fontWeight: "600" }}>IT PARKS</h5>
                                    <p className="mb-1">RGA Tech Park <span className="location-time" style={{ float: "right" }}>2 Min</span></p>
                                    <p className="mb-1">Wipro HQ <span className="location-time" style={{ float: "right" }}>2 Min</span></p>
                                    <p className="mb-1">RMZ Ecoworld <span className="location-time" style={{ float: "right" }}>12 Min</span></p>
                                    <p className="mb-1">Intel <span className="location-time" style={{ float: "right" }}>18 Min</span></p>
                                    <p className="mb-1">RMZ Ecospace <span className="location-time" style={{ float: "right" }}>18 Min</span></p>
                                    <p className="mb-1">Cessna Business Tech Park <span className="location-time" style={{ float: "right" }}>19 Min</span></p>
                                    <p className="mb-1">HSR Layout <span className="location-time" style={{ float: "right" }}>22 Min</span></p>
                                    <p className="mb-1">Electronic City <span className="location-time" style={{ float: "right" }}>30 Min</span></p>
                                </div>

                                {/* === Column 2: SCHOOLS === */}
                                <div className="col-md-6 col-sm-6 col-12 mb-4">
                                    <h5 style={{ color: "#c79a3a", fontWeight: "600" }}>SCHOOLS</h5>
                                    <p className="mb-1">TSIB Bangalore <span className="location-time" style={{ float: "right" }}>7 Min</span></p>
                                    <p className="mb-1">DPS East <span className="location-time" style={{ float: "right" }}>8 Min</span></p>
                                    <p className="mb-1">Harvest International School <span className="location-time" style={{ float: "right" }}>9 Min</span></p>
                                    <p className="mb-1">Prakriya Green Wisdom School <span className="location-time" style={{ float: "right" }}>10 Min</span></p>
                                    <p className="mb-1">Greenwood High International <span className="location-time" style={{ float: "right" }}>11 Min</span></p>
                                    <p className="mb-1">Primus International School <span className="location-time" style={{ float: "right" }}>12 Min</span></p>
                                    <p className="mb-1">Oakridge International School <span className="location-time" style={{ float: "right" }}>13 Min</span></p>
                                </div>

                                {/* === Column 3: HOSPITALS === */}
                                <div className="col-md-6 col-sm-6 col-12 mb-4">
                                    <h5 style={{ color: "#c79a3a", fontWeight: "600" }}>HOSPITALS</h5>
                                    <p className="mb-1">Punarjani Ayurvedic Hospital <span className="location-time" style={{ float: "right" }}>5 Min</span></p>
                                    <p className="mb-1">Belenus Champion Hospital <span className="location-time" style={{ float: "right" }}>10 Min</span></p>
                                    <p className="mb-1">Cloudnine Hospital <span className="location-time" style={{ float: "right" }}>10 Min</span></p>
                                    <p className="mb-1">Motherhood Hospital (Sarjapur) <span className="location-time" style={{ float: "right" }}>12 Min</span></p>
                                    <p className="mb-1">Manipal Hospital (Bellandur) <span className="location-time" style={{ float: "right" }}>15 Min</span></p>
                                    <p className="mb-1">Sakra World Hospital <span className="location-time" style={{ float: "right" }}>18 Min</span></p>
                                    <p className="mb-1">Columbia Asia Hospital <span className="location-time" style={{ float: "right" }}>22 Min</span></p>
                                </div>

                                {/* === Column 4: NEARBY AREA === */}
                                <div className="col-md-6 col-sm-6 col-12 mb-4">
                                    <h5 style={{ color: "#c79a3a", fontWeight: "600" }}>NEARBY AREA</h5>
                                    <p className="mb-1">D-Mart <span className="location-time" style={{ float: "right" }}>2 Min</span></p>
                                    <p className="mb-1">Decathlon <span className="location-time" style={{ float: "right" }}>5 Min</span></p>
                                    <p className="mb-1">Big Pitcher <span className="location-time" style={{ float: "right" }}>10 Min</span></p>
                                    <p className="mb-1">The Bier Library <span className="location-time" style={{ float: "right" }}>10 Min</span></p>
                                    <p className="mb-1">Upcoming INOX <span className="location-time" style={{ float: "right" }}>17 Min </span></p>
                                    <p className="mb-1">Central Mall, Bellandur <span className="location-time" style={{ float: "right" }}>18 Min</span></p>
                                    <p className="mb-1">HSR Layout <span className="location-time" style={{ float: "right" }}>22 Min</span></p>
                                    <p className="mb-1">Forum Mall, Koramangala <span className="location-time" style={{ float: "right" }}>28 Min</span></p>
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

                            fontSize: "16px",
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
                                fontSize: "16px",
                                color: "#585858",
                                lineHeight: "1.8",
                            }}
                        >
                            For over 40 years, SRK Infra has been building trust alongside structures. Founded on ‘dharma’, quality, and design excellence, we create value for communities while pursuing perfection. Hence, we’ve transformed into SRKP with a renewed vision to pioneer next generation developmental excellence.
                        </p>
                    </div>
                </div>
            </section>
            {/* FAQ Section */}
            <section
                data-aos="fade-up"
                data-aos-delay="200"
                className="text-center"
                style={{
                    backgroundColor: "#f7f2eb",
                    padding: "30px 0",
                    fontFamily: "'Source Sans 3', sans-serif",
                }}
            >
                <div className="container">

                    <div className="text-center">
                        <h2 className="gallery-title small-title">Frequently Asked Questions</h2>
                    </div>

                    <div className="accordion mx-auto" id="faqAccordion" style={{ maxWidth: "900px" }}>

                        {/* FAQ 1 */}
                        <div className="accordion-item mb-3">
                            <h2 className="accordion-header mb-0" id="faq1-heading">
                                <button
                                    className="accordion-button text-view-faq"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#faq1"
                                >
                                    1. What is the official RERA status and unique proposition of Mythri Sikharam?
                                </button>
                            </h2>
                            <div
                                id="faq1"
                                className="accordion-collapse collapse show"
                                aria-labelledby="faq1-heading"
                                data-bs-parent="#faqAccordion"
                            >
                                <div className="accordion-body" style={{ color: "#585858", textAlign: "left" }}>
                                    Mythri Sikharam is a luxury high-rise community with RERA No: PRM/KA/RERA/1251/446/PR/280525/007790. It offers 182 premium apartments on 2.04 acres with 60+ lifestyle amenities and 60% open space.
                                </div>
                            </div>
                        </div>

                        {/* FAQ 2 */}
                        <div className="accordion-item mb-3">
                            <h2 className="accordion-header mb-0" id="faq2-heading">
                                <button
                                    className="accordion-button collapsed text-view-faq"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#faq2"
                                >
                                    2. Where is Mythri Sikharam located?
                                </button>
                            </h2>
                            <div
                                id="faq2"
                                className="accordion-collapse collapse"
                                aria-labelledby="faq2-heading"
                                data-bs-parent="#faqAccordion"
                            >
                                <div className="accordion-body" style={{ color: "#585858", textAlign: "justify" }}>
                                    Mythri Sikharam is located off Sarjapur Road, Hadosiddapura, seamlessly connected to key IT hubs like RGA Tech Park, Wipro HQ, and RMZ Ecoworld.
                                </div>
                            </div>
                        </div>

                        {/* FAQ 3 */}
                        <div className="accordion-item mb-3">
                            <h2 className="accordion-header mb-0" id="faq3-heading">
                                <button
                                    className="accordion-button collapsed text-view-faq"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#faq3"
                                >
                                    3. What amenities are provided at Mythri Sikharam?
                                </button>
                            </h2>
                            <div
                                id="faq3"
                                className="accordion-collapse collapse"
                                aria-labelledby="faq3-heading"
                                data-bs-parent="#faqAccordion"
                            >
                                <div className="accordion-body" style={{ color: "#585858", textAlign: "justify" }}>
                                    The project boasts 60+ lifestyle amenities including a Clubhouse with Terrace, Swimming Pool, Jacuzzi, Gymnasium, Outdoor Gym, Zumba Deck, and many more, spread across 60% open space.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
