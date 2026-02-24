"use client";
import React, { useState } from "react";
import { Accordion, Container } from "react-bootstrap";

const FAQSection = () => {
    const [activeKey, setActiveKey] = useState<string | null>(null);

    const faqs = [
        {
            question: "What makes Mythri Builders projects unique?",
            answer:
                "Every Mythri Builders project blends thoughtful design, superior quality, and modern sustainability practices to create homes that last for generations.",
        },
        {
            question: "Where are Mythri Builders projects located?",
            answer:
                "Our projects are located in prime residential areas of Bangalore, offering excellent connectivity, safety, and proximity to key city amenities.",
        },
        {
            question: "Do Mythri Builders offer loan assistance?",
            answer:
                "Yes, we collaborate with leading financial institutions and banks to help buyers with easy and quick home loan approvals.",
        },
        {
            question: "Are Mythri projects RERA approved?",
            answer:
                "Yes, all our projects are RERA registered and comply with the highest standards of transparency and accountability.",
        },
        {
            question: "Can I visit the site before booking?",
            answer:
                "Absolutely! We welcome you to schedule a visit to explore the project site and experience the environment firsthand.",
        },
    ];

    return (
        <section className="py-5 bg-light" id="faq">
            <Container>
                <div className="text-center mb-5">
                    <h2 className="fw-bold theme-color-dark fs-2">Frequently Asked Questions</h2>
                    <p className="text-secondary">
                        Have questions? We’ve got answers to help you make an informed decision.
                    </p>
                </div>

                <Accordion
                    activeKey={activeKey ?? undefined}
                    onSelect={(key) => setActiveKey(key === activeKey ? null : (key as string))}
                >
                    {faqs.map((item, index) => (
                        <Accordion.Item eventKey={index.toString()} key={index} className="mb-3">
                            <Accordion.Header className="mb-0">{item.question}</Accordion.Header>
                            <Accordion.Body className="text-secondary">{item.answer}</Accordion.Body>
                        </Accordion.Item>
                    ))}
                </Accordion>
            </Container>
        </section>
    );
};

export default FAQSection;
