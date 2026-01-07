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
                                srcSet="/images/street/Mobile_banner_Street.webp"
                            />
                            {/* Desktop Image */}
                            <img
                                className="d-block w-100"
                                src="/images/street/Desktop_banner_Street.webp"
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
                    <strong>RERA No:</strong> PRM/KA/RERA/1251/446/PR/151025/008172
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
                        ELEVATED LIVING, CRAFTED FOR
                    </h6>

                    <h2
                        style={{
                            color: "#b67e57",
                            fontSize: "36px",
                            fontWeight: 500,
                            letterSpacing: "1px",
                        }}
                    >
                        THE VISIONARY FEW
                    </h2>
                    <Image
                        src="/images/street/Mythri street_final logo.png"
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
                    >Rising gracefully in the heart of Bengaluru’s eastern skyline, Mythri Street stands as an address of quiet power and urban sophistication - a rare Apartment For Sale In Sarjapur Road for those who value both height and heritage.</p>
                    <p
                        className="mx-auto mt-3"
                        style={{
                            maxWidth: "900px",
                            fontSize: "19px",
                            color: "#585858",
                            lineHeight: "1.8",
                            fontFamily: "'Source Sans 3', sans-serif",
                        }}
                    >Where bold architecture meets timeless artistry, each residence captures the essence of vertical luxury - soaring views, serene interiors, and the rare sense of being both above the city and deeply connected to it. <br />Every home is an expression of refined living - designed for those who build tomorrow, yet value the beauty of today.<br /></p>

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
                                50+ Lifestyle <br /> Amenities
                            </h3>
                        </Col>
                        <Col md={4} sm={6} xs={12} className="mb-3 border-end">
                            <h3 className="mb-0 microsite-about">
                                3 Acres <br /> Project Land Area
                            </h3>
                        </Col>

                        <Col md={4} sm={6} xs={12} className="mb-3 border-start border-end">
                            <h3 className="mb-0 microsite-about">
                                219 <br /> Residences
                            </h3>
                        </Col>

                        <Col md={4} sm={6} xs={12} className="mb-3">
                            <h3 className="mb-0 microsite-about">
                                80% <br /> Open Space
                            </h3>
                        </Col>
                    </Row>

                    {/* ===== Image ===== */}
                    <div className="mt-4">
                        <Image
                            src="/images/street/Street_Earth home.webp"
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
                    <h3 className="text-center mb-4 mt-4"
                        style={{
                            fontSize: "35px",
                            color: "#585858",
                            lineHeight: "1.8",
                        }}>
                        The Spirit of Urban Calm
                    </h3>
                    <p
                        className="mx-auto mt-3"
                        style={{
                            maxWidth: "900px",
                            fontSize: "19px",
                            color: "#585858",
                            lineHeight: "1.8",
                            fontFamily: "'Source Sans 3', sans-serif",
                        }}
                    >Where skyline energy meets understated grace. <br />Mythri Street is a celebration of elevation - not just in height, but in perspective. It’s for those who rise early, think deeply, dream greatly, and prefer their peace with a view, while shortlisting premium Flats For Sale In Sarjapur Road that actually match their aspirations. <br />Every inch of space, from the double-height lobbies to the panoramic decks, embodies balance - dynamic, yet tranquil.</p>
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
                        src="/images/street/Banner image2_Street.webp"
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
                    <h3 className="text-center mb-4"
                        style={{
                            fontSize: "35px",
                            color: "#585858",
                            lineHeight: "1.8",
                        }}>
                        Flow. Form. Freedom.
                    </h3>

                    {/* Row 1: Text left, Image right */}
                    <div className="row align-items-center mb-4">
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
                                Your day begins with the first light touching the horizon — coffee in hand, skyline unfolding before you. <br />Downstairs, the city hums. But up here, life flows at your pace. Morning yoga on the sky terrace. A swim overlooking the clouds. An evening soiree at the rooftop lounge — where the city’s lights feel close enough to touch. At Mythri Street, movement, mindfulness, and magnificence converge in effortless rhythm.
                            </p>
                        </div>
                        <div className="col-md-6 text-center p-0">
                            <Image
                                src="/images/street/Amenities1.webp"
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
                                src="/images/street/Amenities2.webp"
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
                                <div className="row align-items-center mb-4">

                                    <h3 className="text-center"
                                        style={{
                                            fontSize: "35px",
                                            color: "#585858",
                                            lineHeight: "1.8",
                                        }}>
                                        Curated Lifestyle Experiences
                                    </h3>
                                    <p
                                        className="mx-auto mt-3"
                                        style={{
                                            fontSize: "19px",
                                            color: "#585858",
                                            lineHeight: "1.8",
                                            width: "90%",
                                        }}
                                    >Every amenity is designed to heighten your sense of belonging — spaces that transform from function to feeling. <br />From serene rooftop zones to energized courts and lounges, Mythri Street offers the balance modern life craves.</p>

                                    <div className="col-md-6 col-6 px-md-5">
                                        <ul className="list-unstyled">
                                            <li>Rooftop Infinity Pool</li>
                                            <li>Sky Lounge</li>
                                            <li>Fitness Studio</li>
                                            <li>Meditation Deck</li>
                                            <li>Multipurpose Sports</li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6 col-6 px-md-5">
                                        <ul className="list-unstyled">
                                            <li>Children’s Play Courts</li>
                                            <li>Green Lawns</li>
                                            <li>Work Pods</li>
                                            <li>Mini Theatre</li>
                                            <li>Indoor Lounge</li>
                                        </ul>
                                    </div>
                                    <p
                                        className="mx-auto mt-3 text-center"
                                        style={{
                                            fontSize: "19px",
                                            color: "#585858",
                                            lineHeight: "1.8",
                                            width: "90%",
                                        }}
                                    >Over 60 exclusive amenities curated for a life that unfolds beautifully in every direction.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <h3 className="text-center mb-4 mt-4"
                                style={{
                                    fontSize: "35px",
                                    color: "#585858",
                                    lineHeight: "1.8",
                                }}>
                                A Home that Touches the Sky
                            </h3>
                            <p
                                className="mx-auto mb-0 text-center"
                                style={{
                                    maxWidth: "950px",
                                    fontSize: "19px",
                                    color: "#585858",
                                    lineHeight: "1.8",
                                }}
                            >Crafted with precision, each residence embraces natural light, intelligent ventilation, and a seamless sense of openness. <br /> The materials, the textures, and the design - every element is chosen to reflect refinement that endures, whether you choose expansive 3 BHK residences or thoughtfully designed 2 BHK flats in Sarjapur Road. <br /> Here, modern architecture meets soulful detailing.<br />Your home doesn’t just rise with the skyline - it elevates your every day.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section data-aos="fade-up"
                data-aos-delay="200" className="p-0">
                <div className="container g-0">
                    <Image
                        src="/images/street/Interior1-Street.webp"
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
                    <h3 className="text-center mb-4"
                        style={{
                            fontSize: "35px",
                            color: "#585858",
                            lineHeight: "1.8",
                        }}>
                        The Future Rising Around You
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
                        With Bengaluru expanding eastward, Mythri Street stands poised at the heart of exponential growth - a landmark address for anyone considering an Apartment For Sale In Sarjapur Road with long-term potential.<br />Surrounded by innovation corridors, commercial hubs, and next-gen infrastructure, this address is more than prime - it’s prophetic.<br />An investment not just in space, but in future value and timeless design.</p>

                    {/* Buttons */}
                    <div className="d-flex justify-content-center gap-3 mt-4 d-none">
                        <button
                            className="btn btn-dark px-4 py-2"
                            style={{ borderRadius: 0, fontSize: "14px", letterSpacing: "1px" }}
                            onClick={() => handleShow("/images/Eara_masterplan.webp")}
                        >
                            FLOOR PLANS
                        </button>
                        <button
                            className="btn btn-dark px-4 py-2"
                            style={{ borderRadius: 0, fontSize: "14px", letterSpacing: "1px" }}
                            onClick={() => handleShow("/images/Master.jpg")}
                        >
                            MASTER PLAN
                        </button>
                    </div>

                    {/* Divider */}
                    <div className="my-5"></div>

                    {/* Project Slider Section */}
                    <h3 className="text-center mb-4"
                        style={{
                            fontSize: "35px",
                            color: "#585858",
                            lineHeight: "1.8",
                        }}>
                        The Project Setting at Street
                    </h3>

                    <div className="col-lg-10 mx-auto">
                        <Carousel indicators={false} controls={true} interval={3000}>
                            <Carousel.Item>
                                <Image
                                    src="/images/street/project img1_street.webp"
                                    alt="Project View 1"
                                    width={900}
                                    height={500}
                                    className="d-block w-100 rounded carousel-img"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image
                                    src="/images/street/project img2_street.webp"
                                    alt="Project View 2"
                                    width={900}
                                    height={500}
                                    className="d-block w-100 rounded carousel-img"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image
                                    src="/images/street/project img3_street.webp"
                                    alt="Project View 3"
                                    width={900}
                                    height={500}
                                    className="d-block w-100 rounded carousel-img"
                                />
                            </Carousel.Item>
                        </Carousel>

                        {/* Section Title */}
                        <h3 className="text-center mb-4 mt-4"
                            style={{
                                fontSize: "35px",
                                color: "#585858",
                                lineHeight: "1.8",
                            }}>
                            A Location with Vision
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
                            Positioned strategically off Bengaluru’s IT growth corridor, Mythri Street offers instant access to Sarjapur, Whitefield, and Electronic City, standing out amidst other Flats For Sale In Sarjapur Road with its blend of elevation and connectivity.<br />Whether it’s the corporate hubs, elite schools, or fine-dining destinations - your world stays within reach.<br />Yet, when you return home, the city’s noise fades into quiet luxury.<br /><br /><strong>Seamless Connectivity:</strong><br />Outer Ring Road – 5 min | Wipro & RGA Tech Parks – 8 min | HSR & Bellandur – 10–15 min | Whitefield – 20 min</p>
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
                thumbnail="/images/street-youtube.webp"
                youtubeId="SxAOeNIFxSk"
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
                                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3889.3796702430527!2d77.69955623278805!3d12.883290686803605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDUzJzAxLjgiTiA3N8KwNDInMDYuMSJF!5e0!3m2!1sen!2sin!4v1764240037825!5m2!1sen!2sin"
                                width="100%"
                                height="600"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                    <div className="row mt-5  justify-content-center">
                        {/* Left side heading */}
                        <div className="col-md-3 d-flex align-items-center justify-content-center">
                            <h3 className="text-center mb-4"
                                style={{
                                    fontSize: "32px",
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
                                    fontSize: "16px",
                                    color: "#e3e3e3",
                                    lineHeight: "2",
                                    fontFamily: "'Playfair Display', serif",
                                }}
                            >
                                {/* === Column 1: TECH PARKS === */}
                                <div className="col-md-4 col-sm-6 col-12 mb-4">
                                    <h5 style={{ color: "#c79a3a", fontWeight: "600" }}>TECH PARKS</h5>
                                    <p className="mb-1">RMZ Infinity <span style={{ float: "right" }}>19 Min</span></p>
                                    <p className="mb-1">Beary’s Global Research <span style={{ float: "right" }}>23 Min</span></p>
                                    <p className="mb-1">Bhoruka Technology Park <span style={{ float: "right" }}>25 Min</span></p>
                                    <p className="mb-1">Bagmane Tech Park <span style={{ float: "right" }}>26 Min</span></p>
                                    <p className="mb-1">Nalapad Brigade Centre <span style={{ float: "right" }}>26 Min</span></p>
                                    <p className="mb-1">Bagmane Business Park <span style={{ float: "right" }}>26 Min</span></p>
                                    <p className="mb-1">Manyata Tech Park <span style={{ float: "right" }}>28 Min</span></p>
                                    <p className="mb-1">HM Tech Park <span style={{ float: "right" }}>29 Min</span></p>
                                    <p className="mb-1">K.M. Tech Park <span style={{ float: "right" }}>30 Min</span></p>
                                    <p className="mb-1">International Tech Park<span style={{ float: "right" }}>34 Min</span></p>
                                </div>

                                {/* === Column 2: EDUCATIONAL === */}
                                <div className="col-md-4 col-sm-6 col-12 mb-4">
                                    <h5 style={{ color: "#c79a3a", fontWeight: "600" }}>EDUCATIONAL</h5>
                                    <p className="mb-1">Birla Open Mind School <span style={{ float: "right" }}>5 Min</span></p>
                                    <p className="mb-1">Narayana School <span style={{ float: "right" }}>5 Min</span></p>
                                    <p className="mb-1">New Indus Valley School <span style={{ float: "right" }}>6 Min</span></p>
                                    <p className="mb-1">Don Bosco College <span style={{ float: "right" }}>7 Min</span></p>
                                    <p className="mb-1">Kristu Jyothi College <span style={{ float: "right" }}>7 Min</span></p>
                                    <p className="mb-1">Garden City Universtreet <span style={{ float: "right" }}>8 Min</span></p>
                                    <p className="mb-1">Christ International School <span style={{ float: "right" }}>8 Min</span></p>
                                    <p className="mb-1">New Baldwin Intl. School <span style={{ float: "right" }}>15 Min</span></p>
                                    <p className="mb-1">E.P Group of Institutions <span style={{ float: "right" }}>19 Min</span></p>
                                    <p className="mb-1">National Public School <span style={{ float: "right" }}>20 Min</span></p>
                                </div>

                                {/* === Column 3: HOSPITALS === */}
                                <div className="col-md-4 col-sm-6 col-12 mb-4">
                                    <h5 style={{ color: "#c79a3a", fontWeight: "600" }}>HOSPITALS</h5>
                                    <p className="mb-1">East Point Hospital <span style={{ float: "right" }}>16 Min</span></p>
                                    <p className="mb-1">Columbia Hospital <span style={{ float: "right" }}>18 Min</span></p>
                                    <p className="mb-1">Miracle Hospital <span style={{ float: "right" }}>26 Min</span></p>
                                    <p className="mb-1">Aaxis Hospital <span style={{ float: "right" }}>26 Min</span></p>
                                    <p className="mb-1">Manipal Hospital <span style={{ float: "right" }}>29 Min</span></p>
                                    <p className="mb-1">Sathya Sai Super Hospital <span style={{ float: "right" }}>33 Min</span></p>
                                    <p className="mb-1">Vydehi Hospital <span style={{ float: "right" }}>34 Min</span></p>
                                    <p className="mb-1">Aster Whitefield Hospital <span style={{ float: "right" }}>34 Min</span></p>
                                    <p className="mb-1">Svastha Hospital <span style={{ float: "right" }}>34 Min</span></p>
                                </div>

                                {/* === Column 4: SHOPPING MALLS === */}
                                <div className="col-md-4 col-sm-6 col-12 mb-4">
                                    <h5 style={{ color: "#c79a3a", fontWeight: "600" }}>SHOPPING MALLS</h5>
                                    <p className="mb-1">Orion Uptown Mall <span style={{ float: "right" }}>20 Min</span></p>
                                    <p className="mb-1">Decathlon <span style={{ float: "right" }}>20 Min</span></p>
                                    <p className="mb-1">Phoenix Market City <span style={{ float: "right" }}>25 Min</span></p>
                                    <p className="mb-1">VR Bengaluru Mall <span style={{ float: "right" }}>25 Min</span></p>
                                    <p className="mb-1">Nexus Shantiniketan <span style={{ float: "right" }}>30 Min</span></p>
                                    <p className="mb-1">Park Square Mall ITPL <span style={{ float: "right" }}>33 Min</span></p>
                                    <p className="mb-1">Virginia Mall <span style={{ float: "right" }}>36 Min</span></p>
                                    <p className="mb-1">Nexus Mall Whitefield <span style={{ float: "right" }}>37 Min</span></p>
                                </div>

                                {/* === Column 5: CONNECTIVITY === */}
                                <div className="col-md-4 col-sm-6 col-12 mb-4">
                                    <h5 style={{ color: "#c79a3a", fontWeight: "600" }}>CONNECTIVITY</h5>
                                    <p className="mb-1">KR Puram Metro Station <span style={{ float: "right" }}>15 Min</span></p>
                                    <p className="mb-1">KR Puram Railway Station <span style={{ float: "right" }}>15 Min</span></p>
                                    <p className="mb-1">Hoodi Metro Station <span style={{ float: "right" }}>25 Min</span></p>
                                    <p className="mb-1">Satellite Town Ring Road <span style={{ float: "right" }}>28 Min</span></p>
                                    <p className="mb-1">Kempegowda Int. Airport <span style={{ float: "right" }}>54 Min</span></p>
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
                        src="/images/street/Swimming pool_street.webp"
                        alt="Tennis Player"
                        width={600}
                        height={400}
                        className="img-fluid w-100"
                    />
                </div>
            </section>
            <section
                data-aos="fade-up"
                data-aos-delay="200"
                className="text-center"
                style={{
                    backgroundColor: "#f7f2eb",
                    padding: "80px 0",
                    fontFamily: "'Source Sans 3', sans-serif",
                }}
            >
                <div className="container">
                    <h3
                        className="text-center mb-4"
                        style={{
                            fontSize: "32px",
                            color: "#585858",
                            fontWeight: "600",
                        }}
                    >
                        Frequently Asked Questions
                    </h3>

                    <div className="accordion mx-auto" id="faqAccordion" style={{ maxWidth: "900px" }}>

                        {/* FAQ 1 */}
                        <div className="accordion-item mb-3">
                            <h2 className="accordion-header mb-0" id="faq1-heading">
                                <button
                                    className="accordion-button fs-6 fw-bold"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#faq1"
                                >
                                    1. What is the RERA status and unique proposition of Mythri Street?
                                </button>
                            </h2>
                            <div
                                id="faq1"
                                className="accordion-collapse collapse show"
                                aria-labelledby="faq1-heading"
                                data-bs-parent="#faqAccordion"
                            >
                                <div className="accordion-body" style={{ color: "#585858", textAlign: "justify" }}>
                                    Mythri Street is a registered ultra-luxury high-rise development, approved under RERA. Its uniqueness lies in its “Elevated Urban Living” concept - combining panoramic city views with refined design sensibilities across 25 floors of modern architecture, making it a standout Apartment For Sale In Sarjapur Road for discerning buyers.

                                </div>
                            </div>
                        </div>

                        {/* FAQ 2 */}
                        <div className="accordion-item mb-3">
                            <h2 className="accordion-header mb-0" id="faq2-heading">
                                <button
                                    className="accordion-button fs-6 fw-bold collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#faq2"
                                >
                                    2. How does Mythri Street’s location enhance lifestyle and connectivity?
                                </button>
                            </h2>
                            <div
                                id="faq2"
                                className="accordion-collapse collapse"
                                aria-labelledby="faq2-heading"
                                data-bs-parent="#faqAccordion"
                            >
                                <div className="accordion-body" style={{ color: "#585858", textAlign: "justify" }}>
                                    Located strategically off Sarjapur Road, Mythri Street offers unmatched access to Bengaluru’s major IT hubs, educational institutions, and lifestyle zones. It places residents at the center of convenience - with proximity to work, wellness, and weekend escapes alike, which is a key advantage for anyone exploring an Apartment For Sale In Sarjapur Road with both lifestyle and location in mind.
                                </div>
                            </div>
                        </div>

                        {/* FAQ 3 */}
                        <div className="accordion-item mb-3">
                            <h2 className="accordion-header mb-0" id="faq3-heading">
                                <button
                                    className="accordion-button fs-6 fw-bold collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#faq3"
                                >
                                    3. What are the key amenities defining the Mythri Street experience?
                                </button>
                            </h2>
                            <div
                                id="faq3"
                                className="accordion-collapse collapse"
                                aria-labelledby="faq3-heading"
                                data-bs-parent="#faqAccordion"
                            >
                                <div className="accordion-body" style={{ color: "#585858", textAlign: "justify" }}>
                                    From the Sky Deck and Infinity Pool to the Rooftop Lounge, Fitness Studio, Mini Theatre, and Multi-sport Arenas - Mythri Street’s 60+ curated experiences redefine community living with a global touch of luxury that goes far beyond typical Flats For Sale In Sarjapur Road.
                                </div>
                            </div>
                        </div>

                        {/* FAQ 4 */}
                        <div className="accordion-item mb-3">
                            <h2 className="accordion-header mb-0" id="faq4-heading">
                                <button
                                    className="accordion-button fs-6 fw-bold collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#faq4"
                                >
                                    4. What are the available configurations and specifications at Mythri Street?
                                </button>
                            </h2>
                            <div
                                id="faq4"
                                className="accordion-collapse collapse"
                                aria-labelledby="faq4-heading"
                                data-bs-parent="#faqAccordion"
                            >
                                <div className="accordion-body" style={{ color: "#585858", textAlign: "justify" }}>
                                    Mythri Street offers premium 3 & 4 BHK residences with spacious layouts, high ceilings, and signature finishes. Each home features vitrified flooring, premium fittings, elegant balconies, and intelligent automation systems designed for modern comfort.
                                </div>
                            </div>
                        </div>

                        {/* FAQ 5 */}
                        <div className="accordion-item mb-3">
                            <h2 className="accordion-header mb-0" id="faq5-heading">
                                <button
                                    className="accordion-button fs-6 fw-bold collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#faq5"
                                >
                                    5. What defines Mythri Builders’ approach to quality and delivery?
                                </button>
                            </h2>
                            <div
                                id="faq5"
                                className="accordion-collapse collapse"
                                aria-labelledby="faq5-heading"
                                data-bs-parent="#faqAccordion"
                            >
                                <div className="accordion-body" style={{ color: "#585858", textAlign: "justify" }}>
                                    Mythri Builders is built on trust, punctuality, and excellence. With in-house teams managing every stage of design and construction, Mythri ensures unmatched precision, transparency, and timely delivery — crafting spaces that live up to their promise, every time.
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}
