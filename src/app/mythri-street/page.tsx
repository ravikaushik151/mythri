"use client";

import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Carousel, Container, Row, Col, Form, Button, Modal } from "react-bootstrap";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";

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
                                srcSet="/images/street/Mob_ban_street.webp"
                            />
                            {/* Desktop Image */}
                            <img
                                className="d-block w-100"
                                src="/images/street/Website banner.webp"
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
            <section data-aos="fade-up"
                data-aos-delay="200" className="py-5" style={{ backgroundColor: "#0a1927", color: "#fff" }}>
                <Container>
                    <h3 className="text-center mb-4" style={{ fontWeight: 400 }}>
                        Schedule your visit
                    </h3>
                    <Form>
                        <Row className="justify-content-center">
                            <Col md={3} sm={12} className="mb-3">
                                <Form.Control
                                    type="text"
                                    placeholder="Name*"
                                    required
                                    className="rounded-0"
                                />
                            </Col>
                            <Col md={3} sm={12} className="mb-3">
                                <Form.Control
                                    type="email"
                                    placeholder="Email*"
                                    required
                                    className="rounded-0"
                                />
                            </Col>
                            <Col md={3} sm={12} className="mb-3">
                                <Form.Control
                                    type="tel"
                                    placeholder="Phone*"
                                    required
                                    className="rounded-0"
                                />
                            </Col>
                            <Col md="auto" sm={12} className="mb-3">
                                <Button
                                    variant="outline-light"
                                    type="submit"
                                    className="rounded-0 px-4"
                                >
                                    Submit
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Container>
            </section>
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
                        Elevated Living, Crafted for
                    </h6>

                    <h2
                        style={{
                            color: "#b67e57",
                            fontSize: "36px",
                            fontWeight: 500,
                            letterSpacing: "1px",
                        }}
                    >
                        The Visionary Few
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
                        className="mx-auto mt-3"
                        style={{
                            maxWidth: "700px",
                            fontSize: "19px",
                            color: "#585858",
                            lineHeight: "1.8",
                            fontFamily: "'Source Sans 3', sans-serif",
                        }}
                    >
                        Rising gracefully in the heart of Bengaluru’s eastern skyline, Mythri Street stands as an address of quiet power and urban sophistication.
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
                        Where bold architecture meets timeless artistry, each residence captures the essence of vertical luxury — soaring views, serene interiors, and the rare sense of being both above the city and deeply connected to it.<br />Every home is an expression of refined living — designed for those who build tomorrow, yet value the beauty of today.<br />This is not just a home. It’s your statement — poised, confident, and enduring.

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
                                2.5 Acres <br /> 25 Floors
                            </h3>
                        </Col>

                        <Col md={3} sm={6} xs={12} className="mb-3 border-start border-end">
                            <h3 className="mb-md-0 mb-4 microsite-about">
                                250+ Residences <br />  3 & 4 BHK Sky Homes
                            </h3>
                        </Col>

                        <Col md={3} sm={6} xs={12} className="mb-3">
                            <h3 className="mb-0 microsite-about">
                                60+ Curated Experiences <br /> Amenities
                            </h3>
                        </Col>
                    </Row>

                    {/* ===== Image ===== */}
                    <div className="mt-4">
                        <Image
                            src="/images/street/Street_Earth home.webp"
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
                            maxWidth: "700px",
                            fontSize: "19px",
                            color: "#585858",
                            lineHeight: "1.8",
                            fontFamily: "'Source Sans 3', sans-serif",
                        }}
                    >Where skyline energy meets understated grace. <br />Mythri Street is a celebration of elevation — not just in height, but in perspective. It’s for those who rise early, think deeply, dream greatly, and prefer their peace with a view. Every inch of space, from the double-height lobbies to the panoramic decks, embodies balance — dynamic, yet tranquil.

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
                <div className="container-fluid">
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
                                    maxWidth: "700px",
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
                                    maxWidth: "700px",
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
                                            maxWidth: "700px",
                                            fontSize: "19px",
                                            color: "#585858",
                                            lineHeight: "1.8",
                                            width: "90%",
                                        }}
                                    >Every amenity is designed to heighten your sense of belonging — spaces that transform from function to feeling. <br />From serene rooftop zones to energized courts and lounges, Mythri Street offers the balance modern life craves.</p>

                                    <div className="col-md-6 col-6 px-md-5">
                                        <ul className="list-unstyled">
                                            <li>Rooftop Infinity Pool & Sky Lounge</li>
                                            <li>Fitness Studio & Meditation Deck</li>
                                            <li>Multipurpose Sports Arena</li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6 col-6 px-md-5">
                                        <ul className="list-unstyled">
                                            <li>Children’s Play Courts & Green Lawns</li>
                                            <li>Indoor Lounge, Mini Theatre & Work Pods</li>
                                        </ul>
                                    </div>
                                    <p
                                        className="mx-auto mt-3 text-center"
                                        style={{
                                            maxWidth: "700px",
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
                                    maxWidth: "700px",
                                    fontSize: "19px",
                                    color: "#585858",
                                    lineHeight: "1.8",
                                }}
                            >Crafted with precision, each residence embraces natural light, intelligent ventilation, and a seamless sense of openness. <br /> The materials, the textures, and the design — every element is chosen to reflect refinement that endures. <br />Here, modern architecture meets soulful detailing. <br /> Your home doesn’t just rise with the skyline — it elevates your every day.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section data-aos="fade-up"
                data-aos-delay="200" className="p-0">
                <div className="container-fluid g-0">
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
                            maxWidth: "700px",
                            fontSize: "19px",
                            color: "#585858",
                            lineHeight: "1.8",
                        }}
                    >
                        With Bengaluru expanding eastward, Mythri Street stands poised at the heart of exponential growth.<br />Surrounded by innovation corridors, commercial hubs, and next-gen infrastructure, this address is more than prime &mdash; it&rsquo;s prophetic.<br />An investment not just in space, but in future value and timeless design.
                    </p>

                    {/* Buttons */}
                    <div className="d-flex justify-content-center gap-3 mt-4">
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
                                    className="d-block w-100 rounded"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image
                                    src="/images/street/project img2_street.webp"
                                    alt="Project View 2"
                                    width={900}
                                    height={500}
                                    className="d-block w-100 rounded"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image
                                    src="/images/street/project img3_street.webp"
                                    alt="Project View 3"
                                    width={900}
                                    height={500}
                                    className="d-block w-100 rounded"
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
                                maxWidth: "700px",
                                fontSize: "19px",
                                color: "#585858",
                                lineHeight: "1.8",
                            }}
                        >
                            Positioned strategically off Bengaluru&rsquo;s IT growth corridor, <strong>Mythri Street</strong> offers instant access to Sarjapur, Whitefield, and Electronic City.<br />Whether it&rsquo;s the corporate hubs, elite schools, or fine-dining destinations &mdash; your world stays within reach.<br />Yet, when you return home, the city&rsquo;s noise fades into quiet luxury.<br /><strong>Seamless Connectivity:</strong><strong><br /></strong>Outer Ring Road &ndash; 5 min | Wipro &amp; RGA Tech Parks &ndash; 8 min | HSR &amp; Bellandur &ndash; 10&ndash;15 min | Whitefield &ndash; 20 min
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
                            <div className="d-md-block d-none">
                                <Image
                                    src="/images/street/Street_map.webp"
                                    alt="location"
                                    width={600}
                                    height={700}
                                    className="d-block w-100 mx-auto"
                                />
                            </div>
                            <div className="d-md-none d-block">
                                <Image
                                    src="/images/street/Street_map.webp"
                                    alt="location"
                                    width={400}
                                    height={500}
                                    className="d-block w-100 mx-auto"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5  justify-content-center">
                        {/* Left side heading */}
                        <div className="col-md-3 d-flex align-items-center justify-content-center">
                            <h3 className="text-center mb-4"
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
                                {/* === Column 1: TECH PARKS === */}
                                <div className="col-md-4 col-sm-6 col-12 mb-4">
                                    <h5 style={{ color: "#c79a3a", fontWeight: "600" }}>TECH PARKS</h5>
                                    <p className="mb-1">RMZ Infinity – <span style={{ float: "right" }}>19 Min</span></p>
                                    <p className="mb-1">Beary’s Global Research (BCRT) <span style={{ float: "right" }}>23 Min</span></p>
                                    <p className="mb-1">Bhoruka Technology Park <span style={{ float: "right" }}>25 Min</span></p>
                                    <p className="mb-1">Bagmane Tech Park <span style={{ float: "right" }}>26 Min</span></p>
                                    <p className="mb-1">Nalapad Brigade Centre <span style={{ float: "right" }}>26 Min</span></p>
                                    <p className="mb-1">Bagmane Business Park <span style={{ float: "right" }}>26 Min</span></p>
                                    <p className="mb-1">Manyata Tech Park <span style={{ float: "right" }}>28 Min</span></p>
                                    <p className="mb-1">HM Tech Park <span style={{ float: "right" }}>29 Min</span></p>
                                    <p className="mb-1">Kalyani Magnum Tech Park <span style={{ float: "right" }}>30 Min</span></p>
                                    <p className="mb-1">International Tech Park (ITPL) <span style={{ float: "right" }}>34 Min</span></p>
                                </div>

                                {/* === Column 2: EDUCATIONAL === */}
                                <div className="col-md-4 col-sm-6 col-12 mb-4">
                                    <h5 style={{ color: "#c79a3a", fontWeight: "600" }}>EDUCATIONAL</h5>
                                    <p className="mb-1">Birla Open Mind Intl. School <span style={{ float: "right" }}>5 Min</span></p>
                                    <p className="mb-1">Narayana School <span style={{ float: "right" }}>5 Min</span></p>
                                    <p className="mb-1">New Indus Valley School <span style={{ float: "right" }}>6 Min</span></p>
                                    <p className="mb-1">Don Bosco College <span style={{ float: "right" }}>7 Min</span></p>
                                    <p className="mb-1">Kristu Jyothi College <span style={{ float: "right" }}>7 Min</span></p>
                                    <p className="mb-1">Garden City Universtreet <span style={{ float: "right" }}>8 Min</span></p>
                                    <p className="mb-1">Christ International School <span style={{ float: "right" }}>8 Min</span></p>
                                    <p className="mb-1">New Baldwin Intl. School <span style={{ float: "right" }}>15 Min</span></p>
                                    <p className="mb-1">East Point Group of Institutions <span style={{ float: "right" }}>19 Min</span></p>
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
                                    <p className="mb-1">Sri Sathya Sai Super Hospital <span style={{ float: "right" }}>33 Min</span></p>
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
                                    <p className="mb-1">Satellite Town Ring Road (STRR) <span style={{ float: "right" }}>28 Min</span></p>
                                    <p className="mb-1">Kempegowda Int. Airport <span style={{ float: "right" }}>54 Min</span></p>
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
                                    className="accordion-button"
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
                                    Mythri Street is a registered ultra-luxury high-rise development, approved under RERA. Its uniqueness lies in its “Elevated Urban Living” concept — combining panoramic city views with refined design sensibilities across 25 floors of modern architecture.

                                </div>
                            </div>
                        </div>

                        {/* FAQ 2 */}
                        <div className="accordion-item mb-3">
                            <h2 className="accordion-header mb-0" id="faq2-heading">
                                <button
                                    className="accordion-button collapsed"
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
                                    Located strategically off Sarjapur Road, Mythri Street offers unmatched access to Bengaluru’s major IT hubs, educational institutions, and lifestyle zones. It places residents at the center of convenience — with proximity to work, wellness, and weekend escapes alike.
                                </div>
                            </div>
                        </div>

                        {/* FAQ 3 */}
                        <div className="accordion-item mb-3">
                            <h2 className="accordion-header mb-0" id="faq3-heading">
                                <button
                                    className="accordion-button collapsed"
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
                                    From the Sky Deck and Infinity Pool to the Rooftop Lounge, Fitness Studio, Mini Theatre, and Multi-sport Arenas — Mythri Street’s 60+ curated experiences redefine community living with a global touch of luxury.
                                </div>
                            </div>
                        </div>

                        {/* FAQ 4 */}
                        <div className="accordion-item mb-3">
                            <h2 className="accordion-header mb-0" id="faq4-heading">
                                <button
                                    className="accordion-button collapsed"
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
                                    className="accordion-button collapsed"
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
