"use client";

import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Carousel, Container, Row, Col, Form, Button, Modal } from "react-bootstrap";
import Image from "next/image";
import ScheduleVisitForm from "../components/ScheduleVisitForm";
import Walkthrough from "../components/Microsite/Walkthrough";
import Specifications from "../components/Microsite/Specifications";
import { mythriSankalpSpecs } from "../data/mythriSankalp";
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
    FaFutbol,
    FaBaseballBall,
    FaChair,
    FaCouch,
    FaMusic,
    FaUtensils,
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
                    interval={null}
                    indicators={false}
                    controls={false}
                >
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
                                alt="Sankalp Project Banner"
                                style={{ height: "80vh", objectFit: "cover" }}
                            />
                        </picture>
                    </Carousel.Item>
                </Carousel>

                {/* ✅ RERA Number Overlay */}
                <div className={`rera-badge ${menuOpen ? "hide-rera" : ""}`}>
                    <strong>RERA No:</strong> PRM/KA/RERA/1251/446/PR/07042S/OO7653
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
                        src="/images/sankalp/Mythri Sankalp DKM Logo copy.webp"
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
                        Tucked away in the serene enclave of KR Puram, Mythri Sankalp is where Roman-inspired architecture meets modern city living. Designed for those who value elegance and practicality, it offers a calm retreat amidst Bengaluru’s bustling energy and is a compelling choice for buyers comparing it with any Flat In Sarjapur Road or other prime East Bengaluru locations.
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
                        Every residence is crafted to balance aesthetics with functionality - where natural light, ventilation, and thoughtful design redefine everyday comfort, offering the kind of space, light, and privacy many homebuyers seek while shortlisting a Flat In Sarjapur Road. Here, life flows seamlessly between family, community, and tranquility.
                    </p>

                    {/* ===== Info Row ===== */}
                    {/* ===== Info Row ===== */}
                    <div className="d-block">
                        <Container className="mt-4 mb-4">
                            <Row className="g-3 text-center">

                                <Col xs={4}>
                                    <div className="p-3 h-100 border rounded-3 mobile-highlight">
                                        <FaHome size={22} color="#4b3a2a" className="mb-2" />
                                        <h6 className="fw-bold mb-1">2 & 3 BHK</h6>
                                        <p className="text-muted mb-0">Homes</p>
                                    </div>
                                </Col>

                                <Col xs={4}>
                                    <div className="p-3 h-100 border rounded-3 mobile-highlight">
                                        <FaMapMarkedAlt size={22} color="#4b3a2a" className="mb-2" />
                                        <h6 className="fw-bold mb-1">KR Puram</h6>
                                        <p className="text-muted mb-0">Bengaluru</p>
                                    </div>
                                </Col>

                                <Col xs={4}>
                                    <div className="p-3 h-100 border rounded-3 mobile-highlight">
                                        <FaSpa size={22} color="#4b3a2a" className="mb-2" />
                                        <h6 className="fw-bold mb-1">35+</h6>
                                        <p className="text-muted mb-0">Amenities</p>
                                    </div>
                                </Col>

                                <Col xs={4}>
                                    <div className="p-3 h-100 border rounded-3 mobile-highlight">
                                        <FaExpandArrowsAlt size={22} color="#4b3a2a" className="mb-2" />
                                        <h6 className="fw-bold mb-1">1.08 Acres</h6>
                                        <p className="text-muted mb-0">Project Area</p>
                                    </div>
                                </Col>

                                <Col xs={4}>
                                    <div className="p-3 h-100 border rounded-3 mobile-highlight">
                                        <FaCity size={22} color="#4b3a2a" className="mb-2" />
                                        <h6 className="fw-bold mb-1">101</h6>
                                        <p className="text-muted mb-0">Apartments</p>
                                    </div>
                                </Col>

                                <Col xs={4}>
                                    <div className="p-3 h-100 border rounded-3 mobile-highlight">
                                        <FaCompass size={22} color="#4b3a2a" className="mb-2" />
                                        <h6 className="fw-bold mb-1">Vaastu</h6>
                                        <p className="text-muted mb-0">Compliant</p>
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
                                        <h1 className="text-dark mb-3">Mythri Sankalp – KR Puram</h1>

                                        <span className="highlight">
                                            2 & 3 BHK Premium Apartments
                                        </span>

                                        <p className="sub-text">
                                            1.08 Acres | 101 Apartments | 35+ Amenities
                                        </p>

                                        <span className="highlight">
                                            Register Now to Avail New Launch Special Prices
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
                                                    <td>On Request</td>
                                                    <td>
                                                        <button className="unlock-btn" onClick={openDrawer}>
                                                            Unlock Price
                                                        </button>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td><b>3 BHK</b></td>
                                                    <td>On Request</td>
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
                                        New Launch Offer – Limited Period Only <br />
                                        RERA Approved: PRM/KA/RERA/1251/446/PR/07042S/OO7653
                                    </mark>
                                </div>
                            </div>

                        </div>
                    </section>


                    {/* ===== Image ===== */}
                    <div className="mt-4">
                        <Image
                            src="/images/sankalp/Sity_microsite.webp"
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
                    >Arched balconies, clean facades, and well-ventilated layouts bring classical beauty into a modern context. <br />Every home is designed to maximize natural light and airflow, creating a seamless blend of architectural artistry and everyday comfort that truly stands apart from a typical Apartment in Sarjapur Road.

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
                        src="/images/sankalp/banner image.webp"
                        alt="Tennis Player"
                        width={600}
                        height={400}
                        className="img-fluid w-100"
                    />
                </div>
            </section>
            <section data-aos="fade-up"
                data-aos-delay="200" className="life-earth" style={{ backgroundColor: "#f7f2eb", padding: "30px 0", fontFamily: "'Source Sans 3', sans-serif", }}>
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
                                                    { icon: <FaUsers size={60} color="#4b3a2a" className="mb-2" />, label: "Club House" },
                                                    { icon: <FaSwimmingPool size={60} color="#4b3a2a" className="mb-2" />, label: "Swimming Pool" },
                                                    { icon: <FaSwimmingPool size={60} color="#4b3a2a" className="mb-2" />, label: "Kids Pool" },
                                                    { icon: <FaMusic size={60} color="#4b3a2a" className="mb-2" />, label: "Open Amphitheatre" },
                                                    { icon: <FaBasketballBall size={60} color="#4b3a2a" className="mb-2" />, label: "Half Basketball Court" },
                                                    { icon: <FaFutbol size={60} color="#4b3a2a" className="mb-2" />, label: "Multipurpose Play Turf" },
                                                    { icon: <FaBaseballBall size={60} color="#4b3a2a" className="mb-2" />, label: "Cricket Pitch" },
                                                    { icon: <FaGamepad size={60} color="#4b3a2a" className="mb-2" />, label: "Indoor Games" },
                                                    { icon: <FaChild size={60} color="#4b3a2a" className="mb-2" />, label: "Kids Play Area" },
                                                    { icon: <FaWalking size={60} color="#4b3a2a" className="mb-2" />, label: "Walking & Jogging Track" },
                                                    { icon: <FaCouch size={60} color="#4b3a2a" className="mb-2" />, label: "Visitors Lounge" },
                                                    { icon: <FaLeaf size={60} color="#4b3a2a" className="mb-2" />, label: "Fragrance Garden" },
                                                    { icon: <FaLeaf size={60} color="#4b3a2a" className="mb-2" />, label: "Butterfly Garden" },
                                                    { icon: <FaChair size={60} color="#4b3a2a" className="mb-2" />, label: "Elder Sitting Zone" },
                                                    { icon: <FaChair size={60} color="#4b3a2a" className="mb-2" />, label: "Multipurpose Sitting" },
                                                    { icon: <FaUtensils size={60} color="#4b3a2a" className="mb-2" />, label: "Food Court" },
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
                            maxWidth: "900px",
                            fontSize: "16px",
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

                    {/* Gallery Section */}
                    <Gallery
                        images={[
                            "/images/sankalp/project img.webp",
                            "/images/sankalp/project img 2webp.webp",
                            "/images/sankalp/project img 3.webp",
                            "/images/sankalp/interior_sank.webp",
                            "/images/sankalp/interior2.webp"
                        ]}
                        title="GALLERY"
                        subtitle="Luxury 2 & 3 BHK Apartments in KR Puram"
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
                thumbnail="/images/sankalp-youtube.webp"
                youtubeId="4YS_-psSQyg"
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
                    <Specifications data={mythriSankalpSpecs} />
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
                                <div className="col-md-4 col-sm-6 col-12 mb-4">
                                    <h5 style={{ color: "#c79a3a", fontWeight: "600" }}>BUSINESS HUBS</h5>
                                    <p className="mb-1">RMZ Infinity <span className="location-time" style={{ float: "right" }}>19 Min</span></p>
                                    <p className="mb-1">Beary’s Global Research (BCRT) <span className="location-time" style={{ float: "right" }}>23 Min</span></p>
                                    <p className="mb-1">Bhoruka Technology Park <span className="location-time" style={{ float: "right" }}>25 Min</span></p>
                                    <p className="mb-1">Bagmane Tech Park <span className="location-time" style={{ float: "right" }}>26 Min</span></p>
                                    <p className="mb-1">Nalapad Brigade Centre <span className="location-time" style={{ float: "right" }}>26 Min</span></p>
                                    <p className="mb-1">Bagmane Business Park <span className="location-time" style={{ float: "right" }}>26 Min</span></p>
                                </div>

                                {/* === Column 2: SCHOOLS === */}
                                <div className="col-md-4 col-sm-6 col-12 mb-4">
                                    <h5 style={{ color: "#c79a3a", fontWeight: "600" }}>SCHOOLS</h5>
                                    <p className="mb-1">Birla Open Minds International <span className="location-time" style={{ float: "right" }}>2 Min</span></p>
                                    <p className="mb-1">Christ International School <span className="location-time" style={{ float: "right" }}>2 Min</span></p>
                                    <p className="mb-1">New Baldwin International School <span className="location-time" style={{ float: "right" }}>5 Min</span></p>
                                    <p className="mb-1">Narayana E-Techno School <span className="location-time" style={{ float: "right" }}>5 Min</span></p>
                                    <p className="mb-1">New Indus Valley School <span className="location-time" style={{ float: "right" }}>6 Min</span></p>
                                    <p className="mb-1">Don Bosco College <span className="location-time" style={{ float: "right" }}>7 Min</span></p>
                                </div>

                                {/* === Column 3: HEALTHCARE === */}
                                <div className="col-md-4 col-sm-6 col-12 mb-4">
                                    <h5 style={{ color: "#c79a3a", fontWeight: "600" }}>HEALTHCARE</h5>
                                    <p className="mb-1">Sathya Sai Orthopaedic <span className="location-time" style={{ float: "right" }}>14 Min</span></p>
                                    <p className="mb-1">East Point Hospital <span className="location-time" style={{ float: "right" }}>16 Min</span></p>
                                    <p className="mb-1">Columbia Hospital <span className="location-time" style={{ float: "right" }}>18 Min</span></p>
                                    <p className="mb-1">Miracle Hospital <span className="location-time" style={{ float: "right" }}>26 Min</span></p>
                                    <p className="mb-1">Aaxis Hospital <span className="location-time" style={{ float: "right" }}>26 Min</span></p>
                                </div>

                                {/* === Column 4: SHOPPING MALLS === */}
                                <div className="col-md-4 col-sm-6 col-12 mb-4">
                                    <h5 style={{ color: "#c79a3a", fontWeight: "600" }}>SHOPPING MALLS</h5>
                                    <p className="mb-1">Gopalan Grand Mall <span className="location-time" style={{ float: "right" }}>20 Min</span></p>
                                    <p className="mb-1">Orion Uptown Mall <span className="location-time" style={{ float: "right" }}>20 Min</span></p>
                                    <p className="mb-1">Decathlon <span className="location-time" style={{ float: "right" }}>20 Min</span></p>
                                    <p className="mb-1">Phoenix Marketcity <span className="location-time" style={{ float: "right" }}>25 Min</span></p>
                                </div>

                                {/* === Column 5: CONNECTIVITY === */}
                                <div className="col-md-4 col-sm-6 col-12 mb-4">
                                    <h5 style={{ color: "#c79a3a", fontWeight: "600" }}>CONNECTIVITY</h5>
                                    <p className="mb-1">KR Puram Metro Station <span className="location-time" style={{ float: "right" }}>15 Min</span></p>
                                    <p className="mb-1">KR Puram Railway Station <span className="location-time" style={{ float: "right" }}>15 Min</span></p>
                                    <p className="mb-1">Hoodi Metro Station <span className="location-time" style={{ float: "right" }}>25 Min</span></p>
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

                            fontSize: "16px",
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
                                    1. What is the official RERA status and unique proposition of Mythri Sankalp?
                                </button>
                            </h2>
                            <div
                                id="faq1"
                                className="accordion-collapse collapse show"
                                aria-labelledby="faq1-heading"
                                data-bs-parent="#faqAccordion"
                            >
                                <div className="accordion-body" style={{ color: "#585858", textAlign: "left" }}>
                                    Mythri Sankalp is a fully compliant project offering Roman-inspired architecture in KR Puram. The project has the RERA Registration Number PRM/KA/RERA/1251/446/PR/07042S/OO7653. It offers 101 exclusive units with 35+ amenities on 1.08 Acres.
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
                                    2. Where is Mythri Sankalp located?
                                </button>
                            </h2>
                            <div
                                id="faq2"
                                className="accordion-collapse collapse"
                                aria-labelledby="faq2-heading"
                                data-bs-parent="#faqAccordion"
                            >
                                <div className="accordion-body" style={{ color: "#585858", textAlign: "justify" }}>
                                    Tucked away in the serene enclave of KR Puram, Mythri Sankalp offers seamless access to key IT corridors like RMZ Infinity, Bagmane Tech Park, and more. It balances city connectivity with a calm retreat.
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
                                    3. What amenities are provided at Mythri Sankalp?
                                </button>
                            </h2>
                            <div
                                id="faq3"
                                className="accordion-collapse collapse"
                                aria-labelledby="faq3-heading"
                                data-bs-parent="#faqAccordion"
                            >
                                <div className="accordion-body" style={{ color: "#585858", textAlign: "justify" }}>
                                    The project features 35+ amenities including a Club House, Swimming Pool, Kids Pool, Open Amphitheatre, Half Basketball Court, and much more, designed for wellness and recreation.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
