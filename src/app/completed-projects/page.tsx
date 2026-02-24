// components/ProjectShowcase.js
"use client";
import React, { useState } from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import styles from "../ProjectShowcase.module.css";
import ContactForm from "../components/ContactForm";

// 📞 Define the contact details (use your actual phone number and WhatsApp number)
const CONTACT_NUMBER = "tel:+919164789898";
const WHATSAPP_NUMBER = "919164789898"; // Use number without "+"
const WHATSAPP_MESSAGE =
    "I am interested in one of your completed projects. Please contact me.";

// ✅ Reordered projects + added isSold flag
const projects = [
    {
        id: 3,
        name: "Mythri Sapphire",
        location: "Off Sarjapur Road, Bengaluru",
        description:
            "Mythri Sapphire, developed by Mythri Builders Bangalore, is a premium residential development located off Sarjapur Road. Created by one of the Best Builders In Bangalore, it offers spacious homes with modern amenities, making it an ideal choice for families seeking comfort and convenience.",
        image: "/images/Mythri Sapphire.webp",
        isSold: true,
        details: {
            type: "2 & 3 BHK Apartments",
            size: "",
            price: "",
            status: "Completed",
            possession: "Completed",
            units: "—",
        },
    },
    {
        id: 2,
        name: "Mythri Square",
        location: "Immadihalli, Whitefield, Bengaluru",
        description:
            "Mythri Square is a completed community by Mythri Builders, located in the heart of Whitefield and offering residents exceptional connectivity and a comfortable living environment. As a showcase from the Best Builders In Bangalore, the project features well-planned homes with thoughtful use of space.",
        image: "/images/Mythri Square.webp",
        isSold: true,
        details: {
            type: "Residential Apartments",
            size: "",
            price: "",
            status: "Completed",
            possession: "Completed",
            units: "—",
        },
    },
    {
        id: 1,
        name: "Mythri Sunshine",
        location: "Rampura, Bidarahalli Hobli, Bengaluru",
        description:
            "Mythri Sunshine by Mythri Builders Bangalore offers thoughtfully crafted homes designed to deliver comfort, connectivity, and a peaceful lifestyle. Delivered by one of the Best Builders In Bangalore, the project in Rampura provides modern amenities with easy access to city conveniences.",
        image: "/images/Mythri Sunshine.webp",
        isSold: true,
        details: {
            type: "Residential Apartments",
            size: "",
            price: "",
            status: "Completed",
            possession: "Completed",
            units: "—",
        },
    },
    {
        id: 4,
        name: "Mythri Signature",
        location: "Off Sarjapur Road, Bengaluru",
        description:
            "Mythri Signature is crafted by Mythri Builders for modern urban families who value premium living. Backed by the expertise of the Best Builders In Bangalore, its spacious layouts and quality construction provide an elevated lifestyle in one of Bengaluru’s fastest-growing regions.",
        image: "/images/Mythri Signature.webp",
        isSold: false, // Only this one shows Enquire
        details: {
            type: "Residential Apartments",
            size: "",
            price: "",
            status: "Completed",
            possession: "Completed",
            units: "—",
        },
    },
];

export default function CompletedProjectShowcase() {
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

    const handleCallNow = () => {
        window.location.href = CONTACT_NUMBER;
    };

    const handleWhatsapp = () => {
        const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
            WHATSAPP_MESSAGE
        )}`;
        window.open(url, "_blank");
    };

    return (
        <>
            {/* Header section */}
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
                                        Completed Projects
                                    </p>
                                    <p className="fs-6 text-center">
                                        <Link
                                            className="text-white text-decoration-none"
                                            href="https://mythribuilders.com/"
                                        >
                                            Home
                                        </Link>{" "}
                                        / Completed Projects
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Projects section */}
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
                                        onMouseLeave={() =>
                                            setHoveredProject(null)
                                        }
                                    >
                                        <img
                                            src={project.image}
                                            alt={project.name}
                                            className="img-fluid w-100"
                                        />

                                        <div className={styles.overlayCard}>
                                            <h2 className="fw-bold mb-1 fs-4">
                                                {project.name}{" "}
                                                {project.isSold && (
                                                    <span className={styles.soldTag}>Sold</span>
                                                )}
                                            </h2>
                                            <p className="text-secondary small mb-2 d-flex align-items-center">
                                                <MapPin
                                                    size={16}
                                                    className="me-1"
                                                />
                                                {project.location}
                                            </p>

                                            {hoveredProject === project.id ? (
                                                <>
                                                    <p className="text-secondary small mb-3">
                                                        {project.description}
                                                    </p>
                                                    <div
                                                        className={
                                                            styles.detailsRow
                                                        }
                                                    >
                                                        <span>
                                                            {
                                                                project.details
                                                                    .type
                                                            }
                                                        </span>
                                                        <span>
                                                            {
                                                                project.details
                                                                    .size
                                                            }
                                                        </span>
                                                        <span>
                                                            {
                                                                project.details
                                                                    .price
                                                            }
                                                        </span>
                                                    </div>
                                                </>
                                            ) : (
                                                <div
                                                    className={
                                                        styles.detailsRowStatic
                                                    }
                                                >
                                                    <span>
                                                        {project.details.type}
                                                    </span>
                                                    <span>
                                                        {project.details.size}
                                                    </span>
                                                    <span>
                                                        {project.details.price}
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="text-end mt-4">
                                    {!project.isSold && (
                                        <>
                                            {/* Enquire Button */}
                                            <Button
                                                className={styles.enquireBtn}
                                                onClick={() => handleShow(project)}
                                            >
                                                Enquire
                                            </Button>

                                            {/* Call Now Button */}
                                            <Button
                                                className={styles.callBtn}
                                                onClick={handleCallNow}
                                            >
                                                Call Now
                                            </Button>

                                            {/* Whatsapp Button */}
                                            <Button
                                                className={styles.whatsappBtn}
                                                onClick={handleWhatsapp}
                                            >
                                                Whatsapp
                                            </Button>
                                        </>
                                    )}

                                    {/* Optional Sold Text */}
                                    {project.isSold && (
                                        <span className={styles.soldText}>Sold Out</span>
                                    )}
                                </div>

                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* Enquiry Modal */}
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