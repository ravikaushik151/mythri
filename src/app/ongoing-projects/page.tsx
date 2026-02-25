// components/ProjectShowcase.js
"use client";
import React, { useState } from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import styles from "../ProjectShowcase.module.css";
import ContactForm from "../components/ContactForm";

// 🔥 UPDATED PROJECT LIST — added slug
const projects = [
    {
        id: 1,
        name: "Mythri Street",
        slug: "street-sarjapur-road-2-3-bhk",
        location: "Off Sarjapur Road, Near RGA Tech Park",
        description:
            "Mythri Street is a thoughtfully crafted residential landmark spread across 3 acres of prime land. With 80% open spaces, it blends urban sophistication with serene living, making it an ideal choice for anyone looking for an Apartment For Sale In Sarjapur Road.",
        image: "/images/street.webp",
        whatsapp: "9513140111",
        call: "tel:+919513140111",
        details: {
            type: "2 & 3 BHK Residential Apartments",
            //size: "1100 sqft - 1550 sqft (Approx.)",
            status: "Under Construction",
            possession: "2028",
            units: "219 Units",
        },
    },
    {
        id: 2,
        name: "Mythri Sity",
        slug: "mythri-sity",
        location: "Off Sarjapur Road, Near RGA Tech Park",
        description:
            "Mythri Sity is where thoughtful design meets timeless comfort. Spread across 5 acres, it brings together community living and large open spaces.",
        image: "/images/sity.webp",
        whatsapp: "9513140111",
        call: "tel:+919513140111",
        details: {
            type: "Residential Apartments",
            //size: "5 Acre Development",
            status: "Under Construction",
            possession: "2028",
            units: "5 Acre Development",
        },
    },
    {
        id: 3,
        name: "Mythri Sikharam",
        slug: "mythri-sikharam",
        location: "Off Sarjapur Road, Hadosiddapura",
        description:
            "Mythri Sikharam offers a balance of modern living and comfort. Spacious, airy homes, including well-planned 2 BHK flats in Sarjapur Road, with premium materials enhance aesthetics and usability.",
        image: "/images/sikharam.webp",
        whatsapp: "8951370333",
        call: "tel:+918951370333",
        details: {
            type: "2 & 3 BHK Residential Apartments",
            // size: "1150 sqft - 1600 sqft (Approx.)",
            status: "Under Construction",
            possession: "October 2027",
            units: "182 Units",
        },
    },
    {
        id: 4,
        name: "Mythri Sankalp",
        slug: "mythri-sankalp",
        location: "KR Puram, Bengaluru",
        description:
            "Mythri Sankalp offers spacious 2 & 3 BHK apartments designed for comfort and modern living. RERA approved, it blends convenience and luxury.",
        image: "/images/mythrisapphire.webp",
        whatsapp: "9741218002",
        call: "tel:+919741218002",
        details: {
            type: "2 & 3 BHK Residential Apartments",
            //size: "1200 sqft - 1600 sqft (Approx.)",
            status: "Under Construction",
            possession: "December 2026",
            units: "101 Units",
        },
    },
];

export default function ProjectShowcase() {
    const [hoveredProject, setHoveredProject] = useState(null);
    const [showEnquiryModal, setShowEnquiryModal] = useState(false);
    const [enquiringProject, setEnquiringProject] = useState(null);

    const handleClose = () => {
        setShowEnquiryModal(false);
        setEnquiringProject(null);
    };

    const handleShow = (project) => {
        setEnquiringProject(project);
        setShowEnquiryModal(true);
    };

    const handleCallNow = (number) => {
        window.location.href = number;
    };

    const handleWhatsapp = (number) => {
        const message =
            "I am interested in one of your ongoing projects. Please contact me.";
        const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    };

    return (
        <>
            <div id="carouselExampleDark" className="header-section">
                <div className="row">
                    <div className="col-md-12">
                        <div className="image-container position-relative">
                            <Image
                                src="/images/mythri project page.webp"
                                height={2880}
                                width={1920}
                                className="img-fluid masterpiece"
                                alt="masterpiece"
                            />
                            <div className="overlay2 position-absolute top-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center">
                                <div className="text-white d-block text-center">
                                    <p className="fs-1 mb-3 text-uppercase">
                                        Ongoing Projects
                                    </p>
                                    <p className="fs-6 text-center">
                                        <Link
                                            className="text-white text-decoration-none"
                                            href="https://mythribuilders.com/"
                                        >
                                            Home
                                        </Link>{" "}
                                        / Ongoing Projects
                                    </p>
                                    <p className="d-none">Explore our ongoing communities featuring Flats For Sale In Sarjapur Road, built around comfort, connectivity, and thoughtful design.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="py-5 bg-white text-dark">
                <Container>
                    <Row className="justify-content-center">
                        {projects.map((project) => (
                            <Col md={10} className="mb-5" key={project.id}>
                                <div className={styles.projectWrapper}>
                                    <div className={styles.bgLayer}></div>

                                    <div
                                        className={styles.imageCard}
                                        onMouseEnter={() =>
                                            setHoveredProject(project.id)
                                        }
                                        onMouseLeave={() => setHoveredProject(null)}
                                    >
                                        <Link href={`/${project.slug}`} >
                                            <img
                                                src={project.image}
                                                alt={project.name}
                                                className="img-fluid w-100"
                                            />
                                        </Link>

                                        <div className={styles.overlayCard}>

                                            {/* 🔥 CLICKABLE HEADING (microsite page) */}
                                            <Link
                                                href={`/${project.slug}`}
                                                className="text-decoration-none text-dark"
                                            >
                                                <h2
                                                    className="fw-bold mb-1 fs-4"
                                                    style={{ cursor: "pointer" }}
                                                >
                                                    {project.name}
                                                </h2>
                                            </Link>

                                            <p className="text-secondary small mb-2 d-flex align-items-center">
                                                <MapPin size={16} className="me-1" />
                                                {project.location}
                                            </p>

                                            {hoveredProject === project.id ? (
                                                <>
                                                    <p className="text-secondary small mb-3">
                                                        {project.description}
                                                    </p>
                                                    <div className={styles.detailsRow}>
                                                        <span>{project.details.type}</span>
                                                        {/* <span>{project.details.size}</span> */}
                                                    </div>
                                                </>
                                            ) : (
                                                <div className={styles.detailsRowStatic}>
                                                    <span>{project.details.type}</span>
                                                    {/* <span>{project.details.size}</span>*/}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="text-end mt-4">
                                    <Button
                                        className={styles.enquireBtn}
                                        onClick={() => handleShow(project)}
                                    >
                                        Enquire
                                    </Button>

                                    <Button
                                        className={styles.callBtn}
                                        onClick={() => handleCallNow(project.call)}
                                    >
                                        Call Now
                                    </Button>

                                    <Button
                                        className={styles.whatsappBtn}
                                        onClick={() => handleWhatsapp(project.whatsapp)}
                                    >
                                        Whatsapp
                                    </Button>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            <Modal show={showEnquiryModal} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Enquire About {enquiringProject?.name}
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <ContactForm
                        inputClass="form-control mb-2"
                        buttonClass="btn text-white bg-dark px-4"
                    />
                </Modal.Body>
            </Modal>
        </>
    );
}
