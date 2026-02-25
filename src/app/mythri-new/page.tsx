"use client";

import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Carousel, Container, Row, Col, Form, Button, Modal } from "react-bootstrap";
import Image from "next/image";
import ScheduleVisitForm from "../components/ScheduleVisitForm";
import Walkthrough from "../components/Microsite/Walkthrough";
import Specifications from "../components/Microsite/Specifications";
import { mythriSitySpecs } from "../data/mythriSity";
import { useMenu } from "../context/MenuContext";
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
    FaTint
} from "react-icons/fa";
import { useEnquiry } from "../components/EnquiryContext";

import Gallery from "../components/Gallery";
import { Leaf, LeafIcon, LeafyGreenIcon } from "lucide-react";
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


                {/* Desktop Image */}

                <Carousel
                    fade
                    interval={null}     // ❌ auto slide off
                    indicators={false}  // ❌ dots hide
                    controls={false}    // ❌ arrows hide
                >

                    <Carousel.Item>

                        <picture>
                            {/* Mobile Image */}
                            <source
                                media="(max-width: 767px)"
                                srcSet="/images/sity/mobilebanner.webp"
                            />
                            {/* Desktop Image */}
                            <img
                                className="d-block w-100"
                                src="/images/sity/Website banner img_sity.webp"
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
                    <strong>RERA No:</strong> PRM/KA/RERA/1251/446/PR/300525/007802
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
                    <h6
                        className="text-uppercase mb-2"
                        style={{
                            letterSpacing: "2px",
                            color: "#c7936f",
                            fontSize: "14px",
                        }}
                    >
                        A Paradise Sculpted for
                    </h6>

                    <h2
                        style={{
                            color: "#b67e57",
                            fontSize: "36px",
                            fontWeight: 500,
                            letterSpacing: "1px",
                        }}
                    >
                        Soulful Living
                    </h2>

                    <Image
                        src="/images/sity/sity.webp"
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
                        Positioned perfectly near the dynamic energy of Sarjapur Road, Mythri Sity achieves a rare and elegant balance. For discerning homebuyers exploring 2 BHK flats in Sarjapur Road along with spacious 3 and 4 BHK residences, it is where the deep peace of a Tropical Calm environment beautifully merges with the practicality of Mindful Design.
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
                        This is more than a luxury residence; it is a space intentionally shaped for your well-being. Every home is a sanctuary, optimized for natural light, effortless ventilation, and the tranquil vision of the sky-toned lagoon. Mythri Sity offers you the clarity to truly live, a seamless experience of elegance and ease, without compromising your connection to the city’s heart, in a coveted apartment in Sarjapur Road that feels like a private retreat.
                    </p>

                    {/* ===== Info Row ===== */}
                    <div className="d-block">
                        <Container className="mt-4 mb-4">
                            <Row className="g-3 text-center">

                                <Col xs={4}>
                                    <div className="p-3 h-100 border rounded-3 mobile-highlight">
                                        <FaHome size={22} color="#4b3a2a" className="mb-2" />
                                        <h6 className="fw-bold mb-1">2,3 & 4BHK</h6>
                                        <p className="text-muted mb-0">Homes</p>
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
                                        <h6 className="fw-bold mb-1">50+</h6>
                                        <p className="text-muted mb-0">Amenities</p>
                                    </div>
                                </Col>

                                <Col xs={4}>
                                    <div className="p-3 h-100 border rounded-3 mobile-highlight">
                                        <FaExpandArrowsAlt size={22} color="#4b3a2a" className="mb-2" />
                                        <h6 className="fw-bold mb-1">5 Acres</h6>
                                        <p className="text-muted mb-0">Project Area</p>
                                    </div>
                                </Col>

                                <Col xs={4}>
                                    <div className="p-3 h-100 border rounded-3 mobile-highlight">
                                        <FaCity size={22} color="#4b3a2a" className="mb-2" />
                                        <h6 className="fw-bold mb-1">423</h6>
                                        <p className="text-muted mb-0">Apartments</p>
                                    </div>
                                </Col>

                                <Col xs={4}>
                                    <div className="p-3 h-100 border rounded-3 mobile-highlight">
                                        <FaLeaf size={25} color="#4b3a2a" className="mb-2" />
                                        <h6 className="fw-bold mb-1">75%</h6>
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
                                        <h1 className="text-dark mb-3">Mythri Sity – Off Sarjapur Road</h1>

                                        <span className="highlight">
                                            2, 2.5, 3, 3.5 & 4 BHK Premium Apartments
                                        </span>

                                        <p className="sub-text">
                                            5 Acres | 75% Open Space | Prime Sarjapur Location
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
                                                    <td>1,178 – 1,278 sq. ft</td>
                                                    <td>
                                                        <button className="unlock-btn" onClick={openDrawer}>
                                                            Unlock Price
                                                        </button>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td><b>3 BHK – 2 T</b></td>
                                                    <td>1,484 – 1,552 sq. ft</td>
                                                    <td>
                                                        <button className="unlock-btn" onClick={openDrawer}>
                                                            Unlock Price
                                                        </button>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td><b>3 BHK – 3 T</b></td>
                                                    <td>1,900 – 2,397 sq. ft</td>
                                                    <td>
                                                        <button className="unlock-btn" onClick={openDrawer}>
                                                            Unlock Price
                                                        </button>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td><b>4 BHK – 4 T</b></td>
                                                    <td>2,531 sq. ft</td>
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
                                        RERA Approved*
                                    </mark>
                                </div>
                            </div>

                        </div>
                    </section>




                    {/* ===== Image ===== */}
                    <div className="w-full sm:w-[50%] lg:w-full h-auto">
                        <div className="image-wrapper2">
                            <Image
                                src="/images/Sity_clubhouse.webp"
                                alt="Mythri Builders"
                                width={1100}
                                height={630}
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1100px"
                                className="responsive-image"
                            />
                        </div>

                    </div>



                    <h3 className="text-center mb-4 mt-4"
                        style={{
                            fontSize: "35px",
                            color: "#585858",
                            lineHeight: "1.8",
                        }}>
                        The Art of Presence
                    </h3>
                    <p
                        className="mx-auto mt-3"
                        style={{
                            maxWidth: "900px",
                            fontSize: "16px",
                            color: "#585858",
                            lineHeight: "1.8",
                            fontFamily: "'Source Sans 3', sans-serif",
                        }}
                    >A life defined not by deadlines, but by the quiet rhythm of the tropics. Every element, from the sun-warmed palette to the lush landscaping, is intentional. Mythri Sity is an invitation to slow down, lift your spirit, and experience the rare sensation of having arrived.
                    </p>
                </Container>


            </section>
            {/* <section data-aos="fade-up"
                data-aos-delay="200" className="p-0" style={{
                    backgroundColor: "#FBFBF4",
                    color: "#5c4a3b",
                    padding: "80px 0",
                    fontFamily: "'Source Sans 3', sans-serif",
                }}>
                <div className="container g-0">
                    <Image
                        src="/images/sity/Banner image2 .webp"
                        alt="Tennis Player"
                        width={600}
                        height={400}
                        className="img-fluid w-100"
                    />
                </div>
            </section> */}
            <section data-aos="fade-up"
                data-aos-delay="200" className="life-earth" style={{ backgroundColor: "#f7f2eb", padding: "30px 0", fontFamily: "'Source Sans 3', sans-serif", }}>
                <div className="container">
                    <div className="text-center">
                        <h2 className="gallery-title small-title" >Amenities</h2>
                    </div>


                    {/* Row 1: Text left, Image right */}
                    {/* <div className="row align-items-center mb-4">
                        <div className="col-md-6">
                            <p
                                className="mx-auto mt-3"
                                style={{
                                    maxWidth: "900px",
                                    fontSize: "16px",
                                    color: "#585858",
                                    lineHeight: "1.8",
                                    width: "90%",
                                }}
                            >
                                Your day awakens with the quiet scent of the surrounding greenery, perfect for a mindful walk along the winding trails, or simply holding a warm cup on your sun-drenched private deck. As the hours unfold, the Sity offers a refined outlet for every inclination: find your intensity in the state-of-the-art fitness lounge, enjoy a spirited rally on the exclusive courts, or gather loved ones by the elegant outdoor pavilion for a relaxed evening under the stars. Whether you choose a 2 BHK, 3 BHK or 4 BHK Flat In Sarjapur Road here, every corner of the community is a curated opportunity. Whether you seek vibrant movement, effortless connection, or beautiful solitude, the amenities are meticulously woven into the landscape, making every day feel purposefully well-spent.

                            </p>
                        </div>
                        <div className="col-md-6 text-center p-0">
                            <Image
                                src="/images/sity/Amenities_img_sity.webp"
                                alt="Tennis Player"
                                width={600}
                                height={400}
                                className="img-fluid w-100"
                            />
                        </div>
                    </div> */}

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
                                                    { icon: <FaUsers size={60} color="#4b3a2a" className="mb-2" />, label: "Grand Clubhouse" },
                                                    { icon: <FaChild size={60} color="#4b3a2a" className="mb-2" />, label: "Children’s Play Area" },
                                                    { icon: <FaGamepad size={60} color="#4b3a2a" className="mb-2" />, label: "Indoor Games" },
                                                    { icon: <FaBasketballBall size={60} color="#4b3a2a" className="mb-2" />, label: "Sports Court" },
                                                    { icon: <FaSwimmingPool size={60} color="#4b3a2a" className="mb-2" />, label: "Swimming Pool" },
                                                    { icon: <FaSwimmingPool size={60} color="#4b3a2a" className="mb-2" />, label: "Kid’s Pool" },
                                                    { icon: <FaUsers size={60} color="#4b3a2a" className="mb-2" />, label: "Senior Citizens Seating" },
                                                    { icon: <FaDumbbell size={60} color="#4b3a2a" className="mb-2" />, label: "Gymnasium" },
                                                    { icon: <FaSpa size={60} color="#4b3a2a" className="mb-2" />, label: "Yoga Studio" },
                                                    { icon: <FaShieldAlt size={60} color="#4b3a2a" className="mb-2" />, label: "24×7 Security" },
                                                    { icon: <FaVideo size={60} color="#4b3a2a" className="mb-2" />, label: "CCTV Surveillance" },
                                                    { icon: <FaLeaf size={60} color="#4b3a2a" className="mb-2" />, label: "Landscaped Gardens" },
                                                    { icon: <FaWalking size={60} color="#4b3a2a" className="mb-2" />, label: "Walking Tracks" },
                                                    { icon: <FaBolt size={60} color="#4b3a2a" className="mb-2" />, label: "Power Backup" },
                                                    { icon: <FaTint size={60} color="#4b3a2a" className="mb-2" />, label: "Rainwater Harvesting" },
                                                    { icon: <FaLeaf size={60} color="#4b3a2a" className="mb-2" />, label: "Open Party Lawn" },
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


            <Gallery
                images={[
                    "/images/sity/project img1.webp",
                    "/images/sity/project img2.webp",
                    "/images/sity/project img3.webp",
                    "/images/sity/project img4.webp",
                    "/images/sity/project img5.webp"
                ]}
                title="GALLERY"
                subtitle="Luxury 2, 3 BHK Apartments in Off Sarjapur Road"
            />

            <section id="master" className="" data-aos="fade-up" data-aos-delay="200">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-sm-12 col-md-10 text-center">
                            <h2 className="gallery-title small-title">MASTER PLAN</h2>
                            <p className="master-subtitle">
                                Luxury Apartments Designed With Vastu Compliance, Spacious, Ample Sunlight and
                                Ventilation
                            </p>

                            <div className="row">
                                <div className="col-md-12  image-wrapper ">
                                    <Image
                                        src="/images/sity/sity master plan images.webp"
                                        alt="Master Plan"
                                        width={900}
                                        height={600}
                                        className="master-image responsive-image"

                                        priority
                                        onClick={openDrawer}
                                    />
                                </div>

                            </div>

                            {/* ACTION BUTTONS */}
                            <div className="d-flex justify-content-center gap-3 mt-4 d-md-block d-none">
                                <button
                                    className="btn btn-dark px-4 py-2 d-none"
                                    style={{ borderRadius: 0, fontSize: "14px", letterSpacing: "1px" }}
                                    onClick={() => handleShow("/images/Eara_masterplan.webp")}
                                >
                                    FLOOR PLANS
                                </button>

                                <button
                                    className="btn btn-dark px-4 py-2"
                                    style={{ borderRadius: 0, fontSize: "14px", letterSpacing: "1px" }}
                                    onClick={() =>
                                        handleShow("/images/sity/sity master plan images.webp")

                                    }
                                >
                                    MASTER PLAN
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <Walkthrough
                title="Project Walkthrough"
                thumbnail="/images/sity-youtube.webp"
                youtubeId="BcjmTU1auwE"
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
                    <Specifications data={mythriSitySpecs} />
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
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.35202818842!2d77.7015935!3d12.885070899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae13002df8fe3b%3A0x70bf2f48fb282e71!2sMYTHRI%20SITY!5e0!3m2!1sen!2sin!4v1764852955751!5m2!1sen!2sin"
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
                                {/* === Column 1: HEALTHCARE === */}
                                <div className="col-md-6 col-sm-6 col-12 mb-4">
                                    <h5 style={{ color: "#c79a3a", fontWeight: "600" }}>HEALTHCARE</h5>
                                    <p className="mb-1">Punarjani Ayurvedic Hospital <span className="location-time" style={{ float: "right" }}>2 Min</span></p>
                                    <p className="mb-1">Motherhood Hospital <span className="location-time" style={{ float: "right" }}>5 Min</span></p>
                                    <p className="mb-1">BN Specialty Hospital <span className="location-time" style={{ float: "right" }}>6 Min</span></p>
                                    <p className="mb-1">Cloudnine Hospital, Sarjapur Road <span className="location-time" style={{ float: "right" }}>6 Min</span></p>
                                    <p className="mb-1">Manipal Hospital <span className="location-time" style={{ float: "right" }}>7 Min</span></p>
                                    <p className="mb-1">Sakra World Hospital <span className="location-time" style={{ float: "right" }}>9 Min</span></p>
                                    <p className="mb-1">Narayana Multispeciality Hospital <span className="location-time" style={{ float: "right" }}>10 Min</span></p>
                                </div>

                                {/* === Column 2: FOOD & LEISURE === */}
                                <div className="col-md-6 col-sm-6 col-12 mb-4">
                                    <h5 style={{ color: "#c79a3a", fontWeight: "600" }}>FOOD & LEISURE</h5>
                                    <p className="mb-1">The Golden Circle Brewery <span className="location-time" style={{ float: "right" }}>4 Min</span></p>
                                    <p className="mb-1">The Bier Library <span className="location-time" style={{ float: "right" }}>4 Min</span></p>
                                    <p className="mb-1">Sarjapur Social <span className="location-time" style={{ float: "right" }}>5 Min</span></p>
                                    <p className="mb-1">Street 1522 <span className="location-time" style={{ float: "right" }}>2 Min</span></p>
                                    <p className="mb-1">Byg Brewski <span className="location-time" style={{ float: "right" }}>6 Min</span></p>
                                    <p className="mb-1">Roxie <span className="location-time" style={{ float: "right" }}>7 Min</span></p>
                                    <p className="mb-1">Macaw by Stories <span className="location-time" style={{ float: "right" }}>8 Min</span></p>
                                </div>

                                {/* === Column 4: SHOPPING MALLS === */}
                                <div className="col-md-6 col-sm-6 col-12 mb-4">
                                    <h5 style={{ color: "#c79a3a", fontWeight: "600" }}>SHOPPING MALLS</h5>
                                    <p className="mb-1">Decathlon <span className="location-time" style={{ float: "right" }}>4 Min</span></p>
                                    <p className="mb-1">PVR Spirit Mall <span className="location-time" style={{ float: "right" }}>8 Min</span></p>
                                    <p className="mb-1">Forum Value Mall <span className="location-time" style={{ float: "right" }}>14 Min</span></p>
                                    <p className="mb-1">Total Mall <span className="location-time" style={{ float: "right" }}>15 Min</span></p>
                                </div>

                                {/* === Column 3: ENTERTAINMENT & SPORTS === */}
                                <div className="col-md-6 col-sm-6 col-12 mb-4">
                                    <h5 style={{ color: "#c79a3a", fontWeight: "600" }}>ENTERTAINMENT & SPORTS</h5>
                                    <p className="mb-1">Red Riders Go-Karting <span className="location-time" style={{ float: "right" }}>2 Min</span></p>
                                    <p className="mb-1">Lakedew Lions Cricket Ground <span className="location-time" style={{ float: "right" }}>2 Min</span></p>
                                    <p className="mb-1">Powerplay Cricket Ground <span className="location-time" style={{ float: "right" }}>2 Min</span></p>
                                    <p className="mb-1">GSS Sports Arena <span className="location-time" style={{ float: "right" }}>2 Min</span></p>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {/* <section data-aos="fade-up"
                data-aos-delay="200" className="p-0">
                <div className="container g-0">
                    <Image
                        src="/images/sity/Swimming pool_sity_microsite.webp"
                        alt="Tennis Player"
                        width={600}
                        height={400}
                        className="img-fluid w-100"
                    />
                </div>
            </section> */}
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
                                    1. What is the official RERA status and unique proposition of Mythri Sity, Sarjapur Road?
                                </button>
                            </h2>
                            <div
                                id="faq1"
                                className="accordion-collapse collapse show"
                                aria-labelledby="faq1-heading"
                                data-bs-parent="#faqAccordion"
                            >
                                <div className="accordion-body" style={{ color: "#585858", textAlign: "left" }}>
                                    Mythri Sity is a fully compliant ultra-luxury project  Our unique proposition is defined by Tropical Calm meets Mindful Design. The project is a rare 5-acre vertical sanctuary, offering 423 ultra-luxury residences surrounded by over 75% open, landscaped space. with the RERA Registration Number PRM/KA/RERA/1251/446/PR/300525/007802.
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
                                    2. How does the location of Mythri Sity offer superior connectivity to Bengaluru’s major IT hubs and future growth corridors?
                                </button>
                            </h2>
                            <div
                                id="faq2"
                                className="accordion-collapse collapse"
                                aria-labelledby="faq2-heading"
                                data-bs-parent="#faqAccordion"
                            >
                                <div className="accordion-body" style={{ color: "#585858", textAlign: "justify" }}>
                                    Perfectly situated just off Sarjapur Road, Mythri Sity places you at the intersection of career and calm. We offer exceptional proximity to major IT hubs and are strategically positioned minutes from the proposed SWIFT City(Startups, Workspaces, Innovation, Finance & Technology). This planned 1,000+ acre government-backed innovation corridor near Sarjapur ensures exponential appreciation and unmatched infrastructure growth for our residents.
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
                                    3. What unique amenities are designed to deliver the ’Tropical Calm’ lifestyle at Mythri Sity?
                                </button>
                            </h2>
                            <div
                                id="faq3"
                                className="accordion-collapse collapse"
                                aria-labelledby="faq3-heading"
                                data-bs-parent="#faqAccordion"
                            >
                                <div className="accordion-body" style={{ color: "#585858", textAlign: "justify" }}>
                                    The lifestyle at Mythri Sity is curated for serenity and well-being. Key elements include the signature sky-toned lagoons and tranquil pool decks , over 50 exclusive amenities , and 75% open space. Residents enjoy a Tree House , a dedicated Butterfly Garden , Outdoor Working Pods , a Multipurpose Court , and the exclusive Club Mythri for fitness and leisure.
                                </div>
                            </div>
                        </div>

                        {/* FAQ 4 */}
                        <div className="accordion-item mb-3">
                            <h2 className="accordion-header mb-0" id="faq4-heading">
                                <button
                                    className="accordion-button collapsed text-view-faq"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#faq4"
                                >
                                    4. What types of luxury residences are available at Mythri Sity, and what are the key construction specifications?
                                </button>
                            </h2>
                            <div
                                id="faq4"
                                className="accordion-collapse collapse"
                                aria-labelledby="faq4-heading"
                                data-bs-parent="#faqAccordion"
                            >
                                <div className="accordion-body" style={{ color: "#585858", textAlign: "justify" }}>
                                    Mythri Sity features 423 ultra-luxury homes available in 2, 3, and 4 BHK configurations across B+G+18 floors, ideal for families looking for 2 BHK flats in Sarjapur Road as well as larger 3 and 4 BHK options. Residences feature high-end specifications including 80x80cm vitrified tiles for living areas, Kohler sanitaryware, and Schindler branded automatic elevators. Every home is a masterpiece of light and ventilation, built on a foundation of uncompromised quality.
                                </div>
                            </div>
                        </div>

                        {/* FAQ 5 */}
                        <div className="accordion-item mb-3">
                            <h2 className="accordion-header mb-0" id="faq5-heading">
                                <button
                                    className="accordion-button collapsed text-view-faq"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#faq5"
                                >
                                    5. Who is the developer of Mythri Sity, and what is their commitment to quality and transparency?
                                </button>
                            </h2>
                            <div
                                id="faq5"
                                className="accordion-collapse collapse"
                                aria-labelledby="faq5-heading"
                                data-bs-parent="#faqAccordion"
                            >
                                <div className="accordion-body" style={{ color: "#585858", textAlign: "justify" }}>
                                    Mythri Sity is a project by Mythri Builders , a brand committed to building not just homes, but lasting Trust. Our foundation rests on Punctuality, Integrity, and Excellence. We ensure complete financial clarity for all stakeholders , dedicate our expertise to one project at a time , and manage construction with dedicated in-house teams to adhere to strict timelines, making every Mythri project a benchmark in luxury and quality.
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}
