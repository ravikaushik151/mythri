"use client";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { GraduationCap, Bus, Building2, Stethoscope, Laugh } from "lucide-react"; // icons

export default function LocationSection() {
    return (
        <section className="py-5 bg-white text-dark">
            <Container>
                <Row className="gy-4">
                    <Col md={6}>
                        {/* Heading */}
                        <div className="text-center mb-5">
                            <small className="text-uppercase text-muted fw-semibold letter-spacing-1">
                                Location
                            </small>
                            <h2 className="display-6 fw-bold mt-2" style={{ color: "#4a4a2f" }}>
                                Let the senses breathe in balance
                            </h2>
                            <p className="mt-3 text-secondary" style={{ maxWidth: "700px", margin: "0 auto" }}>
                                Nestled in the heart of Lohegaon, Nestterra by TRIAA, one of the new projects in
                                Lohegaon, offers a serene escape without sacrificing connectivity. Surrounded by lush
                                greenery and natural calm, it provides effortless access to key city hubs. Here,
                                nature’s rhythm comes together with urban convenience — a rare sanctuary where balance,
                                wellbeing, and lifestyle blend seamlessly.
                            </p>
                        </div>
                    </Col>
                    {/* Category Grid */}

                    {/* Workplaces */}
                    <Col md={3}>
                        <div className="text-center">
                            <Building2 size={40} color="#7a7a4d" className="mb-3" />
                            <h5 className="fw-bold mb-2" style={{ color: "#4a4a2f" }}>Workplaces</h5>
                            <ul className="list-unstyled text-secondary small text-start d-inline-block">
                                <li>Tech Park One – 7.9 Km</li>
                                <li>Business Bay – 8.6 Km</li>
                                <li>Commerzone IT Park – 8.7 Km</li>
                                <li>Cerebrum IT Park – 9.3 Km</li>
                                <li>Eon IT Park – 11.8 Km</li>
                            </ul>
                        </div>
                    </Col>

                    {/* Hospitals */}
                    <Col md={3}>
                        <div className="text-center">
                            <Stethoscope size={40} color="#7a7a4d" className="mb-3" />
                            <h5 className="fw-bold mb-2" style={{ color: "#4a4a2f" }}>Hospitals</h5>
                            <ul className="list-unstyled text-secondary small text-start d-inline-block">
                                <li>Orchid Specialty Hospital – 1.8 Km</li>
                                <li>CT Nursing Home – 3.1 Km</li>
                                <li>Sahyadri Hospital – 8.4 Km</li>
                                <li>Ruby Hall – 11.7 Km</li>
                            </ul>
                        </div>
                    </Col>

                    {/* Schools */}
                    <Col md={3}>
                        <div className="text-center">
                            <GraduationCap size={40} color="#7a7a4d" className="mb-3" />
                            <h5 className="fw-bold mb-2" style={{ color: "#4a4a2f" }}>Schools</h5>
                            <ul className="list-unstyled text-secondary small text-start d-inline-block">
                                <li>Dr. Mar Theophilus School – 2.1 Km</li>
                                <li>Pragati International – 3.4 Km</li>
                                <li>St. Peter’s School – 3.4 Km</li>
                                <li>Symbiosis SCMS – 6.6 Km</li>
                                <li>Lexicon School – 11.6 Km</li>
                            </ul>
                        </div>
                    </Col>

                    {/* Transportation */}
                    <Col md={3}>
                        <div className="text-center">
                            <Bus size={40} color="#7a7a4d" className="mb-3" />
                            <h5 className="fw-bold mb-2" style={{ color: "#4a4a2f" }}>Transportation</h5>
                            <ul className="list-unstyled text-secondary small text-start d-inline-block">
                                <li>Pune International Airport – 5 Km</li>
                                <li>Vishrantwadi Bus Stop – 6.8 Km</li>
                                <li>Ramwadi Metro Station – 7.8 Km</li>
                                <li>Pune Railway Station – 12.4 Km</li>
                            </ul>
                        </div>
                    </Col>

                    {/* Entertainment */}
                    <Col md={3}>
                        <div className="text-center">
                            <Laugh size={40} color="#7a7a4d" className="mb-3" />
                            <h5 className="fw-bold mb-2" style={{ color: "#4a4a2f" }}>Entertainment</h5>
                            <ul className="list-unstyled text-secondary small text-start d-inline-block">
                                <li>Dmart Ready – 900 M</li>
                                <li>Phoenix Marketcity – 7.8 Km</li>
                                <li>Diamond Water Park – 2.9 Km</li>
                                <li>The Pavillion Mall – 17.4 Km</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
