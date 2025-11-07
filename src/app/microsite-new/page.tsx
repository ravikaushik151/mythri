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
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/images/banner1.jpg"
                            alt="First slide"
                            style={{ height: "80vh", objectFit: "cover" }}
                        />
                        <Carousel.Caption className="d-none">
                            <h3>Welcome to Our Project</h3>
                            <p>Discover luxury living like never before.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/images/banner1.jpg"
                            alt="Second slide"
                            style={{ height: "80vh", objectFit: "cover" }}
                        />
                        <Carousel.Caption className="d-none">
                            <h3>Your Dream Home Awaits</h3>
                            <p>Schedule a visit today and experience excellence.</p>
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
                    backgroundColor: "#f9f3eb",
                    color: "#5c4a3b",
                    padding: "80px 0",
                    fontFamily: "'Cormorant Garamond', serif",
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
                        The
                    </h6>

                    <h2
                        style={{
                            color: "#b67e57",
                            fontSize: "36px",
                            fontWeight: 500,
                            letterSpacing: "1px",
                        }}
                    >
                        The Earth Homes
                    </h2>

                    {/* ===== Description ===== */}
                    <p
                        className="mx-auto mt-3"
                        style={{
                            maxWidth: "700px",
                            fontSize: "19px",
                            color: "#585858",
                            lineHeight: "1.8",
                            fontFamily: "'Cormorant Garamond', serif",
                        }}
                    >
                        Tucked away in the tranquil Nandi Hills, The Earth Homes offer a retreat
                        from the ordinary. Designed for a slower, more fulfilling life, they
                        provide the space to pause, reconnect, and truly live. Here, every
                        moment feels intentional, whether spent in nature, with loved ones, or
                        simply enjoying the quiet.
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
                                Duplex 2BHK <br />
                                Holiday Homes
                            </h3>
                        </Col>

                        <Col md={3} sm={6} xs={12} className="mb-3 border-start border-end">
                            <h3 className="mb-md-0 mb-4 microsite-about">
                                30 Mins to Airport <br /> 18 Min to Foxconn
                            </h3>
                        </Col>

                        <Col md={3} sm={6} xs={12} className="mb-3">
                            <h3 className="mb-0 microsite-about">
                                Nordic Design with <br /> 1600 + SFT Built-up
                            </h3>
                        </Col>
                    </Row>

                    {/* ===== Image ===== */}
                    <div className="mt-4">
                        <Image
                            src="/images/Svam_Earth_Home-min-1536x959.jpg"
                            alt="The Earth Homes"
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
                            fontFamily: "'Cormorant Garamond', serif",
                        }}
                    >To truly complement this landscape, we turned to Nordic architecture—defined by its simplicity, warmth, and harmony with nature. Expansive windows frame the hills, open layouts invite natural light, and every element is designed to enhance the connection between indoor comfort and the beauty of the outdoors.</p>
                </Container>

                {/* ===== Google Font ===== */}
                <style jsx global>{`
                    @import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&display=swap");
                `}</style>
            </section>
            <section data-aos="fade-up"
                data-aos-delay="200" className="p-0" style={{
                    backgroundColor: "#f9f3eb",
                    color: "#5c4a3b",
                    padding: "80px 0",
                    fontFamily: "'Cormorant Garamond', serif",
                }}>
                <div className="container-fluid g-0">
                    <Image
                        src="/images/Untitled-3-min-1.jpg"
                        alt="Tennis Player"
                        width={600}
                        height={400}
                        className="img-fluid w-100"
                    />
                </div>
            </section>
            <section data-aos="fade-up"
                data-aos-delay="200" className="life-earth" style={{ backgroundColor: "#f7f2eb", padding: "80px 0", fontFamily: "'Cormorant Garamond', serif", }}>
                <div className="container-fluid">
                    <h3 className="text-center mb-5"
                        style={{
                            fontSize: "35px",
                            color: "#585858",
                            lineHeight: "1.8",
                        }}>
                        Life at The Earth Homes
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
                                Mornings begin with fresh air and open views, whether it’s a walk through the gardens
                                or coffee on the balcony. As the day unfolds, there’s something for every mood—swim in
                                the pool, challenge friends to a game of tennis or badminton, or fire up the grill for
                                a relaxed afternoon barbecue. Whether you seek movement, connection, or quiet moments,
                                the amenities are designed to make every day effortless and fulfilling.
                            </p>
                        </div>
                        <div className="col-md-6 text-center p-0">
                            <Image
                                src="/images/Untitled-4-min-1.jpg"
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
                                src="/images/Untitled-5-min-1.jpg"
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
                                            <li>
                                                <span>State of the Art Club House</span>
                                            </li>
                                            <li>
                                                <span>Basketball</span>
                                            </li>
                                            <li>
                                                <span>Futsal Court</span>
                                            </li>
                                            <li>
                                                <span>Tennis Court</span>
                                            </li>
                                            <li>
                                                <span>Pickleball Court</span>
                                            </li>
                                            <li>
                                                <span>Landscaped Parks</span>
                                            </li>
                                            <li>
                                                <span>Kids Play Area</span>
                                            </li>
                                            <li>
                                                <span>Creche</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6 col-6 px-md-5">
                                        <ul className="list-unstyled">
                                            <li>
                                                <span>Swimming Pool</span>
                                            </li>
                                            <li>
                                                <span>Indoor Baminton Courts</span>
                                            </li>
                                            <li>
                                                <span>Gaming Room</span>
                                            </li>
                                            <li>
                                                <span>Gym &amp; Yoga Room</span>
                                            </li>
                                            <li>
                                                <span>Amphitheatre</span>
                                            </li>
                                            <li>
                                                <span>Cafe</span>
                                            </li>
                                            <li>
                                                <span>Banquet Hall</span>
                                            </li>
                                            <li>
                                                <span>Banquet Hall</span>
                                            </li>
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
                            >As evening sets in, the spaces come alive in a different way. Unwind on the veranda with a book, take a stroll through the landscaped parks, or gather with friends for a quiet dinner under the stars. </p>
                        </div>
                    </div>
                </div>
            </section>

            <section data-aos="fade-up"
                data-aos-delay="200" className="p-0">
                <div className="container-fluid g-0">
                    <Image
                        src="/images/Untitled-6-min-1-1536x923.jpg"
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
                style={{ backgroundColor: "#f7f2eb", padding: "80px 0", fontFamily: "'Cormorant Garamond', serif", }}
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
                    <h3 className="text-center mb-5"
                        style={{
                            fontSize: "35px",
                            color: "#585858",
                            lineHeight: "1.8",
                        }}>
                        The Project Setting at THE EARTH
                    </h3>

                    <div className="col-lg-10 mx-auto">
                        <Carousel indicators={false} controls={true} interval={3000}>
                            <Carousel.Item>
                                <Image
                                    src="/images/g5.jpg"
                                    alt="Project View 1"
                                    width={900}
                                    height={500}
                                    className="d-block w-100 rounded"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image
                                    src="/images/g6.jpg"
                                    alt="Project View 2"
                                    width={900}
                                    height={500}
                                    className="d-block w-100 rounded"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image
                                    src="/images/g7.jpg"
                                    alt="Project View 3"
                                    width={900}
                                    height={500}
                                    className="d-block w-100 rounded"
                                />
                            </Carousel.Item>
                        </Carousel>

                        <p
                            className="mx-auto"
                            style={{
                                marginTop: "60px",
                                maxWidth: "700px",
                                fontSize: "19px",
                                color: "#585858",
                                lineHeight: "1.8",
                            }}
                        >
                            The Earth Homes is part of The Earth at Nandi Hills, a vast, nature-rich community with a clubhouse, premium amenities, and lush surroundings.
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
            <section data-aos="fade-up"
                data-aos-delay="200"
                style={{ backgroundColor: "#f7f2eb", padding: "80px 0", fontFamily: "'Cormorant Garamond', serif", }}
            >
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="d-md-block d-none">
                                <Image
                                    src="/images/MAP-min-1536x1521.jpg"
                                    alt="location"
                                    width={600}
                                    height={900}
                                    className="d-block w-50 mx-auto"
                                />
                            </div>
                            <div className="d-md-none d-block">
                                <Image
                                    src="/images/MAP-min-1536x1521.jpg"
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
                            <h3 className="text-center mb-5"
                                style={{
                                    fontSize: "35px",
                                    color: "#585858",
                                    lineHeight: "1.8",
                                }}>
                                Strategic Location
                            </h3>
                        </div>

                        {/* Right side location list */}
                        <div className="col-md-9">
                            <div
                                className="row"
                                style={{
                                    fontSize: "19px",
                                    color: "#585858",
                                    lineHeight: "2",
                                }}
                            >
                                {/* Column 1 */}
                                <div className="col-md-3 col-sm-6 col-6">
                                    <p className="mb-1">Nandi Hills</p>
                                    <p className="mb-1">Mulberry Shades</p>
                                    <p className="mb-1">Harrow International School</p>
                                    <p className="mb-1">Foxconn</p>
                                    <p className="mb-1">JW Marriott</p>
                                    <p className="mb-1">Manipal Hospital Doddaballapur</p>
                                    <p className="mb-1">STRR</p>
                                    <p className="mb-1">Doddaballapur</p>
                                </div>

                                {/* Column 2 */}
                                <div className="col-md-3 col-sm-6 col-6">
                                    <p className="mb-1">10 Minutes</p>
                                    <p className="mb-1">10 Minutes</p>
                                    <p className="mb-1">15 Minutes</p>
                                    <p className="mb-1">18 Minutes</p>
                                    <p className="mb-1">20 Minutes</p>
                                    <p className="mb-1">20 Minutes</p>
                                    <p className="mb-1">20 Minutes</p>
                                    <p className="mb-1">25 Minutes</p>
                                    <p className="mb-1">25 Minutes</p>
                                </div>

                                {/* Column 3 */}
                                <div className="col-md-3 col-sm-12 col-6">
                                    <p className="mb-1">Stonehill International School</p>
                                    <p className="mb-1">Padukone-Dravid Centre</p>
                                    <p className="mb-1">New Forum Mall</p>
                                    <p className="mb-1">TechCloud</p>
                                    <p className="mb-1">Bangalore Airport</p>
                                    <p className="mb-1">Aerospace Park</p>
                                    <p className="mb-1">New Amazon HQ</p>
                                    <p className="mb-1">Bagaluru</p>
                                    <p className="mb-1">Hebbal Junction</p>
                                </div>
                                <div className="col-md-3 col-sm-12 col-6">
                                    <p className="mb-1">35 Minutes</p>
                                    <p className="mb-1">35 Minutes</p>
                                    <p className="mb-1">35 Minutes</p>
                                    <p className="mb-1">38 Minutes</p>
                                    <p className="mb-1">40 Minutes</p>
                                    <p className="mb-1">40 Minutes</p>
                                    <p className="mb-1">45 Minutes</p>
                                    <p className="mb-1">50 Minutes</p>
                                    <p className="mb-1">60 Minutes</p>
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
                        src="/images/Untitled-8-min-1-1536x705.jpg"
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
                style={{ backgroundColor: "#f7f2eb", padding: "80px 0", fontFamily: "'Cormorant Garamond', serif", }}
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
                        className="mx-auto"
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
                            src="/images/Untitled-21-min-1.jpg"
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
