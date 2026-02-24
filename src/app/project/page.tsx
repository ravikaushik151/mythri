// components/ProjectShowcase.js
"use client";
import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import styles from "../ProjectShowcase.module.css";

const projects = [
  {
    id: 1,
    name: "Mythri Street",
    location: "Off Sarjapur Road, Kodathi",
    description:
      "Mythri Street is a thoughtfully crafted residential landmark spread across 3 acres of prime land off Sarjapur Road. With 80% open spaces, it blends urban sophistication with serene living, making it a natural choice for anyone looking for an Apartment in Sarjapur Road from reputed Real Estate Developers in Sarjapur.",
    image: "/images/street.webp",
    details: {
      type: "2 & 3 BHK Residential Apartments",
      size: "1100 sqft - 1550 sqft (Approx.)",
      price: "90 Lacs Onwards*",
      status: "Under Construction",
      possession: "2028",
      units: "219 Units",
    },
  },
  {
    id: 2,
    name: "Mythri Sity",
    location: "Off Sarjapur Road, Bengaluru",
    description:
      "Mythri Sity is that kind of place - where thoughtful design meets timeless comfort, developed by experienced Real Estate Developers in Sarjapur. Spread across 5 acres, it brings together the warmth of community living and the freedom of open spaces for those seeking a Flat in Sarjapur Road with ample greenery.",
    image: "/images/sity.webp",
    details: {
      type: "Residential Apartments",
      size: "5 Acre Development",
      price: "On Request",
      status: "Under Construction",
      possession: "2028",
      units: "5 Acre Development",
    },
  },
  {
    id: 3,
    name: "Mythri Sikharam",
    location: "Off Sarjapur Road, Hadosiddapura",
    description:
      "Mythri Sikharam is a thoughtfully designed residential project offering a balance of modern living and timeless comfort. The homes are spacious, airy, and finished with premium materials to enhance aesthetics and functionality.",
    image: "/images/sikharam.webp",
    details: {
      type: "2 & 3 BHK Residential Apartments",
      size: "1150 sqft - 1600 sqft (Approx.)",
      price: "80 Lacs Onwards*",
      status: "Under Construction",
      possession: "October 2027",
      units: "182 Units",
    },
  },
  {
    id: 4,
    name: "Mythri Sankalp",
    location: "KR Puram, Bengaluru",
    description:
      "Mythri Sankalp offers spacious 2 & 3 BHK apartments designed for comfort and modern living. Located KR Puram, the project is RERA approved, providing an ideal blend of convenience and luxury.",
    image: "/images/mythrisapphire.webp",
    details: {
      type: "2 & 3 BHK Residential Apartments",
      size: "1200 sqft - 1600 sqft (Approx.)",
      price: "85 Lacs Onwards*",
      status: "Under Construction",
      possession: "December 2026",
      units: "101 Units",
    },
  },
];

export default function ProjectShowcase() {
  const [hoveredProject, setHoveredProject] = useState(null);

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
                className="img-fluid masterpiece "
                alt="masterpiece"
              />
              <div className="overlay2 position-absolute top-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center">
                <div className="text-white d-block text-center">
                  <h1 className="fs-1 mb-3 text-uppercase">Projets</h1>
                  <p className="fs-6 text-center">
                    <Link className="text-white text-decoration-none " href="https://mythribuilders.com/">
                      Home
                    </Link>{" "}
                    / Projets
                  </p>
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
                    onMouseEnter={() => setHoveredProject(project.id)}
                    onMouseLeave={() => setHoveredProject(null)}
                  >
                    <img
                      src={project.image}
                      alt={project.name}
                      className="img-fluid w-100"
                    />

                    <div className={styles.overlayCard}>
                      <h4 className="fw-bold mb-1">{project.name}</h4>
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
                            <span>{project.details.size}</span>
                            <span>{project.details.price}</span>
                          </div>
                        </>
                      ) : (
                        <div className={styles.detailsRowStatic}>
                          <span>{project.details.type}</span>
                          <span>{project.details.size}</span>
                          <span>{project.details.price}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="text-end mt-4">
                  <Button className={styles.enquireBtn}>Enquire</Button>
                  <Button className={styles.callBtn}>Call Now</Button>
                  <Button className={styles.whatsappBtn}>Whatsapp</Button>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}