"use client";
import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { MapPin } from "lucide-react";

const projects = [
  {
    id: 1,
    name: "Rama Krystal One",
    location: "Moshi, Pune",
    description:
      "While Moshi is becoming a preferred residential destination in and around Pimpri-Chinchwad, Central Moshi is gaining reputation as the hub of premium living. And at the heart of this is Rama Group’s next landmark. Presenting Krystal One by Rama Group, where 2BHK Premium Living invites you to enjoy urban living in its best form.",
    image: "/images/project1.png",
    details: {
      type: "2 RHK Homes",
      size: "668 sqft - 719 sqft",
      price: "47.18 Lacs Onwards*",
    },
  },
  {
    id: 2,
    name: "Mythri Sankalp",
    location: "Off Sarjapur Road, Bengaluru",
    description:
      "Mythri Sankalp offers spacious 2 & 3 BHK apartments designed for comfort and modern living, surrounded by lush greenery with easy access to city hubs.",
    image: "/images/project2.png",
    details: {
      type: "2 & 3 BHK",
      size: "1200 sqft - 1600 sqft",
      price: "85 Lacs Onwards*",
    },
  },
  {
    id: 3,
    name: "Nestterra by TRIAA",
    location: "Lohegaon, Pune",
    description:
      "Nestled in the heart of Lohegaon, this premium project offers a serene escape without sacrificing connectivity — nature’s rhythm meets urban convenience.",
    image: "/images/project3.png",
    details: {
      type: "2 BHK Apartments",
      size: "750 sqft - 980 sqft",
      price: "62 Lacs Onwards*",
    },
  },
];

export default function ProjectShowcase() {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <section className="py-5 bg-white text-dark">
      <Container>
        <Row className="justify-content-center">
          {projects.map((project) => (
            <Col md={10} className="mb-5" key={project.id}>
              <div
                className="position-relative shadow-lg rounded overflow-hidden"
                style={{
                  backgroundColor: "#fdf9f3",
                  padding: "30px",
                }}
              >
                {/* Background Layer */}
                <div
                  className="position-absolute top-0 start-0 w-100 h-100"
                  style={{
                    backgroundColor: "#f4efe4",
                    zIndex: 0,
                    transform: "translate(15px, 15px)",
                    borderRadius: "10px",
                  }}
                ></div>

                {/* Image + Card */}
                <div
                  className="position-relative overflow-hidden"
                  style={{
                    borderRadius: "10px",
                    boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
                  }}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <img
                    src={project.image}
                    alt={project.name}
                    className="img-fluid w-100"
                    style={{ borderRadius: "10px" }}
                  />

                  {/* Overlay Card */}
                  <div
                    className="position-absolute bg-white p-4 shadow"
                    style={{
                      bottom: "20px",
                      right: "20px",
                      width: "60%",
                      maxWidth: "550px",
                      borderRadius: "6px",
                      transition: "all 0.4s ease",
                    }}
                  >
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
                        <div className="d-flex justify-content-between text-secondary small fw-semibold border-top pt-2">
                          <span>{project.details.type}</span>
                          <span>{project.details.size}</span>
                          <span>{project.details.price}</span>
                        </div>
                      </>
                    ) : (
                      <div className="d-flex justify-content-between text-secondary small fw-semibold mt-3">
                        <span>{project.details.type}</span>
                        <span>{project.details.size}</span>
                        <span>{project.details.price}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="text-end mt-4">
                <Button
                  variant="danger"
                  className="me-2 px-4 rounded-0"
                  style={{ backgroundColor: "#e94f35", border: "none" }}
                >
                  Enquire
                </Button>
                <Button
                  variant="danger"
                  className="me-2 px-4 rounded-0"
                  style={{ backgroundColor: "#e94f35", border: "none" }}
                >
                  Call Now
                </Button>
                <Button
                  variant="success"
                  className="px-4 rounded-0"
                  style={{ backgroundColor: "#25D366", border: "none" }}
                >
                  Whatsapp
                </Button>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
