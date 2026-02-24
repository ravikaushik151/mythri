'use client';
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { QRCodeCanvas } from "qrcode.react";

const ReraCertificate = () => {
    const reraNumber = "P52100023778";
    const reraWebsite = "https://maharera.maharashtra.gov.in";
    const qrText = `${reraWebsite}?rera=${reraNumber}`; // You can change this text to anything

    return (
        <section className="bg-white">
            <Container className="my-4">
                <div className="p-4 text-center" >
                    <h6 className="mb-3 fw-semibold">QR Code for RERA Certificate</h6>

                    <Row className="justify-content-center">
                        <Col md="auto">
                            <div
                                className="p-4 rounded"
                                style={{ minWidth: "260px" }}
                            >
                                <p className="mb-2">
                                    <strong>RERA Registration Number :</strong> {reraNumber}
                                </p>

                                {/* ✅ Dynamically Generated QR Code */}
                                <QRCodeCanvas
                                    value={qrText}
                                    size={120}
                                    bgColor="#ffffff"
                                    fgColor="#000000"
                                    level="H"
                                    includeMargin={true}
                                />

                                <p className="mt-3 mb-0 small">
                                    Website{" "}
                                    <a
                                        href={reraWebsite}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {reraWebsite}
                                    </a>
                                </p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    );
};

export default ReraCertificate;
