"use client";

import { Container, Row, Col, Card } from "react-bootstrap";

const teamMembers = [
    {
        name: "Mr. S. Anil Kumar Reddy",
        role: "MANAGING PARTNER",
        description:
            "With over 20 years of hands on involvement in the Bangalore real estate industry, he understands and brings the nuances of the trade into perspective.",
    },
    {
        name: "Mr. T. Kishore Babu",
        role: "MANAGING PARTNER",
        description:
            "From a software professional who saw a gap in the buyers and homeowners to having a decade of experience in the infrastructure industry, Mr. Kishore is a man of passion and a deep understanding of the consumer requirements!",
    },
    {
        name: "Mr. A. Kiran Kumar",
        role: "MANAGING PARTNER",
        description:
            "His wealth of experience in management, scheduling, and construction processes of over 20 years is an asset to the functioning of Mythri Builders Bangalore.",
    },
];

export default function TeamSection() {
    return (
        <section className="py-5">
            <Container>
                <Row className="g-4 justify-content-center">
                    <Col md={12} sm={12}>
                        <div className="text-center mb-4">
                            <h2 className="mb-3 text-dark">The Leadership Team</h2>
                            <p className=" text-dark mb-0">We have structural designers, civil engineers, skilled working teams, financing teams, 24-hour CRM support teams and marketing teams that total to over 50 professional, passionate, dedicated and hardworking individuals who together form the core team behind Mythri Builders Bangalore. We are also backed by over 500 people, most of whom are involved in more than one project due to the overall experience they have had with us!</p>
                        </div>
                    </Col>
                    {teamMembers.map((member, index) => (
                        <Col key={index} md={4} sm={12}>
                            <Card className="h-100 text-center shadow-sm p-4 border-0">
                                <Card.Body>
                                    <h4 className="fw-bold text-dark">{member.name}</h4>
                                    <p className="text-uppercase text-muted small letter-spacing">
                                        {member.role}
                                    </p>
                                    <p className="mt-3 text-justify">{member.description}</p>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>

            <style jsx>{`
        .letter-spacing {
          letter-spacing: 2px;
        }
      `}</style>
        </section>
    );
}
