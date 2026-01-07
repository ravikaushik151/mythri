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
                                srcSet="/images/sity/Mobile banner_sity.webp"
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
                <div className="rera-badge">
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
                    fontFamily: "’source Sans 3', sans-serif",
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
                            fontSize: "19px",
                            color: "#585858",
                            lineHeight: "1.8",
                            fontFamily: "’source Sans 3', sans-serif",
                        }}
                    >
                        Positioned perfectly near the dynamic energy of Sarjapur Road, Mythri Sity achieves a rare and elegant balance. For discerning homebuyers exploring 2 BHK flats in Sarjapur Road along with spacious 3 and 4 BHK residences, it is where the deep peace of a Tropical Calm environment beautifully merges with the practicality of Mindful Design.
                    </p>
                    <p
                        className="mx-auto mt-3"
                        style={{
                            maxWidth: "900px",
                            fontSize: "19px",
                            color: "#585858",
                            lineHeight: "1.8",
                            fontFamily: "’source Sans 3', sans-serif",
                        }}
                    >
                        This is more than a luxury residence; it is a space intentionally shaped for your well-being. Every home is a sanctuary, optimized for natural light, effortless ventilation, and the tranquil vision of the sky-toned lagoon. Mythri Sity offers you the clarity to truly live, a seamless experience of elegance and ease, without compromising your connection to the city’s heart, in a coveted apartment in Sarjapur Road that feels like a private retreat.
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
                                2, 3 & 4 BHK <br /> Premium Homes
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
                                5 Acres <br /> Project Land Area
                            </h3>
                        </Col>

                        <Col md={4} sm={6} xs={12} className="mb-3 border-start border-end">
                            <h3 className="mb-0 microsite-about">
                                423 <br /> Apartments
                            </h3>
                        </Col>

                        <Col md={4} sm={6} xs={12} className="mb-3">
                            <h3 className="mb-0 microsite-about">
                                75% <br /> Open Space
                            </h3>
                        </Col>


                    </Row>

                    {/* ===== Image ===== */}
                    <div className="mt-4">
                        <Image
                            src="/images/sity/earth homes_sity.webp"
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
                        The Art of Presence
                    </h3>
                    <p
                        className="mx-auto mt-3"
                        style={{
                            maxWidth: "900px",
                            fontSize: "19px",
                            color: "#585858",
                            lineHeight: "1.8",
                            fontFamily: "’source Sans 3', sans-serif",
                        }}
                    >A life defined not by deadlines, but by the quiet rhythm of the tropics. Every element, from the sun-warmed palette to the lush landscaping, is intentional. Mythri Sity is an invitation to slow down, lift your spirit, and experience the rare sensation of having arrived.
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
                    fontFamily: "’source Sans 3', sans-serif",
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
            </section>
            <section data-aos="fade-up"
                data-aos-delay="200" className="life-earth" style={{ backgroundColor: "#f7f2eb", padding: "80px 0", fontFamily: "’source Sans 3', sans-serif", }}>
                <div className="container">
                    <h3 className="text-center mb-4"
                        style={{
                            fontSize: "35px",
                            color: "#585858",
                            lineHeight: "1.8",
                        }}>
                        Flow. Grace. Sanctuary.
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
                    </div>

                    {/* Row 2: Image left, Text right */}
                    <div className="row align-items-center">
                        <div className="col-md-6 text-center mb-4 mb-md-0 p-0">
                            <Image
                                src="/images/sity/Amenities_img2_sity.webp"
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

                                    <div className="col-md-6 col-6 px-md-5">
                                        <ul className="list-unstyled">
                                            <li>Grand Clubhouse</li>
                                            <li>Children’s Play Area</li>
                                            <li>Indoor Games</li>
                                            <li>Multi-purpose Sports Court</li>
                                            <li>Swimming pool </li>
                                            <li>Kid’s pool</li>
                                            <li>Senior Citizens Seating</li>
                                            <li>Gym </li>
                                            <li>Yoga Studio</li>
                                            <li>24*7 Security</li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6 col-6 px-md-5">
                                        <ul className="list-unstyled">
                                            <li>CCTV</li>
                                            <li>Landscaped Gardens</li>
                                            <li>Walking</li>
                                            <li>Surveillance</li>
                                            <li>paths</li>
                                            <li>Power Backup</li>
                                            <li>Rainwater</li>
                                            <li>Amphitheatre</li>
                                            <li>Open Party</li>
                                            <li>Harvesting</li>
                                            <li>Lawn</li>
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
                                    maxWidth: "900px",
                                    fontSize: "19px",
                                    color: "#585858",
                                    lineHeight: "1.8",
                                }}
                            >Seventy-five percent open space dedicated to life. Enjoy the Walking Trails, the Butterfly Garden, or the quiet focus of the Outdoor Working Pods.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section data-aos="fade-up"
                data-aos-delay="200" className="p-0">
                <div className="container g-0">
                    <Image
                        src="/images/sity/Interior img-sity.webp"
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
                style={{ backgroundColor: "#f7f2eb", padding: "80px 0", fontFamily: "’source Sans 3', sans-serif", }}
            >
                <div className="container">
                    {/* Section Title */}
                    <h3 className="text-center mb-4"
                        style={{
                            fontSize: "35px",
                            color: "#585858",
                            lineHeight: "1.8",
                        }}>
                        A Home That Breathes.
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
                        A rare view of what truly luxurious living in an apartment in Sarjapur Road looks like. Every residence is meticulously crafted to maximize light and ventilation, ensuring your home is in harmony with the natural environment. Expect uncompromised quality, premium specifications, and tropical delight in every finish.
                    </p>

                    {/* Buttons */}
                    <div className="d-flex justify-content-center gap-3 mt-4">
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
                            onClick={() => handleShow("/images/sity/sity master plan images.webp")}
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
                        The Project Setting at Sity
                    </h3>

                    <div className="col-lg-10 mx-auto">
                        <Carousel indicators={false} controls={true} interval={3000}>
                            <Carousel.Item>
                                <Image
                                    src="/images/sity/project img1.webp"
                                    alt="Project View 1"
                                    width={900}
                                    height={500}
                                    className="d-block w-100 rounded carousel-img"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image
                                    src="/images/sity/project img2.webp"
                                    alt="Project View 2"
                                    width={900}
                                    height={500}
                                    className="d-block w-100 rounded carousel-img"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image
                                    src="/images/sity/project img3.webp"
                                    alt="Project View 3"
                                    width={900}
                                    height={500}
                                    className="d-block w-100 rounded carousel-img"
                                />
                            </Carousel.Item>
                        </Carousel>

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
                            Mythri Sity places you in Bengaluru’s fastest-growing ecosystem, off Sarjapur Road, making it one of the most desirable addresses for 2 BHK flats in Sarjapur Road and premium lifestyle upgrades. Enjoy seamless connectivity to key IT corridors. The unparalleled advantage: being minutes from the proposed SWIFT City, establishing this address as the epicenter of tomorrow’s progress.
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
                thumbnail="/images/sity-youtube.webp"
                youtubeId="BcjmTU1auwE"
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
                style={{ backgroundColor: "#f7f2eb", padding: "80px 0", fontFamily: "’source Sans 3', sans-serif", }}
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
                                {/* === Column 1: HEALTHCARE === */}
                                <div className="col-md-6 col-sm-6 col-12 mb-4">
                                    <h5 style={{ color: "#c79a3a", fontWeight: "600" }}>HEALTHCARE</h5>
                                    <p className="mb-1">Punarjani Ayurvedic Hospital <span style={{ float: "right" }}>2 Min</span></p>
                                    <p className="mb-1">Motherhood Hospital <span style={{ float: "right" }}>5 Min</span></p>
                                    <p className="mb-1">BN Specialty Hospital <span style={{ float: "right" }}>6 Min</span></p>
                                    <p className="mb-1">Cloudnine Hospital, Sarjapur Road <span style={{ float: "right" }}>6 Min</span></p>
                                    <p className="mb-1">Manipal Hospital <span style={{ float: "right" }}>7 Min</span></p>
                                    <p className="mb-1">Sakra World Hospital <span style={{ float: "right" }}>9 Min</span></p>
                                    <p className="mb-1">Narayana Multispeciality Hospital <span style={{ float: "right" }}>10 Min</span></p>
                                </div>

                                {/* === Column 2: FOOD & LEISURE === */}
                                <div className="col-md-6 col-sm-6 col-12 mb-4">
                                    <h5 style={{ color: "#c79a3a", fontWeight: "600" }}>FOOD & LEISURE</h5>
                                    <p className="mb-1">The Golden Circle Brewery <span style={{ float: "right" }}>4 Min</span></p>
                                    <p className="mb-1">The Bier Library <span style={{ float: "right" }}>4 Min</span></p>
                                    <p className="mb-1">Sarjapur Social <span style={{ float: "right" }}>5 Min</span></p>
                                    <p className="mb-1">Street 1522 <span style={{ float: "right" }}>2 Min</span></p>
                                    <p className="mb-1">Byg Brewski <span style={{ float: "right" }}>6 Min</span></p>
                                    <p className="mb-1">Roxie <span style={{ float: "right" }}>7 Min</span></p>
                                    <p className="mb-1">Macaw by Stories <span style={{ float: "right" }}>8 Min</span></p>
                                </div>

                                {/* === Column 4: SHOPPING MALLS === */}
                                <div className="col-md-6 col-sm-6 col-12 mb-4">
                                    <h5 style={{ color: "#c79a3a", fontWeight: "600" }}>SHOPPING MALLS</h5>
                                    <p className="mb-1">Decathlon <span style={{ float: "right" }}>4 Min</span></p>
                                    <p className="mb-1">PVR Spirit Mall <span style={{ float: "right" }}>8 Min</span></p>
                                    <p className="mb-1">Forum Value Mall <span style={{ float: "right" }}>14 Min</span></p>
                                    <p className="mb-1">Total Mall <span style={{ float: "right" }}>15 Min</span></p>
                                </div>

                                {/* === Column 3: ENTERTAINMENT & SPORTS === */}
                                <div className="col-md-6 col-sm-6 col-12 mb-4">
                                    <h5 style={{ color: "#c79a3a", fontWeight: "600" }}>ENTERTAINMENT & SPORTS</h5>
                                    <p className="mb-1">Red Riders Go-Karting <span style={{ float: "right" }}>2 Min</span></p>
                                    <p className="mb-1">Lakedew Lions Cricket Ground <span style={{ float: "right" }}>2 Min</span></p>
                                    <p className="mb-1">Powerplay Cricket Ground <span style={{ float: "right" }}>2 Min</span></p>
                                    <p className="mb-1">GSS Sports Arena <span style={{ float: "right" }}>2 Min</span></p>
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
                        src="/images/sity/Swimming pool_sity_microsite.webp"
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
                    fontFamily: "’source Sans 3', sans-serif",
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
                                    1. What is the official RERA status and unique proposition of Mythri Sity, Sarjapur Road?
                                </button>
                            </h2>
                            <div
                                id="faq1"
                                className="accordion-collapse collapse show"
                                aria-labelledby="faq1-heading"
                                data-bs-parent="#faqAccordion"
                            >
                                <div className="accordion-body" style={{ color: "#585858", textAlign: "justify" }}>
                                    Mythri Sity is a fully compliant ultra-luxury project with the RERA Registration Number PRM/KA/RERA/1251/446/PR/300525/007802. Our unique proposition is defined by Tropical Calm meets Mindful Design. The project is a rare 5-acre vertical sanctuary, offering 423 ultra-luxury residences surrounded by over 75% open, landscaped space.
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
                                    className="accordion-button collapsed"
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
                                    className="accordion-button collapsed"
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
                                    className="accordion-button collapsed"
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
